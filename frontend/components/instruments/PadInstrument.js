import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";


export const Pad = ({sample, audioContext}) => {
    const [shouldPlay, setShouldPlay] = useState(false);

    const handleClick = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    // Pick button style depending on if sample is loaded
    const btnStyle =
        sample
            ? STYLES.pad
            : STYLES.emptyPad;

    return (<>
        <button
            className={btnStyle}
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
