import React, {useState} from "react";
import UploadFileInput from "./inputs/UploadFileInput";
import SliderInstrument from "./instruments/SliderInstrument";
import {fetchPost} from "../common";

const Home = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);

    const apiEndpoint = '/api/generate_instrument/';
    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
        fetchPost(apiEndpoint, formData, setInstrumentSamples, false);
    };

    return (
        <>
            <h2>Welcome to our Sonification toolkit!</h2>
            <UploadFileInput
                onSubmitFunction={submitFileToAPI}
                uploadSuccessfulCallback={setInstrumentSamples}
            />
            <SliderInstrument
                samples={instrumentSamples}
            />
        </>
    );
};

export default Home;
