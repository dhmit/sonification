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
            <p>Upload a .csv file with <code>m</code> rows and <code>n</code> columns, and
                define how each column <code>j</code> transforms the value in the column.<p>
            </p>
                We process these values by making <code>n</code> sounds.
                <code> f(i,j)</code> represents a value at <code>(i,j)</code> in the csv.
                We transform the value with <code>F(i,j) = (f(i,j) + offset_j) * multiplier_j + base_frequency_j</code>.
                Each <code>F(i,j)</code> is made with the envelope defined for column <code>j</code>.
            </p>
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
