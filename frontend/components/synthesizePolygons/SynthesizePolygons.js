import React, {useEffect, useRef, useState} from "react";
import {getCookie} from "../../common";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import CustomizableInput from "../inputs/CustomizableInput";
import STYLES from "./PolygonPageLayout.module.scss";

const API_ENDPOINT = "/api/synthesize_polygon/";
const LOW_FREQ = 20;
const HIGH_FREQ = 10000;

const SynthesizePolygons = () => {
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const [timestamps, setTimestamps] = useState([]);
    const [curAudioTime, setCurAudioTime] = useState(0);
    const [noteLength, setNoteLength] = useState(1);
    const [noteDelay, setNoteDelay] = useState(1);
    const [restrictFrequency, setRestrictFrequency] = useState(false);
    const [sidesAsDuration, setSidesAsDuration] = useState(false);
    const [baseFrequency, setBaseFrequency] = useState(220);
    const [floorFrequency, setFloorFrequency] = useState(LOW_FREQ);
    const [ceilFrequency, setCeilFrequency] = useState(HIGH_FREQ);
    const audioRef = useRef(null);

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

            if (newLeftWidth <= 0) {
                return leftPaneWidth !== 0 && setLeftPaneWidth(0);
            }

            const totalWidth = splitPaneVerticalRef.current.clientWidth;
            if (newLeftWidth >= totalWidth) {
                return leftPaneWidth !== 0 && setLeftPaneWidth(totalWidth);
            }

            setLeftPaneWidth(newLeftWidth);
        } else if (horizontalSeparatorYPos.current) {
            const newTopHeight = settingsPaneHeight + e.clientY- horizontalSeparatorYPos.current;
            console.log(newTopHeight);
            horizontalSeparatorYPos.current = e.clientY;

            if (newTopHeight <= 0) {
                return settingsPaneHeight !== 0 && setSettingsPaneHeight(0);
            }

            const totalHeight = rightPaneRef.current.clientHeight;
            if (newTopHeight >= totalHeight) {
                return settingsPaneHeight !== 0 && setSettingsPaneHeight(totalHeight);
            }

            setSettingsPaneHeight(newTopHeight);
        }
    };

    const onMouseUp = () => {
        verticalSeparatorXPos.current = null;
        horizontalSeparatorYPos.current = null;
    };

    React.useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    });

    useEffect(() => {
        if (data) {
            if (data["sound"]) {
                setSound(data["sound"]);
            }
            if (data["timestamps"]) {
                setTimestamps(data["timestamps"]);
                console.log(data["timestamps"]);
            }
        }
    }, [data]);

    useEffect(() => {
        if (data && sound) {
            console.log("updated sound");
            audioRef.current.load();
        }
    }, [sound]);

    async function submitPolygon(points) {
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({points, ...createUserOptionObject()}),
        };
        fetch(API_ENDPOINT, requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }


    function createUserOptionObject() {
        const obj = {};
        userOptions.forEach((option) => {
            if (typeof option.enabled === "undefined" || option.enabled) {
                console.log(`${option.name}: ${option.getValue().toString()}`);
                obj[option.name] = option.getValue();
            }
        });
        return obj;
    }

    function capFrequency(freq, setFreq) {
        if (freq < LOW_FREQ) {
            setFreq(LOW_FREQ);
        }
        if (freq > HIGH_FREQ) {
            setFreq(HIGH_FREQ);
        }
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
        },
        {
            type: "number",
            name: "noteDelay",
            display: "Note delay (seconds):",
            getValue: () => noteDelay,
            setValue: setNoteDelay,
            enabled: !sidesAsDuration,
        },
        {
            type: "number",
            name: "baseFrequency",
            display: "Base frequency (Hz):",
            getValue: () => baseFrequency,
            setValue: setBaseFrequency,
            onBlur: () => capFrequency(baseFrequency, setBaseFrequency),
            min: LOW_FREQ,
            max: HIGH_FREQ,
        },
        {
            type: "checkbox",
            name: "restrictFrequency",
            display: "Restrict frequencies:",
            getValue: () => restrictFrequency,
            setValue: () => setRestrictFrequency(!restrictFrequency),
        },
        {
            type: "number",
            name: "floorFrequency",
            display: "Floor frequency (Hz):",
            getValue: () => floorFrequency,
            setValue: setFloorFrequency,
            onBlur: () => capFrequency(floorFrequency, setFloorFrequency),
            min: LOW_FREQ,
            max: HIGH_FREQ,
            enabled: restrictFrequency,
        },
        {
            type: "number",
            name: "ceilFrequency",
            display: "Ceiling frequency (Hz):",
            getValue: () => ceilFrequency,
            setValue: setCeilFrequency,
            onBlur: () => capFrequency(ceilFrequency, setCeilFrequency),
            min: LOW_FREQ,
            max: HIGH_FREQ,
            enabled: restrictFrequency,
        },
    ];

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <div className={STYLES.splitPane} ref={splitPaneVerticalRef}>
                <div className={STYLES.leftPane} ref={leftPaneRef}>
                    <h2>Polygon Editor</h2>
                    <p>
                        Files should be CSVs that have two columns that include x and y coordinates
                        of the
                        points of the polygon with x-coordinates in the first column and the
                        corresponding
                        y-coordinates in the second column.
                    </p>
                    <PolygonEditor
                        width={300}
                        height={300}
                        showSubmit
                        onSubmit={submitPolygon}
                    />
                    {data
                        ? <>
                            <PolygonViewer width={300} height={300} rawPoints={data["points"]}
                                           currentTime={curAudioTime} timestamps={timestamps}/>
                        </>
                        : <p>Upload a CSV or draw a polygon above to get results! </p>
                    }
                </div>
                <div className={STYLES.paneSeparatorVertical} onMouseDown={onMouseDownVerticalSeparator}/>
                <div className={STYLES.rightPane} ref={rightPaneRef}>
                    <div className={STYLES.editorSettings} ref={settingsRef}>
                        <h2>Settings</h2>
                        {userOptions.map((option) => <CustomizableInput
                            key={option.name} {...option}/>)}
                    </div>
                    <div className={STYLES.paneSeparatorHorizontal} onMouseDown={onMouseDownHorizontalSeparator}/>
                    <div className={STYLES.playback}>
                        <h2>Results</h2>
                        {data
                            ? <audio
                                controls
                                controlsList={"nodownload"}
                                ref={audioRef}
                                onTimeUpdate={() => {
                                    setCurAudioTime(audioRef.current.currentTime);
                                }}
                            >
                                <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                            </audio>
                            : <p>Upload a CSV or draw a polygon in the editor to get results! </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SynthesizePolygons;
