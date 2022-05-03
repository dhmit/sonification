import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {createAudioCallbacks} from "./SamplePlayer";
import STYLES from "./ColorPadInstrument.module.scss";

/*
TODO(ra): Clean this up into PadInstrument -- this is copypasta
 */

const ColorPad = ({keyBind, color, startCallback, endCallback}) => {
    const [keyStatusClass, setKeyStatusClass] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = () => {
        if (isPlaying) return;
        console.log('start!');
        setIsPlaying(true);
        startCallback();
        setKeyStatusClass(STYLES.keypress);
    };

    const stopPlaying = () => {
        if (!isPlaying) return;
        console.log('stop!');
        endCallback();
        setIsPlaying(false);
        setKeyStatusClass('');
    };

    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;

    return (<>
        <button
            className={`${STYLES.colorPad} ${keyStatusClass} inactive`}
            style={{backgroundColor: colorCssRgb}}
            onMouseDown={() => startPlaying()}
            onMouseUp={() => stopPlaying()}
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

    useEffect(() => {
        // Cleanup function
        return () => void audioContextRef.current.close();
    }, []);

    const [startCallbacks, endCallbacks] = createAudioCallbacks(samples, audioContextRef.current);

    const pads = samples.map((sample, i) => (
        <ColorPad
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
            </div>
        </section>
    );
};
ColorPadInstrument.propTypes = {
    samples: PropTypes.array,
    colors: PropTypes.array,
};

export default ColorPadInstrument;
