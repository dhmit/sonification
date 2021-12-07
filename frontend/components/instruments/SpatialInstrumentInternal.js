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
   fixed by keeping everything playing at all times, just using 0 volume to "turn off" nodes.
*/

/*
svgRender should be a component which takes 4 props (width: instrument width, height: instrument
 height, x: current mouseX, y: current mouseY) and returns svg components to render (doesn't need
 a wrapping svg tag, since this will be placed into the main svg tag of the instrument itself).
 */
const SpatialInstrumentInternal = ({
    soundPoints,
    showPoints=true,
    width=200,
    height=200,
    minPointRadius=2,
    maxPointRadius=5,
    updateSize,
}) => {
    const audioContextRef = useRef(new AudioContext());

    const instrumentDiv = useRef(null);
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);

    const [instrumentWidth, setInstrumentWidth] = useState(null);
    const [instrumentHeight, setInstrumentHeight] = useState(null);

    useEffect(() => {
        const {width: w, height: h} = instrumentDiv.current.getBoundingClientRect();
        setInstrumentWidth(w);
        setInstrumentHeight(h);
    }, [width, height, instrumentDiv]);

    useEffect(() => {
        updateSize(instrumentWidth, instrumentHeight);
    }, [instrumentWidth, instrumentHeight]);

    // Instrument properties
    const maxDist = 100;
    const halfRange = 40;
    const visualizeRange = true;

    function sqDist(x1, y1, x2, y2) {
        return (x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2);
    }

    function mouseActive() {
        return mouseX !== null && mouseY !== null;
    }

    function sampleShouldPlay(point) {
        if (!mouseActive()) {
            return false;
        }
        return sqDist(point.x, point.y, mouseX, mouseY) <= maxDist*maxDist;
    }

    function sampleVolume(point) {
        if (!mouseActive()) {
            return 0;
        }
        if (!sampleShouldPlay(point)) return 0;
        return 100/(sqDist(point.x, point.y, mouseX, mouseY)/(halfRange*halfRange) + 1);
    }

    function sampleRadius(point) {
        const vol = sampleVolume(point);
        return minPointRadius + (vol/100) * (maxPointRadius - minPointRadius);
    }

    function handleMouseLeave() {
        setMouseX(null);
        setMouseY(null);
    }

    function handleMouseMove(e) {
        const rect = instrumentDiv.current.getBoundingClientRect();

        // update width + height if out of sync
        if (instrumentWidth !== rect.width) {
            setInstrumentWidth(rect.width);
        }
        if (instrumentHeight !== rect.height) {
            setInstrumentHeight(rect.height);
        }

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
                width={width}
                height={height}
            >
                {soundPoints.map((soundPoint, i) => (
                    <React.Fragment key={`fragment-${i}`}>
                        <SamplePlayer
                            key={`sound-point-${i}`}
                            sample={soundPoint.sample}
                            loop
                            // this is less optimized, but prevents bugs
                            // with starting/stopping sounds
                            // shouldPlay={sampleShouldPlay(soundPoint)}
                            shouldPlay={true}
                            volume={sampleVolume(soundPoint)}
                            audioContext={audioContextRef.current}
                        />
                        {showPoints && <circle
                            key={`circle-${i}`}
                            cx={soundPoint.x}
                            cy={soundPoint.y}
                            r={sampleRadius(soundPoint)}
                        />}
                    </React.Fragment>
                ))}
                {visualizeRange && mouseActive() && <>
                    <circle
                        className={STYLES.mouseRange}
                        cx={mouseX}
                        cy={mouseY}
                        r={maxDist}
                    />
                    <circle
                        className={STYLES.mouseRange}
                        cx={mouseX}
                        cy={mouseY}
                        r={halfRange}
                    />
                </>}
            </svg>
        </>
    );
};

SpatialInstrumentInternal.propTypes = {
    soundPoints: PropTypes.arrayOf(SoundPoint),
    svgRender: PropTypes.func,
    showPoints: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minPointRadius: PropTypes.number,
    maxPointRadius: PropTypes.number,
    updateSize: PropTypes.func,
};

export default SpatialInstrumentInternal;
