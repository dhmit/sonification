import React, {useEffect, useRef, useState} from "react";
import {fetchPost} from "../../common";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import CustomizableInput from "../inputs/CustomizableInput";
import RangeSliderInput from "../inputs/RangeSliderInput";
import STYLES from "./PolygonPageLayout.module.scss";
import ToolTemplate from "../templates/ToolTemplate";

const MUSIC_API_ENDPOINT = "/api/polygon_to_music/";
const SAMPLES_API_ENDPOINT = "/api/polygon_to_samples/";
const LOW_FREQ = 20;
const HIGH_FREQ = 10000;

// all valid sync statuses
const SyncStatus = {
    SYNCED: "Synced",
    LOADING: "Loading...",
    UNSYNCED: "Unsynced changes - click submit to sonify",
};

// TODO: add error reporting for file upload, backend stuff, etc
const SynthesizePolygons = () => {
    // tool
    const [points, setPoints] = useState([]);

    // results
    const [musicData, setMusicData] = useState(null);
    const [musicAudio, setMusicAudio] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState(null);
    const [timestamps, setTimestamps] = useState([]);
    const [curAudioTime, setCurAudioTime] = useState(0);
    const [outOfSync, setOutOfSync] = useState(SyncStatus.SYNCED);

    // user settings
    const [noteLength, setNoteLength] = useState(1);
    const [noteDelay, setNoteDelay] = useState(1);
    const [restrictFrequency, setRestrictFrequency] = useState(false);
    const [sidesAsDuration, setSidesAsDuration] = useState(false);
    const [baseFrequency, setBaseFrequency] = useState(220);
    const [floorFrequency, setFloorFrequency] = useState(220);
    const [ceilFrequency, setCeilFrequency] = useState(880);

    // used for controlling overall pane
    const [leftPaneWidth, setLeftPaneWidth] = useState(null);
    const splitPaneVerticalRef = useRef(null);
    const leftPaneRef = useRef(null);
    const verticalSeparatorXPos = useRef(null);

    // Used for controlling right pane
    const [settingsPaneHeight, setSettingsPaneHeight] = useState(null);
    const settingsRef = useRef(null);
    const rightPaneRef = useRef(null);
    const horizontalSeparatorYPos = useRef(null);

    const audioRef = useRef(null);

    function switchSync(syncedOption, loadingOption, unsyncedOption) {
        switch (outOfSync) {
        case SyncStatus.SYNCED:
            return syncedOption;
        case SyncStatus.LOADING:
            return loadingOption;
        case SyncStatus.UNSYNCED:
            return unsyncedOption;
        }
    }

    useEffect(() => {
        const curHeight = rightPaneRef.current.clientHeight;
        rightPaneRef.current.style.maxHeight = `${curHeight}px`;
        leftPaneRef.current.style.maxHeight = `${curHeight}px`;
    });

    useEffect(() => {
        if (!leftPaneWidth) {
            setLeftPaneWidth(leftPaneRef.current.clientWidth);
            leftPaneRef.current.style.flex = "none";
        }

        leftPaneRef.current.style.width = `${leftPaneWidth}px`;
    }, [leftPaneWidth]);

    useEffect(() => {
        if (!settingsPaneHeight) {
            setSettingsPaneHeight(settingsRef.current.clientHeight);
            settingsRef.current.style.flex = "none";
        }

        settingsRef.current.style.height = `${settingsPaneHeight}px`;
    }, [settingsPaneHeight]);

    const onMouseDownVerticalSeparator = (e) => {
        verticalSeparatorXPos.current = e.clientX;
    };

    const onMouseDownHorizontalSeparator = (e) => {
        horizontalSeparatorYPos.current = e.clientY;
    };

    const onMouseMove = (e) => {
        if (verticalSeparatorXPos.current) {
            const newLeftWidth = leftPaneWidth + e.clientX - verticalSeparatorXPos.current;
            verticalSeparatorXPos.current = e.clientX;

            const totalWidth = splitPaneVerticalRef.current.clientWidth;
            const minWidth = .1*totalWidth;
            const maxWidth = .9*totalWidth;

            if (newLeftWidth <= minWidth) {
                return leftPaneWidth !== minWidth && setLeftPaneWidth(minWidth);
            }

            if (newLeftWidth >= maxWidth) {
                return leftPaneWidth !== maxWidth && setLeftPaneWidth(maxWidth);
            }

            setLeftPaneWidth(newLeftWidth);
        } else if (horizontalSeparatorYPos.current) {
            const newTopHeight = settingsPaneHeight + e.clientY- horizontalSeparatorYPos.current;
            horizontalSeparatorYPos.current = e.clientY;

            const totalHeight = rightPaneRef.current.clientHeight;
            const minHeight = .1*totalHeight;
            const maxHeight = .9*totalHeight;

            if (newTopHeight <= minHeight) {
                return settingsPaneHeight !== minHeight && setSettingsPaneHeight(minHeight);
            }

            if (newTopHeight >= maxHeight) {
                return settingsPaneHeight !== maxHeight && setSettingsPaneHeight(maxHeight);
            }

            setSettingsPaneHeight(newTopHeight);
        }
    };

    const onMouseUp = () => {
        verticalSeparatorXPos.current = null;
        horizontalSeparatorYPos.current = null;
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    });

    useEffect(() => {
        if (musicData) {
            if (musicData["sound"]) {
                setMusicAudio(musicData["sound"]);
            }
            if (musicData["timestamps"]) {
                setTimestamps(musicData["timestamps"]);
            }
        }
    }, [musicData]);

    useEffect(() => {
        if (musicData && musicAudio) {
            audioRef.current.load();
        }
    }, [musicAudio]);

    async function submitPolygon(points) {
        setOutOfSync(SyncStatus.LOADING);
        const requestBody = {points, ...createUserOptionObject()};
        await fetchPost(SAMPLES_API_ENDPOINT, requestBody, setInstrumentSamples);
        await fetchPost(MUSIC_API_ENDPOINT, requestBody, setMusicData);
        setOutOfSync(SyncStatus.SYNCED);
    }

    function createUserOptionObject() {
        const obj = {};
        userOptions.forEach((option) => {
            if (typeof option.enabled === "undefined" || option.enabled) {
                if (option.name === "Frequency Range") {
                    obj["floorFrequency"] = floorFrequency;
                    obj["ceilFrequency"] = ceilFrequency;
                } else {
                    obj[option.name] = option.getValue();
                }
            }
        });
        return obj;
    }

    // customizable user options. simply add or remove items to the list to add/remove options
    // fields are passed to <CustomizableInput/> component.
    const userOptions = [
        {
            type: "dropdown",
            name: "sidesAsDuration",
            display: "Use side lengths as:",
            getValue: () => sidesAsDuration,
            setValue: (v) => setSidesAsDuration(v === "true"),
            tooltip: "How to interpret side lengths of the polygon.",
            options: [
                {
                    name: "false",
                    display: "amplitudes",
                },
                {
                    name: "true",
                    display: "durations",
                },
            ],
        },
        {
            type: "number",
            name: "noteLength",
            display: "Note length (seconds):",
            getValue: () => noteLength,
            setValue: setNoteLength,
            tooltip: "Duration of each note.",
        },
        {
            type: "number",
            name: "noteDelay",
            display: "Note delay (seconds):",
            getValue: () => noteDelay,
            setValue: setNoteDelay,
            enabled: !sidesAsDuration,
            tooltip: "Delay between each note. Changing this can allow for note overlap.",
        },
        {
            type: "number",
            name: "baseFrequency",
            display: "Base frequency (Hz):",
            getValue: () => baseFrequency,
            setValue: setBaseFrequency,
            min: LOW_FREQ,
            max: HIGH_FREQ,
            tooltip: "The frequency of the first note.",
        },
        {
            type: "checkbox",
            name: "restrictFrequency",
            display: "Restrict frequencies:",
            getValue: () => restrictFrequency,
            setValue: () => setRestrictFrequency(!restrictFrequency),
            tooltip: "Whether to cap the frequencies of notes.",
        },
        {
            name: "Frequency Range",
            enabled: restrictFrequency,
            units: "Hz",
            minValue: LOW_FREQ,
            maxValue: HIGH_FREQ,
            values: [floorFrequency, ceilFrequency],
            updateValues: (val) => setFloorFrequency(val[0]) || setCeilFrequency(val[1]),
            step: 1,
        },
    ];

    return (<ToolTemplate
        title='Polygons'
        // eslint-disable-next-line max-len
        description={<p>Welcome to the Polygon Synthesizer! Start by drawing a polygon in the editor below or by uploading a file describing your polygon. Uploaded files should be CSVs that have two columns that include x and y coordinates of the points of the polygon with x-coordinates in the first column and the corresponding y-coordinates in the second column.</p>}
        instrumentSamples={instrumentSamples}
        music={musicAudio}
        handleSubmit={() => submitPolygon(points)}
        sonifyButtonDisabled={points.length < 3}
        tool={(
            <div>
                <div className={STYLES.splitPane} ref={splitPaneVerticalRef}>
                    <div className={STYLES.leftPane} ref={leftPaneRef}>
                        <PolygonEditor
                            outerWidth={leftPaneWidth}
                            onEdit={() => setOutOfSync(SyncStatus.UNSYNCED)}
                            // onSubmit={() => submitPolygon(points)}
                            onPointsUpdate={setPoints}
                        />
                    </div>
                    <div className={STYLES.paneSeparatorVertical}
                        onMouseDown={onMouseDownVerticalSeparator}>
                        <div className={STYLES.triangleLeft}/>
                        <div className={STYLES.triangleRight}/>
                    </div>
                    <div className={STYLES.rightPane} ref={rightPaneRef}>
                        <div className={STYLES.rightSubPane} ref={settingsRef}>
                            <h5>Audio Settings</h5>
                            {userOptions.map((option) => option.name === "Frequency Range"
                                ? <RangeSliderInput
                                    key={option.name}
                                    {...option}
                                    onEdit={() => setOutOfSync(SyncStatus.UNSYNCED)}
                                />
                                : <CustomizableInput
                                    key={option.name}
                                    {...option}
                                    onEdit={() => setOutOfSync(SyncStatus.UNSYNCED)}
                                />
                            )}
                        </div>
                        <div className={STYLES.paneSeparatorHorizontal}
                            onMouseDown={onMouseDownHorizontalSeparator}>
                            <div className={STYLES.triangleTop}/>
                            <div className={STYLES.triangleBottom}/>
                        </div>
                        <div className={STYLES.rightSubPane}>
                            <h5 style={{marginBottom: 0}}>Results</h5>
                            {/*Highly dependent on CSS for animation*/}
                            <div className={switchSync(
                                STYLES.statusDivSynced,
                                STYLES.statusDivLoading,
                                STYLES.statusDivUnsynced,
                            )}>
                                <svg width={10} height={10}>
                                    <circle cx={5} cy={5} r={switchSync(5, 4, 5)}/>
                                </svg>
                                <p className={switchSync(
                                )}>
                                    {outOfSync}
                                </p>
                            </div>
                            {musicData &&
                                <>
                                    <audio
                                        controls
                                        controlsList={"nodownload"}
                                        ref={audioRef}
                                        onTimeUpdate={() => {
                                            setCurAudioTime(audioRef.current.currentTime);
                                        }}
                                        src={`data:audio/wav;base64, ${musicAudio}`}/>
                                    <br/>
                                    <PolygonViewer width={300} height={300}
                                        rawPoints={musicData["points"]}
                                        currentTime={curAudioTime} timestamps={timestamps}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )}
    />);
};

export default SynthesizePolygons;
