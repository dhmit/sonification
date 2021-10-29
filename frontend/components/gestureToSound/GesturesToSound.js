import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";


const GesturesToSound = () => {
    const canvasRef = useRef(null);
    const [isGesturing, setIsGesturing] = useState(false);
    const [currMouseCoords, setCurrMouseCoords] = useState([]);
    const [allMouseCoords, setAllMouseCoords] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [soundData, setSoundData] = useState(null);
    const [undoneGestures, setUndoneGestures] = useState([]);
    const [gestureParams, setGestureParams] = useState({
        compression: 10,
        pitch: {low: 131, high:698}, // range of tenor-alto
        duration: {low: 0.1, high:2},
    });

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
        setSoundData(null);
    };

    const handleSubmitGestures = (event) => {
        event.preventDefault();
        const apiBody = {
            gestures: allMouseCoords,
            parameters: gestureParams,
        };
        const apiURL = "/api/gesture_to_sound/";
        const responseCallbackFunc = (data) => {
            setSoundData((data.sound));
        };
        fetchPost(apiURL, apiBody, responseCallbackFunc);
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
            //drawLine(allMouseCoords[allMouseCoords.length-1]);
            drawLine(lastUndoneGesture);
        }
    };

    const handleUpdateCompression = (event) => {
        event.preventDefault();
        setGestureParams(prevState =>
            ({...prevState, compression: parseInt(event.target.value)}));
    };

    const handleUpdatePitch = (event) => {
        event.preventDefault();
        setGestureParams(prevParams => ({...prevParams,
            pitch:{...prevParams.pitch, [event.target.id]: parseInt(event.target.value)}}));
    };

    const handleUpdateDuration = (event) => {
        event.preventDefault();
        setGestureParams(prevParams => ({...prevParams,
            duration:{...prevParams.duration, [event.target.id]: parseFloat(event.target.value)}}));
    };

    return (
        <>
            <h1>Gestures to Sound</h1>
            <div className="row">
                <div className="col-12 col-sm-5">
                    <p>
                        <button className="btn btn-outline-primary text-right"
                            onClick={undoGesture} disabled={allMouseCoords.length === 0}>
                            Undo</button>
                        <button className="btn btn-outline-primary mx-3"
                            onClick={redoGesture} disabled={undoneGestures.length === 0}>
                            Redo</button>
                    </p>
                    <canvas
                        className={`
                            ${STYLES.canvas}
                            ${submitted ? "" : STYLES.activeCanvas}
                        `}
                        ref={canvasRef}
                        width="500" height="500"
                    />
                </div>
                <div className="col mt-3">
                    <p>
                        <button className="btn btn-outline-primary text-right"
                            onClick={resetCanvas} disabled={submitted}>
                            Clear Gestures</button>
                        <button className="btn btn-outline-primary mx-3" disabled={submitted}
                            onClick={handleSubmitGestures}>Submit Gestures</button>
                        <button className="btn btn-outline-secondary"
                            onClick={handleNewGestures}>New Canvas</button>
                    </p>
                    <p>
                        <b>Compression:</b>
                        <input className="slider mx-3" type="range"
                            min="1" max="100" step="1" value={gestureParams.compression}
                            onChange={handleUpdateCompression}/>
                        {gestureParams.compression}
                    </p>
                    <p>
                    <b>Pitch:</b>
                        <div className="row">
                            <div className="col">
                                Low:
                                <input className="mx-2" type="range" min="75" max="262" step="1" id="low"
                                    value={gestureParams.pitch.low}
                                    onChange={handleUpdatePitch}/>
                                {gestureParams.pitch.low}
                            </div>
                            <div className="col">
                                High:
                                <input className="mx-2" type="range" min="300" max="1045" step="1" id="high"
                                    value={gestureParams.pitch.high}
                                    onChange={handleUpdatePitch}/>
                                {gestureParams.pitch.high}
                            </div>
                        </div>
                    </p>
                    <p>
                        <b>Duration:</b>
                        <div className="row">
                            <div className="col">
                                Low:
                                <input type="range" min="0.01" max="0.5" id="low" step="0.01"
                                    value={gestureParams.duration.low}
                                    onChange={handleUpdateDuration}/>
                                {gestureParams.duration.low}
                            </div>
                            <div className="col">
                                High:
                                <input type="range" min="1" max="2" step="0.01" id="high"
                                    value={gestureParams.duration.high}
                                    onChange={handleUpdateDuration}/>
                                {gestureParams.duration.high}
                            </div>
                        </div>
                    </p>
                    {
                        soundData && <p>
                            Gesture Sounds:
                            <audio controls="controls"
                                src={`data:audio/wav;base64, ${soundData}`}
                                controlsList="nodownload"/>
                        </p>
                    }
                </div>
            </div>
        </>
    );
};

export default GesturesToSound;
