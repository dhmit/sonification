import React, {useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";
import SliderInstrument from "../instruments/SliderInstrument";


const TimeSeries = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);

    return (
        <>
            <h2>Time Series Data</h2>
            <UploadFileInput
                id={0}
                uploadSuccessfulCallback={setInstrumentSamples}
                apiEndpoint={'api/generate_instrument_2d/'}
            />
            {
                instrumentSamples ? <>
                    <p><b>Sound:</b></p>
                    <audio
                        controls
                        autoPlay
                        loop
                        src={`data:audio/wav;base64, ${instrumentSamples}`}
                        controlsList="nodownload"
                    />
                </>: null
            }

        </>
    );
};

export default TimeSeries;
