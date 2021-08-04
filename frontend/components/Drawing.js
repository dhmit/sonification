import React, {useEffect, useState, useRef, useCallback} from "react";
import STYLES from "./Drawing.module.scss";
import {getCookie} from "../common";

const Drawing = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState("draw");
    const [brushSize, setBrushSize] = useState(1);
    const [color, setColor] = useState("#000000");
    const [mouseCoord, setMouseCoord] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [soundData, setSoundData] = useState(null);

    const getCoords = (event) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        return {
            x: event.pageX - canvas.offsetLeft,
            y: event.pageY - canvas.offsetTop
        };
    };

    const drawLine = (coords) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.beginPath();
            context.lineWidth = brushSize;
            context.lineJoin = "round";
            context.lineCap = "round";
            context.strokeStyle = color;
            context.globalCompositeOperation = mode === "draw" ? "source-over" : "destination-out";
            context.moveTo(coords[0].x, coords[0].y);
            let i;
            for (i = 1; i < coords.length - 1; i++) {
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
            setMouseCoord(prevCoords => [...prevCoords, coords]);
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
        if (isDrawing && !submitted) {
            const newMouseCoord = getCoords(event);
            if (newMouseCoord) {
                setMouseCoord(prevCoords => [...prevCoords, newMouseCoord]);
                drawLine(mouseCoord);
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
        setMouseCoord([]);
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

    const handleColorInput = (event) => {
        setColor(event.target.value);
    };

    const handleSubmitDrawing = (event) => {
        event.preventDefault();
        setSubmitted(true);
        const canvas = canvasRef.current;
        canvas.toBlob((blob)=> {
            submitFileToAPI(blob);
        }, "image/jpeg");
    };

    const handleFileInput = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleSubmitFile = (event) => {
        event.preventDefault();
        if (imageFile) {
            submitFileToAPI(imageFile);
        } else {
            alert("Please upload a JPEG file first.");
        }
    };

    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("image", file, "image.jpg");
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken
            },
            body: formData
        };
        fetch("/api/image_to_sound", requestOptions)
            .then(response => response.json())
            .then(data => {
                setSoundData(data);
            });
    };

    return (
        <div className="container-fluid">
            <canvas className={!submitted && STYLES.activeCanvas}
                ref={canvasRef} id="canvas" width="500" height="500"></canvas>
            <div className="row">
                Mode: {mode}
            </div>
            <div className="row">
                Brush Size:
                <input type="range" id="brush" min="1" max="50"
                    value={brushSize} step="1" onChange={handleBrushSizeInput}/>
                <label htmlFor="brush">{brushSize}</label>
            </div>
            <div className="row">
                Brush Color: 
                <input type="color" value={color} onChange={handleColorInput}/>
            </div>
            <button className="btn btn-primary" onClick={switchMode}>Switch Mode</button>
            <button onClick={handleSubmitDrawing}>Submit Drawing</button>
            <input type="file" accept="image/jpeg" onChange={handleFileInput}/>
            <button onClick={handleSubmitFile}>Submit Image File</button>
        </div>
    );
};

export default Drawing;
