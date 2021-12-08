import React, {useState, useRef, useEffect} from "react";
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
    audioContext,
    initialVolume=0,
}) => {
    const [volume, setVolume] = useState(initialVolume);
    return (<>
        <SamplePlayer
            loop={true}
            sample={sample}
            volume={volume}
            shouldPlay={isPlaying}
            audioContext={audioContext}
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
    audioContext: PropTypes.object,
    initialVolume: PropTypes.number,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides sliders for playing loops with stop/start controls.
 */
const SliderInstrument = ({samples}) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const toggleAudio = () => setIsPlaying(!isPlaying);
    const audioContextRef = useRef(new AudioContext());

    useEffect(() => {
        // Cleanup function
        return () => audioContextRef.current.close();
    }, []);


    const controllers = [];
    for (let i = 0; i < samples.length; i++) {
        controllers.push(
            <li className="list-unstyled" key={i} >
                <SliderPlayer
                    key={i}
                    index={i}
                    sample={samples[i]}
                    isPlaying={isPlaying}
                    loop={true}
                    audioContext={audioContextRef.current}
                    initialVolume={i === 0 ? 100 : 0}
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
