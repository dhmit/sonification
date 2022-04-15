import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {createAudioCallbacks} from "./SamplePlayer";
import STYLES from "./ColorPadInstrument.module.scss";

/*
TODO(ra): Clean this up into PadInstrument -- this is copypasta
 */

const ColorPad = ({keyBind, color, startCallback, endCallback}) => {
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

    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;

    return (<>
        <button
            className={`${STYLES.colorPad} ${keyStatusClass} inactive`}
            style={{backgroundColor: colorCssRgb}}
            onClick={() => handlePadClick()}
        >
            {keyBind}
        </button>
    </>);
};
ColorPad.propTypes = {
    keyBind: PropTypes.string,
    padClassName: PropTypes.string,
    sample: PropTypes.string,
    color: PropTypes.object,
    startCallback: PropTypes.func,
    endCallback: PropTypes.func,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides buttons that the user can click to trigger the sample.
 */
const ColorPadInstrument = ({samples, colors}) => {
    const audioContextRef = useRef(new AudioContext());
    const keyBinds = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

    useEffect(() => {
        // Cleanup function
        return () => void audioContextRef.current.close();
    }, []);

    const [startCallbacks, endCallbacks] = createAudioCallbacks(samples, audioContextRef.current);

    const pads = samples.map((sample, i) => (
        <ColorPad
            keyBind={keyBinds[i]}
            key={i}
            sample={samples[i]}
            color={colors[i]}
            startCallback={startCallbacks[i]}
            endCallback={endCallbacks[i]}
        />
    ));

    return (
        <section id="pad-instrument">
            <div className="text-white">
                {pads}
            </div>
            <div className="">
                Click to play
            </div>
        </section>
    );
};
ColorPadInstrument.propTypes = {
    samples: PropTypes.array,
    colors: PropTypes.array,
};

export default ColorPadInstrument;
