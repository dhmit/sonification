import React, {useState} from "react";
import UploadFileInput from "../inputs/UploadFileInput";

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
            <p>Upload a .csv file where each row represents the ratios for a single sound.
                Ratios should be within (0,1)
                Multiple rows represents multiple sounds joined together.</p>
            {
                instrumentSamples ? <>
                    <p><b>Sound:</b></p>
                    <audio
                        controls
                        autoPlay
                        loop
                        src={`data:audio/wav;base64, ${instrumentSamples}`}
                        controlsList="download"
                    />
                </>: null
            }

        </>
    );
};

export default TimeSeries;
