import React, {useState} from "react";
import FileInput from "./inputs/FileInput";
import SliderInstrument from "./instruments/SliderInstrument";
import PadInstrument from "./instruments/PadInstrument";
import {fetchPost} from "../common";

const Home = () => {
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
            <h2>Welcome to our Sonification toolkit!</h2>
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

export default Home;
