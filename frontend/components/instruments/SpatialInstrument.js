import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import SoundPoint from "./SoundPoint";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./SpatialInstrument.module.scss";

/* TODO: there is a bug in which the player crashes
    not sure how to reproduce.
    Probably has something to do with toggling based on maxDist.
    "Uncaught DOMException: Failed to execute 'start' on 'AudioBufferSourceNode':
    cannot call start more than once."
    Caused when on border between two sounds based on maxDist.
    *
    Also crashes when using Pad instrument at same time.
    probably caused by reusing AudioBufferSourceNode - retriggering sound SamplePlayer before
     the old AudioBufferSourceNode is thrown away.
     https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
*/
const SpatialInstrument = ({soundPoints}) => {
    const audioContextRef = useRef(new AudioContext());

    const instrumentDiv = useRef(null);
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);


    // why is this here?
    const [instrumentWidth, setInstrumentWidth] = useState(null);
    const [instrumentHeight, setInstrumentHeight] = useState(null);

    useEffect(() => {
        setInstrumentWidth(instrumentDiv.current.clientWidth);
        setInstrumentHeight(instrumentDiv.current.clientHeight);
    });

    // Instrument properties
    const maxDist = 200;
    const halfRange = 40;
    const minRadius = 2;
    const maxRadius = 5;

    function sqDist(x1, y1, x2, y2) {
        return (x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2);
    }

    function sampleShouldPlay(point) {
        if (mouseX === null || mouseY === null) {
            return false;
        }
        return sqDist(point.x, point.y, mouseX, mouseY) <= maxDist*maxDist;
    }

    function sampleVolume(point) {
        if (mouseX === null || mouseY === null) {
            return 0;
        }
        return 100/(sqDist(point.x, point.y, mouseX, mouseY)/(halfRange*halfRange) + 1);
    }

    function sampleRadius(point) {
        const vol = sampleVolume(point);
        return minRadius + (vol/100) * (maxRadius - minRadius);
    }

    function handleMouseLeave() {
        setMouseX(null);
        setMouseY(null);
    }

    function handleMouseMove(e) {
        const rect = instrumentDiv.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setMouseX(x);
        setMouseY(y);
    }

    return (
        <>
            <svg
                className={STYLES.spatialInstrument}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseMove}
                ref={instrumentDiv}
            >
                {soundPoints.map((soundPoint, i) => (
                    <>
                        <SamplePlayer
                            key={`sound-point-${i}`}
                            sample={soundPoint.sample}
                            loop
                            shouldPlay={sampleShouldPlay(soundPoint)}
                            volume={sampleVolume(soundPoint)}
                            audioContext={audioContextRef.current}
                        />
                        <circle
                            key={`circle-${i}`}
                            cx={soundPoint.x}
                            cy={soundPoint.y}
                            r={sampleRadius(soundPoint)}
                        />
                    </>
                ))}
            </svg>
        </>
    );
};

SpatialInstrument.propTypes = {
    soundPoints: PropTypes.arrayOf(SoundPoint),
};

export default SpatialInstrument;
