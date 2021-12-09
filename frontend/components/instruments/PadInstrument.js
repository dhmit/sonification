import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";

const Pad = ({sample, audioContext, keyBind, padClassName}) => {
    const [shouldPlay, setShouldPlay] = useState(false);
    const [keyStatusClass, setKeyStatusClass] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === keyBind) {
            setShouldPlay(true);
            setKeyStatusClass(STYLES.keypress);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!shouldPlay) return;
        const timeout = setTimeout(() => {
            setShouldPlay(false);
            setKeyStatusClass('');
        }, 1000);
        return () => clearInterval(timeout);
    }, [shouldPlay]);


    return (<>
        <button
            className={`${padClassName} ${keyStatusClass} inactive`}
            onClick={() => setShouldPlay(true)}
        >
            {keyBind}
        </button>
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
    audioContext: PropTypes.object,
    keyBind: PropTypes.string,
    padClassName: PropTypes.string,
    sample: PropTypes.string,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides buttons that the user can click to trigger the sample.
 */
const PadInstrument = ({samples}) => {
    const audioContextRef = useRef(new AudioContext());
    const keyBinds = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'u', 'i', 'o', 'p'];

    useEffect(() => {
        // Cleanup function
        return () => void audioContextRef.current.close();
    }, []);

    const pads = samples.map((sample, i) => (
        <Pad
            keyBind={keyBinds[i]}
            key={i}
            sample={samples[i]}
            padClassName={i < 4 ? STYLES.cyanPad : STYLES.magentaPad}
            audioContext={audioContextRef.current}
        />
    ));

    return (
        <section id="pad-instrument">
            {pads}
        </section>
    );
};
PadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default PadInstrument;
