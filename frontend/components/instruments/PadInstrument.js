import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";


export const Pad = ({sample, audioContext}) => {
    const [shouldPlay, setShouldPlay] = useState(false);

    const handleClick = () => {
        setShouldPlay(true);
    };

    useEffect(() => {
        if (!shouldPlay) return;

        const timeout = setTimeout(() => { setShouldPlay(false); }, 1000);
        return () => clearInterval(timeout);
    }, [shouldPlay]);

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

    useEffect(() => {
        // Cleanup function
        return () => audioContextRef.current.close();
    }, []);

    return (
        <div>
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
