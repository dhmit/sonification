import React, {useEffect, useRef, useState} from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

/**
 * A simple polygon editor with specified width and height. A custom callback onSubmit can be
 * specified, which is called when the submit button is clicked. The submit button is shown
 * only if the prop showSubmit is true.
 */
const PolygonEditor = (
    {
        width = 0,
        height = 0,
        onEdit,
        showSubmit = false,
        onSubmit,
        outerWidth,
    }
) => {
    const [loading, setLoading] = useState(false);
    const [points, setPoints] = useState([]);
    const [cursorLocation, setCursorLocation] = useState(null);
    const [fileDownloadUrl, setFileDownloadUrl] = useState(null);
    const fileDownloadRef = useRef(null);
    const fileUploadRef = useRef(null);
    const svgDisplay = useRef(null);

    function handleEdit() {
        onEdit();
    }

    const fileReader = new FileReader();
    fileReader.onloadstart = (e) => {
        setLoading(true);
    };
    // parse the file
    fileReader.onloadend = (e) => {
        const content = fileReader.result;

        let minX = Number.MAX_VALUE;
        let maxX = -Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxY = -Number.MAX_VALUE;

        const newPoints = [];
        content.split(/\s+/).forEach((row) => {
            const values = row.split(",");
            if (values.length === 2) {
                newPoints.push([parseFloat(values[0]), parseFloat(values[1])]);
                minX = Math.min(minX, values[0]);
                maxX = Math.max(maxX, values[0]);
                minY = Math.min(minY, values[1]);
                maxY = Math.max(maxY, values[1]);
            }
        });

        const xStretch = 0.9 * internalWidth / (maxX - minX);
        const yStretch = 0.9 * internalHeight / (maxY - minY);
        const stretch = Math.min(xStretch, yStretch);

        const scaledPoints = newPoints.map((point) => {
            return [
                stretch * (point[0] - minX) + 0.05 * internalWidth,
                stretch * (point[1] - minY) + 0.05 * internalHeight,
            ];
        });

        setPoints(scaledPoints);
        handleEdit();
        fileUploadRef.current.value = null;
        setLoading(false);
    };


    const containerRef = useRef(null);
    const [internalWidth, setInternalWidth] = useState(width);
    const [internalHeight, setInternalHeight] = useState(height);

    useEffect(() => {
        if (width === 0) {
            setInternalWidth(containerRef.current.clientWidth);
        } else {
            setInternalWidth(width);
        }
    }, [width, outerWidth]);

    useEffect(() => {
        if (height === 0) {
            setInternalHeight(containerRef.current.clientHeight);
        } else {
            setInternalHeight(height);
        }
    }, [height]);

    // When fileDownloadUrl is set, if it is not null, download the generated file and revoke
    // the URL to preserve resources.
    useEffect(() => {
        if (fileDownloadUrl) {
            fileDownloadRef.current.click();
            URL.revokeObjectURL(fileDownloadUrl);
            setFileDownloadUrl(null);
        }
    }, [fileDownloadUrl]);

    // download the polygon as csv
    function downloadPolygon() {
        const csvContent = points.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent]);
        setFileDownloadUrl(URL.createObjectURL(blob));
    }

    function handleClickUpload() {
        fileUploadRef.current.click();
    }

    function uploadPolygon(e) {
        const file = e.target.files[0];
        fileReader.readAsText(file);
    }

    // add a new point to polygon
    function handleClickSvg(e) {
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setPoints([...points, [x, y]]);
        handleEdit();
    }

    // move the cursor
    function handleMoveSvg(e) {
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setCursorLocation([x, y]);
    }

    // remove the cursor
    function handleLeaveSvg() {
        setCursorLocation(null);
    }

    function clearDrawing() {
        setPoints([]);
        handleEdit();
    }

    function handleSubmit() {
        setLoading(true);
        onSubmit(points).then(() => {
            setLoading(false);
        });
    }

    const editorIconButtons = [
        {
            svg: <svg></svg>,
            onClick: () => {},
        },
    ];

    return (
        <div className={STYLES.editorContainer} ref={containerRef}>
            <div className={STYLES.buttonRow}>
                <button
                    className={STYLES.editorButton}
                    onClick={clearDrawing}
                    disabled={points.length === 0}
                >
                    Clear
                </button>
                <button
                    className={STYLES.editorButton}
                    onClick={downloadPolygon}
                    disabled={points.length === 0}
                >
                    Download
                </button>
                <button
                    className={STYLES.editorButton}
                    onClick={handleClickUpload}
                >
                    Upload
                </button>
                {showSubmit &&
                <button
                    className={STYLES.editorButton}
                    onClick={handleSubmit}
                    disabled={points.length < 3}
                >
                    Submit
                </button>}
                <a
                    hidden
                    style={{display: "hidden"}}
                    download="points.csv"
                    ref={fileDownloadRef}
                    href={fileDownloadUrl}
                />
                <input
                    hidden
                    style={{display: "hidden"}}
                    type="file"
                    ref={fileUploadRef}
                    accept=".txt,.csv"
                    onChange={uploadPolygon}
                />
            </div>
            <svg
                className={loading ? STYLES.svgDisplayLoading : STYLES.svgDisplay}
                width={internalWidth}
                height={internalHeight}
                onClick={handleClickSvg}
                onMouseMove={handleMoveSvg}
                onMouseEnter={handleMoveSvg}
                onMouseLeave={handleLeaveSvg}
                ref={svgDisplay}
            >
                {cursorLocation && points.length > 0 &&
                <>
                    <line
                        key="line-cursor-1"
                        x1={points[points.length - 1][0]}
                        y1={points[points.length - 1][1]}
                        x2={cursorLocation[0]}
                        y2={cursorLocation[1]}
                        className={STYLES.tempLine}
                    />
                    <line
                        key="line-cursor-2"
                        x1={points[0][0]}
                        y1={points[0][1]}
                        x2={cursorLocation[0]}
                        y2={cursorLocation[1]}
                        className={STYLES.tempLine}
                    />
                </>
                }
                {!cursorLocation && points.length >= 3 &&
                <line
                    key="line-0"
                    x1={points[points.length - 1][0]}
                    y1={points[points.length - 1][1]}
                    x2={points[0][0]}
                    y2={points[0][1]}
                    className={STYLES.line}
                />}
                {points.map((p, i) => (
                    <React.Fragment key={`fragment-${i}`}>
                        {i < points.length - 1 &&
                        <line
                            key={`line-${i}`}
                            x1={points[i][0]}
                            y1={points[i][1]}
                            x2={points[i + 1][0]}
                            y2={points[i + 1][1]}
                            className={STYLES.line}
                        />}
                        <circle
                            key={`point-${i}`}
                            cx={p[0]}
                            cy={p[1]}
                            r={5}
                            className={STYLES.point}
                        />
                    </React.Fragment>
                ))}
                {cursorLocation &&
                <circle
                    key="point-cursor"
                    cx={cursorLocation[0]}
                    cy={cursorLocation[1]}
                    r={5}
                    className={STYLES.cursorPoint}
                /> }
            </svg>
            <div className={STYLES.buttonRow}>
                <button className={STYLES.editorButton}>c</button>
            </div>
        </div>

    );
};

PolygonEditor.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    onEdit: PropTypes.func,
    showSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    outerWidth: PropTypes.number,
};

export default PolygonEditor;
