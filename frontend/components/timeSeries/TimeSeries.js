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
            <p>Upload a .csv file where each column represents the ratios for a single sound.
                Ratios need to be within (0,1)
                Multiple columns represents multiple sounds joined together.</p>
            <input className="form-control" type="number" min={0} placeholder={"seconds between" +
            " sounds"}/>
            <input className="form-control" type="number" min={0} step={.1} placeholder={"a -" +
            " attack"}/>
            <input className="form-control" type="number" min={0} step={.1} placeholder={"d -" +
            " decay"}/>
            <input className="form-control" type="number" min={0} step={.1} placeholder={"s -" +
            " sustain"}/>
            <input className="form-control" type="number" min={0} step={.1} placeholder={"r -" +
            " release"}/>
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
