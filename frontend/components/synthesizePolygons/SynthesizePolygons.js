import React, {useEffect, useRef, useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import {getCookie} from "../../common";
import FileInput from "./FileInput";

const API_ENDPOINT = "/api/synthesize_polygon/";
const API_ENDPOINT_FILE = "/api/synthesize_polygon_csv/";

const SynthesizePolygons = () => {
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const [noteLength, setNoteLength] = useState(1);
    const [noteDelay, setNoteDelay] = useState(1);
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

    function handleChangeNoteLength(e) {
        e.preventDefault();
        setNoteLength(e.target.value);
    }

    function handleChangeNoteDelay(e) {
        e.preventDefault();
        setNoteDelay(e.target.value);
    }

    async function submitPolygonFile(file) {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
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
            body: JSON.stringify({points}),
        };
        fetch("API_ENDPOINT", requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <h2>Inputs</h2>
            <p>
                Note Length (seconds):
                <input type="number" style={{marginLeft: 5}} value={noteLength} onChange={handleChangeNoteLength}/>
            </p>
            <p>
                Note Delay (seconds):
                <input type="number" style={{marginLeft: 5}} value={noteDelay} onChange={handleChangeNoteDelay}/>
            </p>
            <FileInput
                onSubmit={submitPolygonFile}
            />
            <PolygonEditor
                width={300}
                height={300}
                showSubmit
                onSubmit={submitPolygon}
            />
            <h2>Results</h2>
            {data ?
                <>
                    <audio controls controlsList={"nodownload"} ref={audioRef}>
                        <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                    </audio>
                    <br/>
                    <br/>
                    <PolygonViewer width={300} height={300} points={data["points"]}/>
                </>
                : <p>Upload a CSV or draw a polygon above to get results!</p>
            }
        </div>
    );
};

export default SynthesizePolygons;
