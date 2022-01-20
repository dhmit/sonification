import React, {useState} from "react";
import PropTypes from "prop-types";
import STYLES from "./InstrumentPicker.module.scss";
import PadInstrument from "./PadInstrument";
import SpatialInstrument from "./SpatialInstrument";
import StepSequencer from "./StepSequencer";
import SliderInstrument from "./SliderInstrument";

const DownloadSamples = ({samples}) => {
    const samplesDataURLs = samples.map(sample => `data:audio/wav;base64, ${sample}`);

    return (<div>
        <p>Preview and download the samples you've sonified, for use in external projects.</p>
        <ul className="list-group">
            {samplesDataURLs.map((sample, i) => (
                <li key={i} className="list-group-item">
                    <audio controls controlsList="nodownload" src={sample} />
                    <a
                        className="btn btn-primary float-right"
                        download={`sample-${i}.wav`} href={sample}
                    >
                        Download
                    </a>
                </li>
            ))}
        </ul>
    </div>);
};
DownloadSamples.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string),
};

const MusicPlayer = ({music}) => {
    const musicDataAsUrl = `data:audio/wav;base64, ${music}`;

    return (<div>
        <p>
        This is a sonification of your input data as a single piece of music.
        Check out the other tabs for interactive sonifications of the data!
        </p>

        <audio controls controlsList="nodownload" src={musicDataAsUrl} />
        <br />
        <a
            className="btn btn-primary float-right"
            download={`sonification.wav`} href={musicDataAsUrl}
        >
            Download
        </a>
    </div>);
};
MusicPlayer.propTypes = {
    music: PropTypes.string,
};

export const ALL_DEFAULT_INSTRUMENTS = [
    'Pads',
    'Slider Looper',
    'Spatial Instrument',
    'Step Sequencer',
    'Download',
];

const InstrumentPicker = ({
    music, samples, includedDefaultInstruments=[], customInstruments=[],
}) => {
    const [curInstrument, setCurInstrument] = useState(0);

    const defaultInstruments = [
        {
            title: "Pads",
            component: <PadInstrument samples={samples}/>,
        },
        {
            title: "Slider Looper",
            component: <SliderInstrument samples={samples}/>,
        },
        {
            title: "Spatial Instrument",
            component: <SpatialInstrument samples={samples}/>,
        },
        {
            title: "Step Sequencer",
            component: <StepSequencer samples={samples}/>,

        },
        {
            title: "Download",
            component: <DownloadSamples samples={samples}/>,
        },
    ];

    const instruments = [
        ...customInstruments,
        {
            title: "Music",
            component: <MusicPlayer music={music}/>,
        },
        ...defaultInstruments.filter(
            instrument => includedDefaultInstruments.includes(instrument.title)
        ),
    ];

    const instrumentPickerHeader = (
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">

                {instruments.map(({title}, i)=> (
                    <li className="nav-item" key={`instrument-${i}`}>
                        <a
                            className={
                                `nav-link
                                ${STYLES.tabLink}
                                ${curInstrument === i && 'active'}
                            `}
                            onClick={() => setCurInstrument(i)}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="card">
            {instrumentPickerHeader}
            <div className="card-body">
                <div>
                    {instruments[curInstrument].component}
                </div>
            </div>
        </div>
    );
};
InstrumentPicker.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string),
    music: PropTypes.string,
    includedDefaultInstruments: PropTypes.arrayOf(PropTypes.string),
    customInstruments: PropTypes.arrayOf(PropTypes.object),
};

export default InstrumentPicker;
