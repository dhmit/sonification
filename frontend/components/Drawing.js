import React, {useEffect, useState, useRef, useCallback} from "react";
import STYLES from "./Drawing.module.scss";

const Drawing = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mouseCoord, setMouseCoord] = useState(undefined);

    const getCoords = (event) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        return {
            x: event.pageX - canvas.offsetLeft,
            y: event.pageY - canvas.offsetTop
        };
    };


    const beginPaint = useCallback((event) => {
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
        canvas.addEventListener("mousedown", beginPaint);
        return () => {
            canvas.removeEventListener("mousedown", beginPaint);
        };
    }, [beginPaint]);

    return (
        <div className="container-fluid">
            <canvas className={STYLES.canvas}
                ref={canvasRef} id="canvas" width="500" height="500"></canvas>
        </div>
    );
};

export default Drawing;
