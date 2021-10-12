import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";

const TimeSeries = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);

    return (
        <>
            <h2>Time Series Data</h2>
            <UploadTimeSeriesFileInput
                id={0}
                uploadSuccessfulCallback={setInstrumentSamples}
                apiEndpoint={'api/generate_instrument_2d/'}
            />
            <p>Upload a .csv file where each row represents the ratios for a single sound.</p>
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
