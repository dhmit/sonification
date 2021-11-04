import React, {useEffect, useRef, useState} from "react";
import {getCookie} from "../../common";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import FileInput from "../inputs/FileInput";
import CustomizableInput from "../inputs/CustomizableInput";

const API_ENDPOINT = "/api/synthesize_polygon/";
const API_ENDPOINT_FILE = "/api/synthesize_polygon_csv/";

const SynthesizePolygons = () => {
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const [noteLength, setNoteLength] = useState(1);
    const [noteDelay, setNoteDelay] = useState(1);
    const [restrictOctave, setRestrictOctave] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (data && data["sound"]) {
            setSound(data["sound"]);
        }
    }, [data]);

    useEffect(() => {
        if (data && sound) {
            console.log("updated sound");
            audioRef.current.load();
        }
    }, [sound]);

    async function submitPolygonFile(file) {
        // TODO: refactor me using fetchPost from common.js
        const formData = createUserOptionFormData();
        formData.append("points", file, "tempfile.csv");
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken,
            },
            body: formData,
        };
        fetch(API_ENDPOINT_FILE, requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }

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

    function createUserOptionFormData() {
        const formData = new FormData();
        userOptions.forEach((option) => {
            console.log(`${option.name}: ${option.getValue().toString()}`);
            formData.append(option.name, option.getValue().toString());
        });
        return formData;
    }

    function createUserOptionObject() {
        const obj = {};
        userOptions.forEach((option) => {
            console.log(`${option.name}: ${option.getValue().toString()}`);
            obj[option.name] = option.getValue();
        });
        return obj;
    }

    // customizable user options. simply add or remove items to the list to add/remove options
    // fields are passed to <CustomizableInput/> component.
    const userOptions = [
        {
            type: "number",
            name: "noteLength",
            display: "Note Length (seconds):",
            getValue: () => noteLength,
            setValue: setNoteLength,
        },
        {
            type: "number",
            name: "noteDelay",
            display: "Note Delay (seconds):",
            getValue: () => noteDelay,
            setValue: setNoteDelay,
        },
        {
            type: "checkbox",
            name: "restrictOctave",
            display: "Restrict Octave:",
            getValue: () => restrictOctave,
            setValue: () => setRestrictOctave(!restrictOctave),
        },
    ];

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <h2>Inputs</h2>
            {userOptions.map((option) => <CustomizableInput key={option.name} {...option}/>)}
            <FileInput onSubmit={submitPolygonFile} />
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
                    <audio controls controlsList={"nodownload"} ref={audioRef}>
                        <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                    </audio>
                    <br/>
                    <br/>
                    <PolygonViewer width={300} height={300} points={data["points"]}/>
                </>
                : <p>Upload a CSV or draw a polygon above to get results! </p>
            }
        </div>
    );
};

export default SynthesizePolygons;
