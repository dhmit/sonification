import React, {useLayoutEffect, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import {useDynamicRefs} from "../../common";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {base64AudioToDataURI} from "../../common";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";


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

export const clearCanvas = (miniCanvasRef) => {
    const canvas = miniCanvasRef.current;
    const context = canvas.getContext('2d');
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
            if(timeElapsed < scaledCoords[scaledCoords.length - 1].normalizedT) {
                requestAnimationFrame(render);
            }
        };
        requestAnimationFrame(render);
        setIsAnimating(false);
    }, [isAnimating]);

    return (
        <canvas
            style={{border: "1px solid grey"}}
            className="mr-2"
            onClick={(e) => handleClick(e)}
            height="100" width="100"
            ref={canvasRef}
        />
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

    let sonifyButtonText;
    if (drawingIsEmpty) {
        sonifyButtonText = 'First, draw something.';
    }
    else {
        if (instrumentSamples.length) sonifyButtonText = 'Update';
        else sonifyButtonText = 'Sonify!';
    }

    // TODO(ra): Refactor copypasta from GestureSonifier
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
            if(timeElapsed < gestureCoords[gestureCoords.length - 1].normalizedT) {
                requestAnimationFrame(render);
            }
        };
        requestAnimationFrame(render);
        setAnimatingIndex(null);
    }, [animatingIndex]);

    return (<>
        <p>
            First, draw something, then click Sonify! to hear your gestures in motion.
        </p>

        <div className="row">
            <div className="col-8">
                <canvas
                    className={`
                                ${STYLES.canvas}
                                ${STYLES.activeCanvas}
                                width='500px' height='500px'
                            `}
                    ref={mainCanvasRef}
                />
            </div>
            <div className='col-4 px-0 px-md-2'>
                <div className="btn-group-vertical w-100 mx-0 mb-2" role="group">
                    <button className="btn btn-outline-dark" onClick={handleClearCanvas}>
                        Clear
                    </button>
                </div>

                <button
                    disabled={drawingIsEmpty}
                    className="w-100 btn btn-outline-primary mb-4"
                    onClick={(e) => handleSubmitGestures(e)}
                >
                    {loading
                        ? <div className='spinner-border' role="status"/>
                        : sonifyButtonText
                    }
                </button>

                {music && <NiceAudioPlayer src={base64AudioToDataURI(music)} text="Play the full drawing"/> }

                {instrumentSamples.length > 0 && (<>
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
                </>)}

            </div>
        </div>
    </>);
};



export default GesturesToSound;
