import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./PadInstrument.module.scss";

/*
    CURRENTLY:
    - pads are mapped to keyboard inputs

    TODO:
    - space out pads on the screen
    - pseudo-class for keydown?
    - how to print a variable within the pads
    - onKeyPress add onKeyUp remove on class
 */

const Pad = ({sample, audioContext, keyBind, padClassName}) => {
    const [shouldPlay, setShouldPlay] = useState(false);
    const playSample = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    const handleClick = () => playSample();

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === keyBind) {
                playSample();
                keyStatus = true;
            }
        });
        document.addEventListener('keyup', (event) => {
            keyStatus = false;
        });
    },
        []);

    return (<>
        <button
            className={padClassName}
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
    const keyBinds = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'u', 'i', 'o', 'p'];
    const pads = [];
    const pads2 = [];
    const pads3 = [];
    // isn't dynamic to the size of the pads
    for (let i = 0; i < 8; i++) {
        if (i < 4) {
            let padClassName = STYLES.cyanPad;
            const thisPad = (
                <Pad
                    keyStatus = {keyStatus}
                    keyBind={keyBinds[i]}
                    key={i}
                    sample={samples[i]}
                    padClassName={padClassName}
                    audioContext={audioContextRef.current}
                />
            );
            pads.push(thisPad);
        } else {
            let padClassName = STYLES.magentaPad;
            const thisPad = (
                <Pad
                    keyBind={keyBinds[i]}
                    key={i}
                    sample={samples[i]}
                    padClassName={padClassName}
                    audioContext={audioContextRef.current}
                />
            );
            pads2.push(thisPad);
        }
        };
    };
    return (
        <section id="instrument">
            <div id="pad-line1">
                {pads}
            </div>
            <div id="pad-line2">
                {pads2}
            </div>
        </section>
    );

PadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default PadInstrument;
