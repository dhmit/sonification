import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";

/* TODO:
    - add a parameter to the pad that allows it to take a keyboard input
    - space out the pads
    MVP:
    - one working pad that takes keyboard input
 */
const Pad = ({sample, audioContext, keyBind}) => {
    const [shouldPlay, setShouldPlay] = useState(false);

    const playSample = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    const handleClick = () => playSample();

    // register your keydown handler
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === keyBind) {
                playSample();
            }
        });
    }, []);


    return (<>
        <button
            className={STYLES.pad}
            onClick={handleClick}
            // onKeyUp
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

    const keyBinds = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'u', 'i', 'o', 'p'];
    return (
        <div id="step-sequencer">
            {samples.map((sample, i) => (
                <Pad
                    keyBind={keyBinds[i]}
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
