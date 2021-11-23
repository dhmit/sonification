import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./StepSequencer.module.scss";

const Step = ({sample, audioContext, rowIsPlaying}) => {
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
            shouldPlay={rowIsPlaying && isActive}
            loop={false}
            volume={100}
            audioContext={audioContext}
        />
    </>);
};
Step.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
};


const StepSequencer = ({samples}) => {
    // TODO pieces of state:
    // - whether a given step is active for playback or not
    //    -- an array of length N per sample where N is the number of steps
    // - tempo
    // - position in playback
    // - stretch goal: metronome ticks even without playback
    // - stretch goal: tempo slider
    // - stretch goal: changeable time signature

    const audioContextRef = useRef(new AudioContext());
    const [numSteps, setNumSteps] = useState(4);


    const setNumStepsAndUpdatePads = (newNumSteps) => {
        setNumSteps(newNumSteps);
        // TODO: And also do the active pads stuff again
    };

    return (<>
        <div>
            {numSteps}
            <button
                onClick={() => setNumStepsAndUpdatePads(numSteps + 1)}
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
                        rowIsPlaying={false}
                    />
                ))}
            </div>

        ))}
    </>);
};

export default StepSequencer;
