import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";

const TimeSeries = () => {
    const [audioSample, setAudioSample] = useState(null);

    return (
        <>
            <h2>Time Series Data</h2>
            <UploadTimeSeriesFileInput
                uploadSuccessfulCallback={setAudioSample}
                apiEndpoint={'/api/time_series_to_music/'}
            />
            {
                audioSample ? <>
                    <p><b>Sound:</b></p>
                    <audio
                        controls
                        autoPlay
                        loop
                        src={`data:audio/wav;base64, ${audioSample}`}
                        controlsList="download"
                    />
                </>: null
            }

        </>
    );
};

export default TimeSeries;
