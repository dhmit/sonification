import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";
import InstrumentPicker from "../instruments/InstrumentPicker";

const TimeSeries = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);
    const [musicData, setMusicData] = useState(null);

    return (
        <div>
            <h1>Time Series Data</h1>
            <UploadTimeSeriesFileInput
                setMusicData={setMusicData}
                setInstrumentSamples={setInstrumentSamples}
                musicApiEndpoint={'/api/time_series_to_music/'}
                samplesApiEndpoint={'/api/time_series_to_samples/'}
            />
            {musicData &&
                <div>
                    <img
                        src={`data:image/png;base64, ${musicData.img}`}
                        alt="A line chart showing the frequencies of the sonified data"
                    />
                </div>
            }
            {musicData && instrumentSamples &&
                <InstrumentPicker music={musicData.sound} samples={instrumentSamples}/>
            }

        </div>
    );
};

export default TimeSeries;
