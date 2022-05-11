import React, {useCallback, useLayoutEffect, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import {useDynamicRefs} from "../../common";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";
import {base64AudioToDataURI} from "../../common";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";

const loadResults = async (event, handleSubmit, setLoading) => {
    setLoading(true);
    await handleSubmit(event);
    setLoading(false);
};

// NOTE(ra)
const getRefIdForMiniCanvas = (i) => `miniCanvasRef${i}`;


export const MiniGestureCanvas = ({audioCallback, canvasRef}) =>
    <canvas
        style={{border: "1px solid grey"}}
        className="mr-2"
        onClick={() => audioCallback()}
        height="100" width="100"
        ref={canvasRef}
    />
;

export const drawGestureOnMiniCanvas = (miniCanvas, rawCoords) => {
    const pad = 10; // TODO(ra): maybe scale this padding?
    const minX = Math.min(...rawCoords.map(coord => coord.x)) - pad;
    const minY = Math.min(...rawCoords.map(coord => coord.y)) - pad;
    const maxY = Math.max(...rawCoords.map(coord => coord.y)) + pad;
    const maxX = Math.max(...rawCoords.map(coord => coord.x)) + pad;

    const originalWidth = maxX - minX;
    const originalHeight = maxY - minY;
    const scale = miniCanvas.current.width / Math.max(originalWidth, originalHeight);

    // TODO(ra): center by width if tall, center by height if squat
    const newCoords = [];
    for (const coord of rawCoords) {
        newCoords.push({
            x: (coord.x - minX) * scale,
            y: (coord.y - minY) * scale,
        });
    }

    drawGesture(miniCanvas, newCoords);
};

export const drawGesture = (thisCanvasRef, coords) => {
    if (!thisCanvasRef.current) return;
    const canvas = thisCanvasRef.current;
    const context = canvas.getContext("2d");
    if (context) {
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
    }
};

const GesturesToSound = () => {
    const mainCanvasRef = useRef(null);
    const [getRef, setRef] = useDynamicRefs();
    const [isGesturing, setIsGesturing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currMouseCoords, setCurrMouseCoords] = useState([]);
    const [allMouseCoords, setAllMouseCoords] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [music, setMusic] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState([]);
    const [audioStartCallbacks, setAudioStartCallbacks] = useState([]);
    const [audioEndCallbacks, setAudioEndCallbacks] = useState([]);
    const [undoneGestures, setUndoneGestures] = useState([]);

    const {audioCtx, compressor} = createAudioContextWithCompressor();
    const audioContextRef = useRef(audioCtx);

    useLayoutEffect(() => {
        const [startCallbacks, endCallbacks] =
            createAudioCallbacks(instrumentSamples, audioContextRef.current);

        setAudioStartCallbacks(startCallbacks);
        setAudioEndCallbacks(endCallbacks);

        console.log(instrumentSamples);
        instrumentSamples.forEach((_, i) => {
            const miniCanvas = getRef(getRefIdForMiniCanvas(i));
            if (!miniCanvas.current) return;
            drawGestureOnMiniCanvas(miniCanvas, allMouseCoords[i]);
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


    const beginDrawing = useCallback((event) => {
        const coords = getCoords(event);
        if (coords) {
            setIsGesturing(true);
            setCurrMouseCoords(prevCoords => [...prevCoords, coords]);
        }
    }, []);

    const draw = useCallback((event) => {
        if (isGesturing && !submitted.drawing) {
            const newMouseCoord = getCoords(event);
            if (newMouseCoord) {
                setCurrMouseCoords(prevCoords => [...prevCoords, newMouseCoord]);
                drawGesture(mainCanvasRef, currMouseCoords);
            }
        }
    }, [isGesturing, currMouseCoords]);

    const endDrawing = useCallback(() => {
        setIsGesturing(false);
        setCurrMouseCoords([]);
    }, []);

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
        if (!isGesturing && currMouseCoords.length) {
            setAllMouseCoords(prevLines => [...prevLines, currMouseCoords]);
        }
        return () => {
            canvas.removeEventListener("mousedown", beginDrawing);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mouseleave", endDrawing);
        };
    }, [beginDrawing, draw, endDrawing]);

    const resetCanvas = (event) => {
        event.preventDefault();
        const canvas = mainCanvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        setAllMouseCoords([]);
    };

    const clearCanvas = (event) => {
        resetCanvas(event);
        setSubmitted(false);
        setInstrumentSamples([]);
        setMusic(null);
    };

    const handleSubmitGestures = async (event) => {
        event.preventDefault();
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
        await fetchPost('/api/gesture_to_audio/', requestBody, (response) => {
            setMusic(response.music);
            setInstrumentSamples(response.samples);
        });
        setSubmitted(true);
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

    const drawingIsEmpty = (allMouseCoords.length === 0);

    let sonifyButtonText;
    if (drawingIsEmpty) {
        sonifyButtonText = 'First, draw something.';
    }
    else {
        if (instrumentSamples) sonifyButtonText = 'Update';
        else sonifyButtonText = 'Sonify';
    }

    return (<>
        <p>
            First, draw something, then click Sonify! at the bottom of the page to hear your gestures in motion.
        </p>

        <div className="row">
            <div className="col-8">
                <canvas
                    className={`
                                ${STYLES.canvas}
                                ${submitted ? "" : STYLES.activeCanvas}
                                width='500px' height='500px'
                            `}
                    ref={mainCanvasRef}
                />
            </div>
            <div className='col-4 px-0 px-md-2'>
                <div className="btn-group-vertical w-100 mx-0 mb-2" role="group">
                    <button className="btn btn-outline-dark" onClick={clearCanvas}>
                        Clear
                    </button>
                </div>

                <button
                    disabled={drawingIsEmpty}
                    className="w-100 btn btn-outline-primary mb-4"
                    onClick={(event) => loadResults(event, handleSubmitGestures, setLoading)}
                >
                    {loading
                        ? <div className='spinner-border' role="status"/>
                        : sonifyButtonText
                    }
                </button>

                {music && <NiceAudioPlayer src={base64AudioToDataURI(music)} text="Play the full drawing"/> }

                {instrumentSamples.length > 1 && (<>
                    <p>
                        Click to play each gesture:
                    </p>
                    {instrumentSamples.map((sample, i) =>
                        <MiniGestureCanvas
                            audioCallback={audioStartCallbacks[i]}
                            canvasRef={setRef(getRefIdForMiniCanvas(i))}
                            key={i}
                        />
                    )}
                </>)}

            </div>
        </div>
    </>);
};



export default GesturesToSound;
