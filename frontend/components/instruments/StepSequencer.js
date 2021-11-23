import React, {useState, useRef} from "react";
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
    rowIsPlaying: PropTypes.bool,
    audioContext: PropTypes.object,
};


const StepSequencer = ({samples}) => {
    // TODO pieces of state:
    // - tempo
    // - position in playback
    // - stretch goal: metronome ticks even without playback
    // - stretch goal: tempo slider
    // - stretch goal: changeable time signature

    const audioContextRef = useRef(new AudioContext());
    const [numSteps, setNumSteps] = useState(4);

    // playback position is an int representing which column is currently playing
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        setIsPlaying(true);
    };

    return (<>
        <div>
            <div>
                {numSteps}
            </div>
            <div>
                Playback position: {playbackPosition}
            </div>
            <div>
                <button
                    onClick={() => play()}
                >
                    Play!
                </button>
                Playback position: {playbackPosition}
            </div>

            <button
                onClick={() => setNumSteps(numSteps + 1)}
            >
                increment numSteps
            </button>
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
    </>);
};
StepSequencer.propTypes = {
    samples: PropTypes.array,
};

export default StepSequencer;
