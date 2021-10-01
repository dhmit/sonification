import React from "react";
import UploadFileInput from "../inputs/UploadFileInput";

const SynthesizePolygons = () => {
    return (
        <div>
            <h1>Synthesize Polygons</h1>
            <UploadFileInput
                id={1}
                uploadSuccessfulCallback={() => {}}
                apiEndpoint={'api/generate_instrument/'}
            />
        </div>
    );
};

export default SynthesizePolygons;
