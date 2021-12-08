import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./StepSequencer.module.scss";

const Step = ({sample, audioContext, colIsPlaying, vol}) => {
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
            volume={vol}
            audioContext={audioContext}
        />
    </>);
};
Step.propTypes = {
    sample: PropTypes.string,
    colIsPlaying: PropTypes.bool,
    audioContext: PropTypes.object,
    vol: PropTypes.number,
};

const Metronome = ({colIsPlaying}) => {
    // Pick button style depending on if sample is loaded
    const btnStyle =
        colIsPlaying
            ? STYLES.isPlaying
            : STYLES.notPlaying;

    return (<>
        <div className={btnStyle} style={{display: 'inline-block'}} />
    </>);
};
Metronome.propTypes = {
    colIsPlaying: PropTypes.bool,
};

const Row = ({sample, audioContext, numSteps, playbackPosition, isPlaying}) => {
    const [volume, setVolume] = useState(100);

    const handleUpdateVolume = (event) => {
        event.preventDefault();
        setVolume(parseInt(event.target.value));
    };

    return (<>
        <div>
            {Array(numSteps).fill(null).map((_, colIndex) => (
                <Step
                    key={colIndex}
                    sample={sample}
                    audioContext={audioContext}
                    colIsPlaying={isPlaying && colIndex === playbackPosition}
                    vol = {volume}
                />
            ))}
            <input
                className="mx-2" type="range" min="0" max="100"
                step="1" id="low" value={volume}
                onChange={handleUpdateVolume}
            />
        </div>
    </>);
};
Row.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
    numSteps: PropTypes.number,
    playbackPosition: PropTypes.number,
    isPlaying: PropTypes.bool,
};

const StepSequencer = ({samples}) => {
    const audioContextRef = useRef(new AudioContext());
    useEffect(() => {
        // Cleanup function
        return () => audioContextRef.current.close();
    }, []);

    const [numSteps, setNumSteps] = useState(4);
    const [tempo, setTempo] = useState(60);

    // playback position is an int representing which column is currently playing
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(0);

    const handlePlay = () => {
        if (isPlaying) return;
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
        if (!isPlaying) return;
        setIsPlaying(false);
        clearInterval(intervalID);
    };

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
            setNumSteps(Math.max(2, numSteps - 1));
        }
    };

    return (<>
        <div>
            <div>
                {isPlaying
                    ? <button className="btn btn-outline-primary" onClick={handlePause}>⏸</button>
                    : <button className="btn btn-outline-primary" onClick={handlePlay}>▶</button>
                }
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
                <Row
                    key={rowIndex}
                    sample={sample}
                    audioContext={audioContextRef.current}
                    numSteps={numSteps}
                    playbackPosition={playbackPosition}
                    isPlaying={isPlaying}
                />
            </div>
        ))}
        {Array(numSteps).fill(null).map((_, colIndex) => (
            <Metronome
                key={colIndex+1}
                colIsPlaying={isPlaying && colIndex === playbackPosition}
            />
        ))}
        <div>
            <b>Tempo:</b>
            <input className="mx-2" type="range" min="40" max="120"
                step="1" id="low" value={tempo}
                onChange={handleUpdateTempo}/>
            {tempo} bpm
        </div>
    </>);
};
StepSequencer.propTypes = {
    samples: PropTypes.array,
};

export default StepSequencer;
