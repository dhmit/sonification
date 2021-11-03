import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import Slider from "../inputs/Slider";
import SamplePlayer from "./SamplePlayer";

/*
 * A simple playback component with a slider volume control
 */
const SliderPlayer = ({
    sample,
    isPlaying,
    index,
}) => {
    const [volume, setVolume] = useState(0);
    const audioContextRef = useRef(new AudioContext());

    return (<>
        <SamplePlayer
            loop={true}
            sample={sample}
            volume={volume}
            shouldPlay={isPlaying}
            audioContext={audioContextRef.current}
        />
        <Slider
            id={index}
            initialValue={volume}
            onChangeFunction={(newValue) => setVolume(parseFloat(newValue))}
        />
    </>);
};
SliderPlayer.propTypes = {
    sample: PropTypes.string,
    index: PropTypes.number,
    isPlaying: PropTypes.bool,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides sliders for playing loops with stop/start controls.
 */
const SliderInstrument = ({samples}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const toggleAudio = () => setIsPlaying(!isPlaying);

    const controllers = [];
    for (let i = 0; i < samples.length; i++) {
        controllers.push(
            <li className="list-inline-item" key={i} >
                <SliderPlayer
                    key={i}
                    index={i}
                    sample={samples[i]}
                    isPlaying={isPlaying}
                    loop={true}
                />
            </li>);
    }

    return (
        <div>
            {controllers}
            <button onClick={() => toggleAudio()}>
                {isPlaying ? 'Stop' : 'Play'}
            </button>
        </div>
    );
};
SliderInstrument.propTypes = {
    samples: PropTypes.array,
};

export default SliderInstrument;
