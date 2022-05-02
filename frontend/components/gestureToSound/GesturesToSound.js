import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import ToolTemplate from "../templates/ToolTemplate";
import {ALL_DEFAULT_INSTRUMENTS} from "../instruments/InstrumentPicker";

const GesturesToSound = () => {
    const canvasRef = useRef(null);
    const [isGesturing, setIsGesturing] = useState(false);
    const [currMouseCoords, setCurrMouseCoords] = useState([]);
    const [allMouseCoords, setAllMouseCoords] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [music, setMusic] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState(null);
    const [undoneGestures, setUndoneGestures] = useState([]);
    // const [gestureParams, setGestureParams] = useState({
    //     pitch: {low: 131, high:698},
    // });

    const getCoords = (event) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scale = {
            x: canvas.width / rect.width,
            y: canvas.height / rect.height,
        };
        return {
            x: (event.clientX - rect.left) * scale.x,
            y: (event.clientY - rect.top) * scale.y,
            t: Date.now(),
        };
    };

    const drawLine = (coords) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
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
                drawLine(currMouseCoords);
            }
        }
    }, [isGesturing, currMouseCoords]);

    const endDrawing = useCallback(() => {
        setIsGesturing(false);
        setCurrMouseCoords([]);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
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
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        setAllMouseCoords([]);
    };

    const handleNewGestures = (event) => {
        resetCanvas(event);
        setSubmitted(false);
        setInstrumentSamples(null);
    };

    const handleSubmitGestures = async (event) => {
        event.preventDefault();
        const canvas = canvasRef.current;
        const canvasSettings = {
            width: canvas.width,
            height: canvas.height,
        };
        console.log(allMouseCoords);
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
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let step = 0; step < allMouseCoords.length; step++) {
                drawLine(allMouseCoords[step]);
            }
        }
    };

    const redoGesture = (event) => {
        event.preventDefault();
        if (undoneGestures.length > 0) {
            let lastUndoneGesture = undoneGestures.pop();
            setAllMouseCoords(prevLines => [...prevLines, lastUndoneGesture]);
            drawLine(lastUndoneGesture);
        }
    };

    // const updatePitch = (newValue) => {
    //     setGestureParams(prevParams => ({...prevParams,
    //         pitch:{low:newValue[0], high:newValue[1]}}));
    // };

    return (<ToolTemplate
        title='Gestures'
        description={
            <p>
            This module tracks your mouse movement and converts the direction and speed of your
            gesture into sound. First, draw something, then click Sonify! at the bottom of the page
            to hear your gestures in motion.
            </p>
        }
        instrumentSamples={instrumentSamples}
        music={music}
        handleSubmit={handleSubmitGestures}
        sonifyButtonDisabled={allMouseCoords.length === 0}
        instrumentPickerProps={{
            includedDefaultInstruments: ALL_DEFAULT_INSTRUMENTS,
        }}
        tool={<>
            <div className="row">
                <div className="col-12 col-md-10 px-0">
                    <canvas
                        className={`
                            ${STYLES.canvas}
                            ${submitted ? "" : STYLES.activeCanvas}
                        `}
                        ref={canvasRef}
                        width="500" height="500"
                    />
                </div>
                <div className='col-12 col-md-2 px-0 px-md-2'>
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
                </div>
            </div>
            {/* <div className="row">
                <div className="col">
                    <div>
                        <strong>Pitch</strong>
                        <RangeSliderInput
                            name="pitch"
                            units="Hz"
                            minValue={131} // range of tenor-alto
                            maxValue={698}
                            updateValues={updatePitch}
                            step={1}
                        />
                    </div>
                </div>
            </div> */}
        </>}
    />);
};

export default GesturesToSound;
