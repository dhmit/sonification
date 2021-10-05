import React, {useEffect, useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";
import PolygonViewer from "./PolygonViewer";
import PolygonEditor from "./PolygonEditor";

const SynthesizePolygons = () => {
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const [editorPoints, setEditorPoints] = useState(null);

    useEffect(() => {
        if (data && data["sound"]) {
            setSound(data["sound"]);
        }
    }, [data]);

    // TODO: implement this
    async function submitPolygon() {
        
    }

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <UploadFileInput
                id={1}
                uploadSuccessfulCallback={setData}
                apiEndpoint={'/api/synthesize_polygon/'}
            />
            {data &&
                <>
                    <audio controls controlsList={"nodownload"}>
                        <source src={`data:audio/wav;base64,${sound}`} type={"audio/wav"}/>
                    </audio>
                    <br/>
                    <br/>
                    <PolygonViewer width={300} height={300} points={data["points"]}/>
                </>
            }
            <PolygonEditor
                width={300}
                height={300}
                onFinishedEditing={setEditorPoints}
                showSubmit
                onSubmit={submitPolygon}
            />
        </div>
    );
};

export default SynthesizePolygons;
