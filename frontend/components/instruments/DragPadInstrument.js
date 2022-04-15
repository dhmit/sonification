import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import {Pad} from "./PadInstrument";


const DragSampleSource = ({sample, audioContext, onSourceDragStart}) => {
    return (
        <span draggable onDragStart={(e) => onSourceDragStart(e)}>
            <Pad
                sample={sample}
                audioContext={audioContext}
            />
        </span>
    );
};
DragSampleSource.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
    onSourceDragStart: PropTypes.func,
};


const DragSampleTarget = ({sample, audioContext, onDrop}) => {
    // By default, the dragOver event sets the current drag operation to "None",
    // we don't want that! So we prevent the dragover event from doing anything here.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
    const padOnDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <span className="mr-5"
            onDragOver={(e) => padOnDragOver(e)}
            onDrop={(e) => onDrop(e)}
        >
            <Pad
                sample={sample}
                audioContext={audioContext}
            />
        </span>
    );
};
DragSampleTarget.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
    onDrop: PropTypes.func,
};

const DragPadInstrument = ({samples}) => {
    const audioContextRef = useRef(new AudioContext());
    const NUM_PADS = 5;

    // samplesLoaded will hold the sample for each pad in the index for the pad
    // or null for a sample with no pad
    const [padSamples, setPadSamples] = useState(Array(NUM_PADS).fill(null));
    const [draggingSampleIndex, setDraggingSampleIndex] = useState();

    const onSourceDragStart = (e, sampleIndex) => {
        setDraggingSampleIndex(sampleIndex);
    };

    const onSampleDrop = (e, padIndex) => {
        e.preventDefault();
        const updatedPadSamples = [...padSamples];
        updatedPadSamples[padIndex] = samples[draggingSampleIndex];
        setPadSamples(updatedPadSamples);
        setDraggingSampleIndex(null);
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    {samples.map((sample, i) => (
                        <DragSampleSource
                            draggable
                            key={i}
                            sample={sample}
                            onSourceDragStart={(e) => onSourceDragStart(e, i)}
                            audioContext={audioContextRef.current}
                        />
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {padSamples.map((sample, i) => (
                        <DragSampleTarget
                            audioContext={audioContextRef.current}
                            sample={padSamples[i]}
                            onDrop={(e) => onSampleDrop(e, i)}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

DragPadInstrument.propTypes = {
    samples: PropTypes.array,
};

export default DragPadInstrument;
