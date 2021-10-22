import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {getCookie, fetchPost} from "../../common";


const GesturesToSound = () => {
    const canvasRef = useRef(null);
    const [isGesturing, setIsGesturing] = useState(false);
    const [currMouseCoords, setCurrMouseCoords] = useState([]);
    const [allMouseCoords, setAllMouseCoords] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [soundData, setSoundData] = useState(null);

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
        };
        const apiURL = "/api/gesture_to_sound/";
        const responseCallbackFunc = (data) => {
            setSoundData((data.sound));
        };
        fetchPost(apiURL, apiBody, responseCallbackFunc);
        setSubmitted(true);
    };

    return (
        <>
            <h1>Gestures to Sound</h1>
            <div className="row">
                <div className="col-12 col-sm-5">
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
