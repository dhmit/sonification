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
 */
const Pad = ({sample, audioContext, keyBind, padClassName}) => {
    const [shouldPlay, setShouldPlay] = useState(false);

    const playSample = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    const handleClick = () => playSample();

    // const handleKey = () = {

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            console.log("key down >:)");
            if (event.key === keyBind) {
                playSample();
                // how can i create a smooth sound? guess this might change with samples used?
            }
        });
        document.addEventListener('keyup', (event) => {
            console.log("key up!");
        });
    },
        // todo: look up useEffect syntax
        []);

    return (<>
        <button
            className={padClassName}
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
    const pads = [];
    const pads2 = [];
    const pads3 = [];
    // eventually, would it be possible to make this a single for loop instead of 3? just for
    // readability?
    for (let i = 0; i < 4; i++) {
        let padClassName = STYLES.cyanPad;
        const thisPad = (
            <Pad
                keyBind={keyBinds[i]}
                key={i}
                sample={samples[i]}
                padClassName={padClassName}
                audioContext={audioContextRef.current}
            />
        );
        pads.push(thisPad);
    };
    for (let i = 4; i < 8; i++) {
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
    };
    for (let i = 8; i < 10; i++) {
        let padClassName = STYLES.limePad;
        const thisPad = (
            <Pad
                keyBind={keyBinds[i]}
                key={i}
                sample={samples[i]}
                padClassName={padClassName}
                audioContext={audioContextRef.current}
            />
        );
        pads3.push(thisPad);
    };

    return (
        // TODO: add a flexbox div so that padline1 + 3 can appear on the same line
        // TODO: how can i bring him (pad-line3) closer to center?
        // why is pad-line3 getting so angry with me?
        <div id="pad-instrument">
            <div id="pad-line1">
                {pads}
            </div>
            <div id="pad-line2" className="pl-3">
                {pads2}
            </div>
            <div id="pad-line3" className="text-center pl-5">
                {pads}
            </div>
        </div>
    );
};

PadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default PadInstrument;
