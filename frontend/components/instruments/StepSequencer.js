import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./StepSequencer.module.scss";

const Step = ({sample, audioContext, colIsPlaying}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    // Pick button style depending on if sample is loaded
    const btnStyle =
        isActive
            ? STYLES.activeStep
            : STYLES.inactiveStep;

    return (<>
        <button
            className={btnStyle}
            onClick={handleClick}
        />
        <SamplePlayer
            sample={sample}
            shouldPlay={colIsPlaying && isActive}
            loop={false}
            volume={100}
            audioContext={audioContext}
        />
    </>);
};
Step.propTypes = {
    sample: PropTypes.string,
    colIsPlaying: PropTypes.bool,
    audioContext: PropTypes.object,
};


const StepSequencer = ({samples}) => {
    // - stretch goal: metronome ticks even without playback
    // - stretch goal: tempo slider
    // - stretch goal: changeable time signature

    const audioContextRef = useRef(new AudioContext());
    const [numSteps, setNumSteps] = useState(4);
    const [tempo, setTempo] = useState(60);

    // playback position is an int representing which column is currently playing
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            if (!isPlaying) {
                clearInterval(interval);
            } // doesn't do anything right now :(
            setPlaybackPosition((prevPosition) => {
                if (prevPosition < numSteps - 1) {
                    return prevPosition + 1;
                } else {
                    return 0;
                }
            });
        }
        , (60/tempo) * 1000);  // s * ms/s TODO: tempo
    }, [isPlaying]);

    const handleUpdateTempo = (event) => {
        event.preventDefault();
        if (!isPlaying){ // can only move slider when paused
            setTempo(parseInt(event.target.value));
        }

    };

    return (<>
        <div>
            <div>
                Playback position: {playbackPosition}
            </div>
            <div>
                <button className="btn btn-outline-primary text-right"
                    onClick={() => setIsPlaying(true)}
                >
                    Play!
                </button>
                <button className="btn btn-outline-primary mx-2"
                    onClick={() => setIsPlaying(false)}
                >
                    Pause!
                </button>
                <button className="btn btn-outline-primary mx-2"
                onClick={() => setNumSteps(numSteps + 1)}
                >
                    +1 beat
                </button>
                <button className="btn btn-outline-primary text-left"
                onClick={() => setNumSteps(Math.max(1, numSteps - 1))}
                >
                    -1 beat
                </button>
            </div>
        </div>

        {samples.map((sample, rowIndex) => (
            <div key={rowIndex}>
                {Array(numSteps).fill(null).map((_, colIndex) => (
                    <Step
                        key={colIndex}
                        sample={sample}
                        audioContext={audioContextRef.current}
                        colIsPlaying={isPlaying && colIndex === playbackPosition}
                    />
                ))}
            </div>
        ))}
        <b>Tempo:</b>
        <input className="mx-2" type="range" min="40" max="80"
               step="1" id="low" value={tempo}
               onChange={handleUpdateTempo}/>
        {tempo} bpm
    </>);
};
StepSequencer.propTypes = {
    samples: PropTypes.array,
};

export default StepSequencer;
