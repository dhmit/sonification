import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import ToolTemplate from "../templates/ToolTemplate";
import {ALL_DEFAULT_INSTRUMENTS} from "../instruments/InstrumentPicker";
import {useDynamicRefs} from "../../common";

const musicDataToUrl = (music) => `data:audio/wav;base64, ${music}`;

const loadResults = async (event, handleSubmit, setLoading) => {
    setLoading(true);
    await handleSubmit(event);
    setLoading(false);
};

const getRefIdForMiniCanvasAudio = (i) => `miniCanvasAudioRef${i}`;
const getRefIdForMiniCanvas = (i) => `miniCanvasRef${i}`;

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
    const [undoneGestures, setUndoneGestures] = useState([]);

    useEffect(() => {
        instrumentSamples.forEach((_, i) => {
            const miniCanvas = getRef(getRefIdForMiniCanvas(i));
            if (!miniCanvas) return;

            // TODO: normalize the gesture into the width/height of the canvas
            const rawCoords = allMouseCoords[i];

            const pad = 10; // maybe scale this padding?
            const minX = Math.min(...rawCoords.map(coord => coord.x)) - pad;
            const minY = Math.min(...rawCoords.map(coord => coord.y)) - pad;
            const maxY = Math.max(...rawCoords.map(coord => coord.y)) + pad;
            const maxX = Math.max(...rawCoords.map(coord => coord.x)) + pad;
            const originalWidth = maxX - minX;
            const originalHeight = maxY - minY;

            const scale = miniCanvas.current.width / Math.max(originalWidth, originalHeight);
            console.log(scale);

            const newCoords = [];
            for (const coord of rawCoords) {
                newCoords.push({
                    x: (coord.x - minX) * scale,
                    y: (coord.y - minY) * scale,
                });
            }

            drawLine(miniCanvas, newCoords);
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

    const drawLine = (thisCanvasRef, coords) => {
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
                drawLine(mainCanvasRef, currMouseCoords);
            }
        }
    }, [isGesturing, currMouseCoords]);

    const endDrawing = useCallback(() => {
        setIsGesturing(false);
        setCurrMouseCoords([]);
    }, []);

    useEffect(() => {
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

    const handleNewGestures = (event) => {
        resetCanvas(event);
        setSubmitted(false);
        setInstrumentSamples([]);
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

    const undoGesture = (event) => {
        event.preventDefault();
        if (allMouseCoords.length > 0) {
            let lastGesture = allMouseCoords.pop();
            setUndoneGestures(prevLines => [...prevLines, lastGesture]);
            const canvas = mainCanvasRef.current;
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let step = 0; step < allMouseCoords.length; step++) {
                drawLine(mainCanvasRef, allMouseCoords[step]);
            }
        }
    };

    const redoGesture = (event) => {
        event.preventDefault();
        if (undoneGestures.length > 0) {
            let lastUndoneGesture = undoneGestures.pop();
            setAllMouseCoords(prevLines => [...prevLines, lastUndoneGesture]);
            drawLine(mainCanvasRef, lastUndoneGesture);
        }
    };

    const playMiniCanvasGesture = (i) => {
        const miniCanvasAudio = getRef(getRefIdForMiniCanvasAudio(i));
        console.log(miniCanvasAudio);
        // miniCanvasAudio.current.play();
    };

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
                    <button
                        className="btn btn-outline-dark"
                        onClick={undoGesture} disabled={allMouseCoords.length === 0}>
                        Undo
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={redoGesture} disabled={undoneGestures.length === 0}>
                        Redo
                    </button>
                    <button className="btn btn-outline-dark" onClick={handleNewGestures}>
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
                {music && <audio controls controlsList="nodownload" src={musicDataToUrl(music)}/> }

                {instrumentSamples.length > 1 &&
                instrumentSamples.map((sample, i) => <React.Fragment key={i}>
                    <audio
                        controls
                        ref={setRef(getRefIdForMiniCanvasAudio(i))}
                        src={musicDataToUrl(sample)}
                    />
                    <canvas
                        onClick={() => playMiniCanvasGesture(i)}
                        height="100" width="100" ref={setRef(getRefIdForMiniCanvas(i))}
                    />
                </React.Fragment>)}

            </div>


        </div>


    </>);
};

export default GesturesToSound;
