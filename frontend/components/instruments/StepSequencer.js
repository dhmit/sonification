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
    // - stretch goal: tempo slider--DONE
    // - stretch goal: changeable time signature

    const audioContextRef = useRef(new AudioContext());
    const [numSteps, setNumSteps] = useState(4);
    const [tempo, setTempo] = useState(60);

    // playback position is an int representing which column is currently playing
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(0);

    /*
    useEffect(() => {
        if (!isPlaying) return;
        const newIntervalID = setInterval(() => {
            if (!isPlaying) {
                return () => clearInterval(intervalID);
            } // doesn't do anything right now :(
            setPlaybackPosition((prevPosition) => {
                if (prevPosition < numSteps - 1) {
                    return prevPosition + 1;
                } else {
                    return 0;
                }
            });
        }
        , (60/tempo) * 1000);  // s * ms/s
        setIntervalID(newIntervalID);
    }, [isPlaying]);

     */

    const handlePlay = () => {
        setIsPlaying(true);
        const newIntervalID = setInterval(() => {
            setPlaybackPosition((prevPosition) => {
                if (prevPosition < numSteps - 1) {
                    return prevPosition + 1;
                } else {
                    return 0;
                }
            });
        }
        , (60/tempo) * 1000);  // s * ms/s
        setIntervalID(newIntervalID);
    };

    const handlePause = () => {
        setIsPlaying(false);
        clearInterval(intervalID);
    }

    const handleUpdateTempo = (event) => {
        event.preventDefault();
        if (!isPlaying){ // can only move slider when paused
            setTempo(parseInt(event.target.value));
        }
    };

    const handlePlusBeat = (event) => {
        event.preventDefault();
        if (!isPlaying) { // can add beat slider when paused
            setNumSteps(numSteps + 1);
        }
    };

    const handleMinusBeat = (event) => {
        event.preventDefault();
        if (!isPlaying) { // can only subtract beat when paused
            setNumSteps(Math.max(1, numSteps - 1));
        }
    };

    return (<>
        <div>
            <div>
                Playback position: {playbackPosition}
            </div>
            <div>
                <button className="btn btn-outline-primary text-right"
                    onClick={handlePlay}
                >
                    Play!
                </button>
                <button className="btn btn-outline-primary mx-2"
                    onClick={handlePause}
                >
                    Pause!
                </button>
                <button className="btn btn-outline-primary mx-2"
                onClick={handlePlusBeat}
                >
                    +1 beat
                </button>
                <button className="btn btn-outline-primary text-left"
                onClick={handleMinusBeat}
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
