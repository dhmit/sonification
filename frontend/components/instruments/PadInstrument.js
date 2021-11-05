import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";

/* TODO:
    - add a parameter to the pad that allows it to take a keyboard input
    - make the pads prettier with rounded corners
 */
const Pad = ({sample, audioContext}) => {
    const [shouldPlay, setShouldPlay] = useState(false);

    const handleClick = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    return (<>
        <button
            className={STYLES.pad}
            onClick={handleClick}
        />
        <SamplePlayer
            sample={sample}
            shouldPlay={shouldPlay}
            loop={false}
            volume={100}
            audioContext={audioContext}
        />
    </>);
};
Pad.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides buttons that the user can click to trigger the sample.
 */
const PadInstrument = ({samples}) => {
    const audioContextRef = useRef(new AudioContext());

    return (
        <div id="step-sequencer">
            {samples.map((sample, i) => (
                <Pad
                    key={i}
                    sample={sample}
                    audioContext={audioContextRef.current}
                />
            ))}
        </div>
    );
};

PadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default PadInstrument;
