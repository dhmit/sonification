import React, {useState} from "react";
import UploadFileInput from "./inputs/UploadFileInput";
import SliderInstrument from "./instruments/SliderInstrument";


const Home = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);

    return (
        <>
            <h2>Welcome to our Sonification toolkit!</h2>
            <UploadFileInput
                id={0}
                uploadSuccessfulCallback={setInstrumentSamples}
                apiEndpoint={'api/generate_instrument/'}
            />
            <SliderInstrument
                samples={instrumentSamples}
            />
        </>
    );
};

export default Home;
