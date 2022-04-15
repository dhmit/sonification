import React, {useState} from "react";
import UploadTimeSeriesFileInput from "../inputs/UploadTimeSeriesFileInput";
import {fetchPost} from "../../common";
import ToolTemplate from "../templates/ToolTemplate";


class TimeSeriesSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const requestBody = {colors: this.colors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {
            this.setState({
                instrumentSamples: response.samples,
                music: response.music,
            });
        });
    }

    render() {
        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    <img className="img-fluid h100" alt={this.title} src={this.img} />
                </div>
                <div className="col">
                    <div className="row mb-4"><div className="col w-100">
                        <h4 className="mb-4">{this.title}</h4>
                        {this.colors.map((color, i) =>
                            <PaletteColor
                                key={i} id={i}
                                color={color}
                                selected={false}
                                handlePaletteClick={undefined}
                            />
                        )}
                    </div></div>
                    <div className="row"><div className="col">
                        {this.state.music && this.state.instrumentSamples &&
                        <InstrumentPicker
                            samples={this.state.instrumentSamples}
                            music={this.state.music}
                            includedDefaultInstruments={ALL_INSTRUMENTS_NO_MUSIC}
                        />}
                    </div></div>
                </div>
            </div>
        );
    }
}

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
