import React, {useEffect, useState, useRef, useCallback} from "react";
import STYLES from "./ImageAnalysis.module.scss";
import {getCookie} from "../common";
import {Tabs, Tab} from "react-bootstrap";

const ImageAnalysis = () => {
    const canvasRef = useRef(null);
    const tabRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState("Brush");
    const [brushSize, setBrushSize] = useState(1);
    const [color, setColor] = useState("#000000");
    const [mouseCoord, setMouseCoord] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [soundData, setSoundData] = useState(null);

    const getCoords = (event) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const canvasCoord = canvas.getBoundingClientRect();
        return {
            x: event.clientX - canvasCoord.x,
            y: event.clientY - canvasCoord.y
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
            context.globalCompositeOperation = mode === "Brush" ? "source-over" : "destination-out";
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
        setMode(prevMode => prevMode === "Brush" ? "Eraser": "Brush");
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
            <h1>Image Analysis</h1>
            <p>Please create a drawing or upload an image to convert into sound.</p>
            <Tabs defaultActiveKey="drawing">
                <Tab ref={tabRef} eventKey="drawing" title="Drawing Canvas">
                    <div className="row">
                        <div className="col">
                            <canvas className={`${STYLES.canvasBorder} ${submitted ? "" : STYLES.activeCanvas}`}
                                ref={canvasRef} width="550" height="550"></canvas>
                        </div>
                        <div className="col mt-3">
                            <p>
                                Canvas Tool: {mode}
                                <button className="btn btn-sm btn-outline-dark text-right mx-3" onClick={switchMode}>Toggle Tool</button>
                            </p>
                            <p>
                                Tool Size: {brushSize}
                                <input className="form-control-range" type="range"
                                    min="1" max="50" value={brushSize}
                                    step="1" onChange={handleBrushSizeInput}/>
                            </p>
                            {mode === "Brush" &&
                                <p>
                                    Brush Color: <input type="color"
                                        value={color} onChange={handleColorInput}/>
                                </p>
                            }
                            <button className="btn btn-success" disabled={submitted} onClick={handleSubmitDrawing}>Submit Drawing</button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="file" title="Image Upload">
                    <input className="my-3" type="file" accept="image/jpeg" onChange={handleFileInput}/>
                    <br/>
                    {
                        imageFile &&
                        <p>
                            <img className={STYLES.imageFile} src={URL.createObjectURL(imageFile)}></img>
                        </p>
                    }
                    <button className="btn btn-success" onClick={handleSubmitFile}>Submit Image File</button>
                </Tab>
            </Tabs>
        </div>
    );
};

export default ImageAnalysis;
