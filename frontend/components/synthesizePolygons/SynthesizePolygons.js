import React, {useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";

const SynthesizePolygons = () => {
    const [sound, setSound] = useState(null);

    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <UploadFileInput
                id={1}
                uploadSuccessfulCallback={setSound}
                apiEndpoint={'/api/synthesize_polygon/'}
            />
        </div>
    );
};

export default SynthesizePolygons;
