import React, {useState, useRef} from "react";
import SamplePlayer from "./SamplePlayer";
import {Pad} from "./PadInstrument";

const StepSequencer = ({samples}) => {
    // TODO pieces of state:
    // - whether a given step is active for playback or not
    //    -- an array of length N per sample where N is the number of steps
    // - am I currently playing?
    // - tempo
    // - position in playback
    // - stretch goal: metronome ticks even without playback
    // - stretch goal: tempo slider
    // - stretch goal: changeable time signature

    const audioContextRef = useRef(new AudioContext());
    const [numSteps, setNumSteps] = useState(4);

    const initialActivePads = [];
    for (const _ of samples) {
        const rowPads = [];
        for (let i = 0; i < numSteps; i ++) {
            rowPads.push(false);
        }
        initialActivePads.push(rowPads);
    }
    const [activePads, setActivePads] = useState(initialActivePads);

    return (<>
        <div>
            {numSteps}
            <button
                onClick={() => setNumSteps(numSteps + 1)}
            >
                increment numSteps
            </button>
        </div>

        {activePads.map((row, rowIndex) => (
            <div key={rowIndex}>
                {row.map((isActive, colIndex) => (
                    <Pad
                        key={colIndex}
                        sample={samples[rowIndex]}
                        audioContext={audioContextRef.current}
                    />
                ))}
            </div>

        ))}
    </>);
};

export default StepSequencer;
