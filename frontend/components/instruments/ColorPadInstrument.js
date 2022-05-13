import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {createAudioCallbacks} from "./SamplePlayer";

/*
TODO(ra): Clean this up into PadInstrument -- this is copypasta
 */

export const ColorPad = ({keyBind, color, startCallback, endCallback}) => {
    const [keyStatusClass, setKeyStatusClass] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        startCallback();
        setKeyStatusClass("keypress");
    };

    const stopPlaying = () => {
        if (!isPlaying) return;
        endCallback();
        setIsPlaying(false);
        setKeyStatusClass("");
    };

    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;

    return (<>
        <button
            className={`color-pad ${keyStatusClass} inactive`}
            style={{backgroundColor: colorCssRgb}}
            onMouseDown={() => startPlaying()}
            onMouseUp={() => stopPlaying()}
            onMouseLeave={() => stopPlaying()}>
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
const ColorPadInstrument = ({samples, colors, wrap = false}) => {
    const audioContextRef = useRef(new AudioContext());

    useEffect(() => {
        // Cleanup function
        return () => void audioContextRef.current.close();
    }, []);

    const [startCallbacks, endCallbacks] = createAudioCallbacks(samples, audioContextRef.current);

    const pads = samples.map((sample, i) => (
        <li className="list-inline-item" key={i}>
            <ColorPad
            sample={samples[i]}
            color={colors[i]}
            startCallback={startCallbacks[i]}
            endCallback={endCallbacks[i]}
        /></li>
    ));

    return (
        <section className="pad-instrument">
            <ul className="list-inline">{pads}</ul>
        </section>
    );
};
ColorPadInstrument.propTypes = {
    samples: PropTypes.array,
    colors: PropTypes.array,
};

export default ColorPadInstrument;
