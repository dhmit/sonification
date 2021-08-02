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

    const drawLine = (startCoord, endCoord) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.strokeStyle = "black";
            context.lineJoin = "round";
            context.lineWidth = 2;

            context.beginPath();
            context.moveTo(startCoord.x, startCoord.y);
            context.lineTo(endCoord.x, endCoord.y);
            context.closePath();

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
        canvas.addEventListener('mousemove', draw);
        return () => {
            canvas.removeEventListener('mousemove', draw);
        };
    }, [draw]);

    const endDrawing = useCallback(() => {
        setIsDrawing(false);
        setMouseCoord(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        canvas.addEventListener('mouseup', endDrawing);
        canvas.addEventListener('mouseleave', endDrawing);
        return () => {
            canvas.removeEventListener('mouseup', endDrawing);
            canvas.removeEventListener('mouseleave', endDrawing);
        };
    },[endDrawing]);

    return (
        <div className="container-fluid">
            <canvas className={STYLES.canvas}
                ref={canvasRef} id="canvas" width="500" height="500"></canvas>
        </div>
    );
};

export default Drawing;
