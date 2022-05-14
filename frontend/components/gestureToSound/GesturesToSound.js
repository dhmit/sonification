import React, {useLayoutEffect, useEffect, useState, useRef} from "react";
import {fetchPost} from "../../common";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {base64AudioToDataURI} from "../../common";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";
import MarkP from "../global/MarkP";


const scaleCoordsToCanvas = (canvasRef, rawCoords) => {
    const canvas = canvasRef.current;
    const pad = 10; // TODO(ra): maybe scale this padding?
    const minX = Math.min(...rawCoords.map(coord => coord.x)) - pad;
    const minY = Math.min(...rawCoords.map(coord => coord.y)) - pad;
    const maxY = Math.max(...rawCoords.map(coord => coord.y)) + pad;
    const maxX = Math.max(...rawCoords.map(coord => coord.x)) + pad;

    const originalWidth = maxX - minX;
    const originalHeight = maxY - minY;
    const scale = canvas.width / Math.max(originalWidth, originalHeight);

    // TODO(ra): center by width if tall, center by height if squat
    const scaledCoords = [];
    for (const coord of rawCoords) {
        scaledCoords.push({
            ...coord,
            x: (coord.x - minX) * scale,
            y: (coord.y - minY) * scale,
        });
    }
    return scaledCoords;
};

const drawGestureOnMiniCanvas = (miniCanvasRef, rawCoords) => {
    const scaledCoords = scaleCoordsToCanvas(miniCanvasRef, rawCoords);
    drawGesture(miniCanvasRef, scaledCoords);
};

export const clearCanvas = (miniCanvasRef, context) => {
    const canvas = miniCanvasRef.current;
    if (!context) {
        context = canvas.getContext('2d');
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
};

export const MiniGestureCanvas = ({clickCallback, coords}) => {
    const canvasRef = useRef();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e) => {
        clickCallback();
        setIsAnimating(true);
    };

    useLayoutEffect(() => {
        if (!canvasRef.current) return;
        drawGestureOnMiniCanvas(canvasRef, coords);
    }, [clickCallback]);

    useEffect(() => {
        if (!isAnimating) return;

        const scaledCoords = scaleCoordsToCanvas(canvasRef, coords);

        let startTime;
        const render = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const timeElapsed = timestamp - startTime;

            clearCanvas(canvasRef);
            const coordsToDraw = scaledCoords.filter(coord => {
                return coord.normalizedT <= timeElapsed;
            });
            if (coordsToDraw.length > 0) {
                drawGesture(canvasRef, coordsToDraw);
            }
            if (timeElapsed < scaledCoords[scaledCoords.length - 1].normalizedT) {
                requestAnimationFrame(render);
            }
        };
        requestAnimationFrame(render);
        setIsAnimating(false);
    }, [isAnimating]);

    return (
        <canvas className="mini-canvas mr-2"
                onClick={(e) => handleClick(e)}
                height="100" width="100"
                ref={canvasRef}/>
    );
};

export const drawGesture = (thisCanvasRef, coords) => {
    if (!thisCanvasRef.current) return;
    const canvas = thisCanvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.globalCompositeOperation = "source-over";
    context.moveTo(coords[0].x, coords[0].y);
    for (let i = 0; i < coords.length - 1; i++) {
        const c = (coords[i].x + coords[i + 1].x) / 2;
        const d = (coords[i].y + coords[i + 1].y) / 2;
        context.quadraticCurveTo(coords[i].x, coords[i].y, c, d);
    }
    context.stroke();
};

export const animateAllGestures = (
    isAnimatingAllGestures, setIsAnimatingAllGestures, allGestures, canvasRef
) => {
    if (!isAnimatingAllGestures) return;

    const gestureRelativeEndTimes =
        allGestures.map(gesture => gesture[gesture.length - 1].normalizedT);

    const gestureEndTimes = [];
    for (let i = 0; i < gestureRelativeEndTimes.length; i++) {
        if (i === 0) {
            gestureEndTimes.push(gestureRelativeEndTimes[i]);
        } else {
            gestureEndTimes.push(gestureEndTimes[i - 1] + gestureRelativeEndTimes[i]);
        }
    }

    let startTime;
    let animatingGestureIndex = 0;
    const render = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;

        for (; // initialized outside the render loop
            animatingGestureIndex < allGestures.length;
            animatingGestureIndex++) {
            if (timeElapsed <= gestureEndTimes[animatingGestureIndex]) break;
        }

        clearCanvas(canvasRef);

        // We've gone past the end of the array, which means we have a few coords left to draw,
        // so draw everything and call it a day.
        if (animatingGestureIndex === allGestures.length) {
            for (const gesture of allGestures) drawGesture(canvasRef, gesture);
            return;
        }

        let timeOffset = 0;
        if (animatingGestureIndex > 0) {
            const fullyDrawnGestures = allGestures.slice(0, animatingGestureIndex);
            for (const gesture of fullyDrawnGestures) drawGesture(canvasRef, gesture);
            timeOffset = gestureEndTimes[animatingGestureIndex - 1];
        }

        const gestureCoords = allGestures[animatingGestureIndex];

        const coordsToDraw =
            gestureCoords.filter(coord => coord.normalizedT + timeOffset <= timeElapsed);

        if (coordsToDraw.length > 0) drawGesture(canvasRef, coordsToDraw);

        if (
            animatingGestureIndex === (allGestures.length - 1) &&
            coordsToDraw.length === gestureCoords.length) {
            return;
        }

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    setIsAnimatingAllGestures(false);

};


const GesturesToSound = ({audioContextRef}) => {
    const mainCanvasRef = useRef(null);
    const [isGesturing, setIsGesturing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currMouseCoords, setCurrMouseCoords] = useState([]);
    const [allMouseCoords, setAllMouseCoords] = useState([]);
    const [music, setMusic] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState([]);
    const [audioStartCallbacks, setAudioStartCallbacks] = useState([]);
    const [animatingIndex, setAnimatingIndex] = useState(null);
    const [isAnimatingAllGestures, setIsAnimatingAllGestures] = useState(false);

    useLayoutEffect(() => {
        if (!mainCanvasRef.current) return;
        const canvas = mainCanvasRef.current;
        const rect = canvas.getBoundingClientRect();
        if (canvas.height !== rect.height) canvas.height = rect.height;
        if (canvas.width !== rect.width) canvas.width = rect.width;

        canvas.addEventListener("mousedown", beginDrawing);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", endDrawing);
        canvas.addEventListener("mouseleave", endDrawing);

        return () => {
            canvas.removeEventListener("mousedown", beginDrawing);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mouseleave", endDrawing);
        };
    }, []);

    useLayoutEffect(() => {
        const [startCallbacks, _] =
            createAudioCallbacks(instrumentSamples, audioContextRef.current);

        setAudioStartCallbacks(startCallbacks);

        instrumentSamples.forEach((_, i) => {
        });
    }, [instrumentSamples]);

    const getCoords = (event) => {
        if (!mainCanvasRef.current) return;
        const canvas = mainCanvasRef.current;
        const rect = canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left),
            y: (event.clientY - rect.top),
            normalizedX: (event.clientX - rect.left) / canvas.width,
            normalizedY: (event.clientY - rect.top) / canvas.height,
            t: Date.now(),
        };
    };

    const beginDrawing = (event) => {
        const coords = getCoords(event);
        if (!coords) return;
        setIsGesturing(true);
        setCurrMouseCoords([coords]);
    };

    const draw = (event) => {
        if (!isGesturing) return;
        const newMouseCoord = getCoords(event);
        if (newMouseCoord) {
            setCurrMouseCoords(prevCoords => [...prevCoords, newMouseCoord]);
            drawGesture(mainCanvasRef, currMouseCoords);
        }
    };

    const endDrawing = () => {
        if (!isGesturing) return;
        setIsGesturing(false);

        const coordsWithNormalizedTimes = currMouseCoords.map((coord) => {
            return {
                ...coord,
                normalizedT: coord.t - currMouseCoords[0].t,
            };
        });

        if (coordsWithNormalizedTimes.length > 2) {
            setAllMouseCoords(prevCoords => [...prevCoords, coordsWithNormalizedTimes]);
        }
    };

    useEffect(() => {
        if (!mainCanvasRef.current) return;
        const canvas = mainCanvasRef.current;
        canvas.addEventListener("mouseup", endDrawing);
        canvas.addEventListener("mouseleave", endDrawing);

        return () => {
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mouseleave", endDrawing);
        };
    }, [beginDrawing, draw]);

    useEffect(() => {
        if (!mainCanvasRef.current) return;
        const canvas = mainCanvasRef.current;

        canvas.addEventListener("mousedown", beginDrawing);

        return () => {
            canvas.removeEventListener("mousedown", beginDrawing);
        };
    }, [endDrawing]);

    useEffect(() => {
        if (!mainCanvasRef.current) return;
        const canvas = mainCanvasRef.current;
        canvas.addEventListener("mousemove", draw);

        return () => {
            canvas.removeEventListener("mousemove", draw);
        };
    }, [beginDrawing, endDrawing]);

    const handleClearCanvas = (event) => {
        event.preventDefault();
        setAllMouseCoords([]);
        setInstrumentSamples([]);
        setMusic(null);
        clearCanvas(mainCanvasRef);
    };

    const handleSubmitGestures = async (event) => {
        event.preventDefault();
        setLoading(true);
        const canvas = mainCanvasRef.current;
        const canvasSettings = {
            width: canvas.width,
            height: canvas.height,
        };
        const requestBody = {
            gestures: allMouseCoords,
            // parameters: gestureParams,
            canvas: canvasSettings,
        };
        setInstrumentSamples([]);
        setMusic(null);
        await fetchPost('/api/gesture_to_audio/', requestBody, (response) => {
            setMusic(response.music);
            setInstrumentSamples(response.samples);
            setLoading(false);
        });
    };

    /* NOTE(ra): No undo or redo for now, but leaving this here in case we restore it.
    const undoGesture = (event) => {
        event.preventDefault();
        if (allMouseCoords.length > 0) {
            let lastGesture = allMouseCoords.pop();
            setUndoneGestures(prevLines => [...prevLines, lastGesture]);
            const canvas = mainCanvasRef.current;
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let step = 0; step < allMouseCoords.length; step++) {
                drawGesture(mainCanvasRef, allMouseCoords[step]);
            }
        }
    };

    const redoGesture = (event) => {
        event.preventDefault();
        if (undoneGestures.length > 0) {
            let lastUndoneGesture = undoneGestures.pop();
            setAllMouseCoords(prevLines => [...prevLines, lastUndoneGesture]);
            drawGesture(mainCanvasRef, lastUndoneGesture);
        }
    };
     */

    const handleMiniCanvasClick = (i) => {
        audioStartCallbacks[i]();
        setAnimatingIndex(i);
    };

    const drawingIsEmpty = (allMouseCoords.length === 0);


    // TODO(ra): Refactor copypasta from GestureSonifier
    // This is _straight up_ copied from over there; fix me later!
    useEffect(() => {
        if (animatingIndex === null) return;

        clearCanvas(mainCanvasRef);
        const allOtherGestures =
            allMouseCoords.filter((coord, coordIndex) => coordIndex !== animatingIndex);
        for (const gesture of allOtherGestures) drawGesture(mainCanvasRef, gesture);

        const gestureCoords = allMouseCoords[animatingIndex];

        let startTime;
        const render = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const timeElapsed = timestamp - startTime;

            clearCanvas(mainCanvasRef);
            for (const gesture of allOtherGestures) drawGesture(mainCanvasRef, gesture);

            const coordsToDraw = gestureCoords.filter(coord => {
                return coord.normalizedT <= timeElapsed;
            });
            if (coordsToDraw.length > 0) {
                drawGesture(mainCanvasRef, coordsToDraw);
            }
            if (timeElapsed < gestureCoords[gestureCoords.length - 1].normalizedT) {
                requestAnimationFrame(render);
            }
        };
        requestAnimationFrame(render);
        setAnimatingIndex(null);
    }, [animatingIndex]);

    useEffect(
        () => animateAllGestures(isAnimatingAllGestures, setIsAnimatingAllGestures, allMouseCoords, mainCanvasRef),
        [isAnimatingAllGestures]
    );

    return (<>
        <MarkP>
            First, draw something, then click Sonify! to hear your gestures in motion.
        </MarkP>

        <MarkP>
            Try drawing slowly vs. quickly, and explore the full space of the canvas.
        </MarkP>

        <div className="canvas-row">
            <div className="canvas-side">
                <canvas
                    className={"canvas active-canvas"}
                    ref={mainCanvasRef}
                />
            </div>
            <div className='result-side'>
                <div className="button-group" role="group">
                    <button className="btn btn-sonification btn-default"
                            onClick={handleClearCanvas}>
                        Clear
                    </button>
                    <button
                        disabled={drawingIsEmpty}
                        className="btn btn-sonification btn-secondary"
                        onClick={(e) => handleSubmitGestures(e)}>
                        {loading
                            ? <div className='spinner-border' role="status"/>
                            : "Sonify!"
                        }
                    </button>
                    {music && <NiceAudioPlayer
                        extraClass={"btn btn-sonification btn-primary"}
                        src={base64AudioToDataURI(music)}
                        text="Play"
                        onPlayCallback={() => setIsAnimatingAllGestures(true)}
                    />}
                </div>


                {instrumentSamples.length > 0 && (<>
                    <div className="mini-canvas-group">
                        <p>
                            Click to play each gesture:
                        </p>
                        {instrumentSamples.map((sample, i) =>
                            <MiniGestureCanvas
                                clickCallback={() => handleMiniCanvasClick(i)}
                                coords={allMouseCoords[i]}
                                key={i}
                            />
                        )}
                    </div>
                </>)}

            </div>
        </div>
    </>);
};


export default GesturesToSound;
