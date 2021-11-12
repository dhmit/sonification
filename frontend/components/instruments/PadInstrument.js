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
const Pad = ({sample, audioContext, keyBind}) => {
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

    int counter = 0;
    do while(counter!=4) {
        return (
            <div id="pad-line1">
                {samples.map((sample, i) => (
                    <Pad
                        keyBind={keyBinds[i]}
                        // ><p id="keybind"></p>
                        key={i}
                        sample={sample}
                        audioContext={audioContextRef.current}
                    />
                ))}
            </div>
        );
        counter++;
    };
};

PadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default PadInstrument;
