import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./summerPrototypes/ImageAnalysis.module.scss";


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
            context.strokeStyle = "black";
            context.globalCompositeOperation = "source-over";
            context.moveTo(coords[0].x, coords[0].y);
            let i;
            for (i = 0; i < coords.length - 1; i++) {
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

    const handleNewDrawing = (event) => {
        resetCanvas(event);
        setSubmitted(false);
    };

    return (
        <>
            <h1>Gestures to Sound</h1>

            <canvas
                className={`
                    ${STYLES.canvas}
                    ${submitted ? "" : STYLES.activeCanvas}
                `}
                ref={canvasRef}
                width="500" height="500"
            />
            <p>
                <button className="btn btn-sm btn-outline-primary text-right"
                    onClick={resetCanvas} disabled={submitted}>
                    Clear Drawing</button>
            </p>
        </>
    );
};

export default GesturesToSound;
