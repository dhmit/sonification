import React, {useState} from "react";
import FileInput from "../inputs/FileInput";
import SliderInstrument from "../instruments/SliderInstrument";
import PadInstrument from "../instruments/PadInstrument";
import {fetchPost} from "../../common";

const RatioCSV = () => {
    const [samples, setSamples] = useState(null);

    const apiEndpoint = '/api/generate_instrument/';
    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
        fetchPost(apiEndpoint, formData, setSamples, false);
    };

    return (
        <>
            <h1>Numbers</h1>
            <p>
                This component sonifies a CSV file with a single column of floats.
            </p>
            <p>
                This is for demoing only. Please don't ship me.
            </p>
            <FileInput
                onSubmit={submitFileToAPI}
                uploadSuccessfulCallback={setSamples}
            />
            {samples && <>
                <SliderInstrument samples={samples} />
                <PadInstrument samples={samples} />
            </>}
        </>
    );

};

export default RatioCSV;
