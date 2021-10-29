import React, {useEffect, useRef, useState} from "react";
import {getCookie} from "../../common";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import CustomizableInput from "../inputs/CustomizableInput";

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
            <h2>Inputs</h2>
            {userOptions.map((option) => <CustomizableInput key={option.name} {...option}/>)}
            <p>
                Files should be CSVs that have two columns that include x and y coordinates of the
                points of the polygon with x-coordinates in the first column and the corresponding
                y-coordinates in the second column.
            </p>
            <PolygonEditor
                width={300}
                height={300}
                showSubmit
                onSubmit={submitPolygon}
            />
            <h2>Results</h2>
            {data
                ? <>
                    <audio
                        controls
                        controlsList={"nodownload"}
                        ref={audioRef}
                        onTimeUpdate={() => {
                            setCurAudioTime(audioRef.current.currentTime);
                        }}
                    >
                        <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                    </audio>
                    <br/>
                    <br/>
                    <PolygonViewer width={300} height={300} rawPoints={data["points"]} curTime={curAudioTime} timestamps={timestamps}/>
                </>
                : <p>Upload a CSV or draw a polygon above to get results! </p>
            }
        </div>
    );
};

export default SynthesizePolygons;
