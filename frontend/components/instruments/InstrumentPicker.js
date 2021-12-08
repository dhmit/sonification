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
                        className="btn btn-primary"
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

const InstrumentPicker = ({samples}) => {
    const [curInstrument, setCurInstrument] = useState(0);

    const instruments = [
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
};

export default InstrumentPicker;
