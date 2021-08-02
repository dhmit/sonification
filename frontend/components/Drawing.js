import React, {useEffect, useState, useRef, useCallback} from "react";
import STYLES from "./Drawing.module.scss";

const Drawing = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState("draw");
    const [brushSize, setBrushSize] = useState(1);
    const [mouseCoord, setMouseCoord] = useState(undefined);

    const getCoords = (event) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        return {
            x: event.pageX - canvas.offsetLeft,
            y: event.pageY - canvas.offsetTop
        };
    };

    const drawLine = (startCoord, endCoord) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.beginPath();
            context.lineWidth = brushSize;
            context.lineJoin = "round";
            context.lineCap = "round";
            context.strokeStyle = "black";
            context.globalCompositeOperation = mode === "draw" ? "source-over" : "destination-out";
            context.moveTo(startCoord.x, startCoord.y);
            context.lineTo(endCoord.x, endCoord.y);
            context.stroke();
        }
    };

    const beginDrawing = useCallback((event) => {
        const coords = getCoords(event);
        if (coords) {
            setMouseCoord(coords);
            setIsDrawing(true);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener("mousedown", beginDrawing);
        return () => {
            canvas.removeEventListener("mousedown", beginDrawing);
        };
    }, [beginDrawing]);

    const draw = useCallback((event) => {
        if (isDrawing) {
            const newMouseCoord = getCoords(event);
            if (newMouseCoord && mouseCoord) {
                drawLine(mouseCoord, newMouseCoord);
                setMouseCoord(newMouseCoord);
            }
        }
    }, [isDrawing, mouseCoord]);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        canvas.addEventListener("mousemove", draw);
        return () => {
            canvas.removeEventListener("mousemove", draw);
        };
    }, [draw]);

    const endDrawing = useCallback(() => {
        setIsDrawing(false);
        setMouseCoord(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        canvas.addEventListener("mouseup", endDrawing);
        canvas.addEventListener("mouseleave", endDrawing);
        return () => {
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mouseleave", endDrawing);
        };
    },[endDrawing]);

    const switchMode = (event) => {
        event.preventDefault();
        setMode(prevMode => prevMode === "draw" ? "erase": "draw");
    };

    const handleBrushSizeInput = (event) => {
        setBrushSize(event.target.value);
    };

    return (
        <div className="container-fluid">
            <canvas className={STYLES.canvas}
                ref={canvasRef} id="canvas" width="500" height="500"></canvas>
            <div className="row">
                Mode: {mode}
            </div>
            <div className="row">
                Brush Size:
                <input type="range" id="brush" min="0" max="50"
                    value={brushSize} step="1" onChange={handleBrushSizeInput}/>
                <label htmlFor="brush">{brushSize}</label>
            </div>
            <button className="btn btn-primary" onClick={switchMode}>Switch Mode</button>
        </div>
    );
};

export default Drawing;
