import React, {useEffect, useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";
import {getCookie} from "../../common";

const SynthesizePolygons = () => {
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const [editorPoints, setEditorPoints] = useState(null);

    useEffect(() => {
        if (data && data["sound"]) {
            setSound(data["sound"]);
            console.log("updated sound");
        }
    }, [data]);


    async function submitPolygon() {
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({points: editorPoints}),
        };
        fetch("/api/synthesize_polygon/", requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <UploadFileInput
                id={1}
                uploadSuccessfulCallback={setData}
                apiEndpoint={'/api/synthesize_polygon_csv/'}
            />
            <PolygonEditor
                width={300}
                height={300}
                onFinishedEditing={setEditorPoints}
                showSubmit
                onSubmit={submitPolygon}
            />
            {data &&
                <>
                    {sound && <audio controls controlsList={"nodownload"}>
                        <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                    </audio>}
                    <br/>
                    <br/>
                    <PolygonViewer width={300} height={300} points={data["points"]}/>
                </>
            }
        </div>
    );
};

export default SynthesizePolygons;
