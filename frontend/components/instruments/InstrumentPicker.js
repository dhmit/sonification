import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import STYLES from "./InstrumentPicker.module.scss";
import PadInstrument from "./PadInstrument";
import SpatialInstrument from "./SpatialInstrument";
import SliderInstrument from "./SliderInstrument";

const InstrumentPicker = ({samples}) => {

    function downloadSamples() {
        // TODO: write this
    }

    const [curInstrument, setCurInstrument] = useState(0);

    const instruments = [
        {
            title: "Pad Instrument",
            instrument: <PadInstrument samples={samples}/>,
        },
        {
            title: "Spatial Instrument",
            instrument: <SpatialInstrument samples={samples}/>,
        },
        {
            title: "Slider Instrument",
            instrument: <SliderInstrument samples={samples}/>,
        }
    ];

    return (
      <div className={STYLES.instrumentPickerDiv}>
          <div className={STYLES.instrumentPickerDiv}>
              <ul className="nav">
                  {instruments && instruments.map(({title}, i)=> (
                      <li className="nav-item" key={`instrument-${i}`}>
                          <a
                              className={`nav-link active ${STYLES.tabLink}`}
                              onClick={() => setCurInstrument(i)}
                          >
                              {title}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
          <br/>
          <div>
              { instruments && instruments[curInstrument].instrument }
          </div>
          <div className={STYLES.bottomBar}>
              <button onClick={downloadSamples}>
                  Download All
              </button>
          </div>
      </div>
    );
};

InstrumentPicker.propTypes = {
    samples: PropTypes.array,
};

export default InstrumentPicker;
