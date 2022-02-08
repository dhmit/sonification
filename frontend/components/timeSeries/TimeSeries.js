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
        await fetchPost('/api/time_series_to_audio/', requestBody, response => {
            setMusicData(response.musicData);
            setInstrumentSamples(response.samples);
        });
    };

    return (<ToolTemplate
        title='Time Series Data'
        // eslint-disable-next-line max-len
        description={<p>This sonification takes in a table of values (like a spreadsheet), and uses the numbers it finds within to create music.</p>}
        instrumentSamples={instrumentSamples}
        music={musicData?.sound}
        handleSubmit={() => submitToAPI()}
        sonifyButtonDisabled={!(fileInputData?.parsedCSV && fileInputData?.constants)}
        tool={<UploadTimeSeriesFileInput updateInputCallback={setFileInputData} />}
        dataViz={
            musicData &&
                <div>
                    <p>
                        Here's a visualization of the music we've produced. Scroll down to play it.
                    </p>
                    <img
                        src={`data:image/png;base64, ${musicData.img}`}
                        className="img-fluid"
                        alt="A line chart showing the frequencies of the sonified data"
                    />
                </div>
        }
    />);
};

export default TimeSeries;
