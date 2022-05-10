import React from "react";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import {StudentQuote, MOISES_QUOTE, EESHA_QUOTE} from "../../studentQuotes";

const SUNRISE_SUNSET_BOSTON = {
    title: "Sunrise and Sunset Times in Boston",
    filename: "boston_sunrise_sunset",
};

const PI = {
    title: "Digits of Pi",
    filename: "pi",
};

const GOLDEN = {
    title: "Golden Ratio",
    filename: "golden",
};


const DEFAULT_COLUMN_CONSTANTS = {
    "base_frequency": 220,
    "multiplier": 4,
    "offset": 0,
    "a_percentage": .2,
    "d_percentage": .1,
    "s_percentage": .5,
    "r_percentage": .2,
};

const INITIAL_EVERY_N = 1;
const INITIAL_DURATION = .5;


class TimeSeriesSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.data.title;
        this.name = props.data.filename;
        this.state = {};
    }

    constantsDefaults = {
        "base_frequency": {"label": "Base Frequency", "min": null, "max": null, "step": null},
        "multiplier": {"label": "Multiplier", "min": null, "max": null, "step": null},
        "offset": {"label": "Offset", "min": null, "max": null, "step": null},
        "a_percentage": {"label": "A", "min": 0, "max": 1, "step": .1},
        "d_percentage": {"label": "D", "min": 0, "max": 1, "step": .1},
        "s_percentage": {"label": "S", "min": 0, "max": 1, "step": .1},
        "r_percentage": {"label": "R", "min": 0, "max": 1, "step": .1},
    };

    setParsedCsvAndUpdateConstants(parsedData) {
        // TODO(ra): we don't need any of this for this demo: just hardcode constants per example
        const newColumnConstants = [];
        parsedData[0].forEach(() => newColumnConstants.push({...DEFAULT_COLUMN_CONSTANTS}));
        let nextFreq = 220;
        for (const constants of newColumnConstants) {
            constants.base_frequency = nextFreq;
            nextFreq *= 2;
        }

        const numRows = parsedData.length;
        // aim for 30 seconds of audio if too long
        const dur = Math.round(Math.min(30 / numRows, INITIAL_DURATION) * 10) / 10;
        this.setState({
            duration: dur,
            constants: newColumnConstants,
            parsedCSV: parsedData,
        });
    };

    async componentDidMount() {
        await fetchPost(
            '/api/time_series_sample_data/',
            {name: this.name},
            (res) => this.setParsedCsvAndUpdateConstants(res),
        );

        const requestBody = {
            parsedCSV: this.state.parsedCSV,
            duration: this.state.duration,
            everyN: INITIAL_EVERY_N,
            constants: this.state.constants,
        };

        await fetchPost('/api/time_series_to_audio/', requestBody, response => {
            this.setState({
                music: response.musicData.sound,
                image: response.musicData.img,
            });
        });
    }

    render() {

        const musicDataAsUrl = `data:audio/wav;base64, ${this.state.music}`;

        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    {this.state.image && <img
                        src={`data:image/png;base64, ${this.state.image}`}
                        className="img-fluid"
                        alt="A line chart showing the frequencies of the sonified data"
                    />}
                </div>
                <div className="col">
                    <div className="row mb-4"><div className="col w-100">
                        <h4 className="mb-4">{this.title}</h4>
                    </div></div>
                    <div className="row"><div className="col">
                        {this.state.music
                            ? <audio controls controlsList="nodownload" src={musicDataAsUrl} />
                            : <Loading />
                        }
                    </div></div>
                </div>
            </div>
        );
    }
}

const TimeSeriesExploratorium = () => {
    return (<>
        <StudentQuote quoteData={MOISES_QUOTE} />
        <StudentQuote quoteData={EESHA_QUOTE} />

        <TimeSeriesSonifier data={SUNRISE_SUNSET_BOSTON} />

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>

        <TimeSeriesSonifier data={PI} />
        <TimeSeriesSonifier data={GOLDEN} />
    </>);
};

export default TimeSeriesExploratorium;
