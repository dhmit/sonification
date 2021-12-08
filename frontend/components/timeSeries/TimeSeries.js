import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";

const TimeSeries = () => {
    const [audioSample, setAudioSample] = useState(null);

    return (
        <div>
            <h1>Time Series Data</h1>
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
                        src={`data:audio/wav;base64, ${audioSample.sound}`}
                        controlsList="download"
                    />
                    <br/>
                    <img src={`data:image/png;base64, ${audioSample.img}`}/>
                </>: null
            }

        </div>
    );
};

export default TimeSeries;
