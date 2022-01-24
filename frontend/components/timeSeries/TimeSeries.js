import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";
import {fetchPost} from "../../common";
import ToolTemplate from "../templates/ToolTemplate";

const TimeSeries = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);
    const [musicData, setMusicData] = useState(null);
    const [fileInputData, setFileInputData] = useState(null);

    const submitToAPI = async () => {
        const requestBody = fileInputData;
        // await fetchPost('/api/time_series_to_music/', requestBody, setMusicData);
        // await fetchPost('/api/time_series_to_samples/', requestBody, setInstrumentSamples);
        await fetchPost('/api/time_series_to_audio/', requestBody, response => {
            setMusicData(response.musicData);
            setInstrumentSamples(response.samples);
        });
    };
    
    return (<ToolTemplate
        title='Time Series Data'
        // eslint-disable-next-line max-len
        description={<p>This sonification takes in a table of values (like a spreadsheet), and uses the numbers it finds within to create music and instruments.</p>}
        instrumentSamples={instrumentSamples}
        music={musicData?.sound}
        handleSubmit={() => submitToAPI()}
        sonifyButtonDisabled={!(fileInputData?.parsedCSV && fileInputData?.constants)}
        tool={<div>
            {musicData &&
                <div>
                    <img
                        src={`data:image/png;base64, ${musicData.img}`}
                        className="img-fluid"
                        alt="A line chart showing the frequencies of the sonified data"
                    />
                </div>
            }
            <UploadTimeSeriesFileInput updateInputCallback={setFileInputData} />
        </div>}
    />);
};

export default TimeSeries;
