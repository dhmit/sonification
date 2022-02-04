import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {createAudioCallbacks} from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";

const Pad = ({keyBind, padClassName, startCallback, endCallback}) => {
    const [keyStatusClass, setKeyStatusClass] = useState('');

    let isPlaying = false;

    const startPlaying = () => {
        if (isPlaying) return;
        isPlaying = true;
        startCallback();
        setKeyStatusClass(STYLES.keypress);
    };

    const stopPlaying = () => {
        if (!isPlaying) return;
        isPlaying = false;
        endCallback();
        setKeyStatusClass('');
    };

    const handleKeyDown = (event) => {
        if (event.key === keyBind) {
            startPlaying();
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === keyBind) {
            stopPlaying();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const handlePadClick = () => {
        startPlaying();
        const timeout = setTimeout(() => {
            stopPlaying();
        }, 1000);
        return () => clearInterval(timeout);
    };


    return (<>
        <button
            className={`${padClassName} ${keyStatusClass} inactive`}
            onClick={() => handlePadClick()}
        >
            {keyBind}
        </button>
    </>);
};
Pad.propTypes = {
    audioContext: PropTypes.object,
    keyBind: PropTypes.string,
    padClassName: PropTypes.string,
    sample: PropTypes.string,
    startCallback: PropTypes.func,
    endCallback: PropTypes.func,
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

    const [startCallbacks, endCallbacks] = createAudioCallbacks(samples);

    const pads = samples.map((sample, i) => (
        <Pad
            keyBind={keyBinds[i]}
            key={i}
            sample={samples[i]}
            padClassName={i < 4 ? STYLES.cyanPad : STYLES.magentaPad}
            audioContext={audioContextRef.current}
            startCallback={startCallbacks[i]}
            endCallback={endCallbacks[i]}
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
