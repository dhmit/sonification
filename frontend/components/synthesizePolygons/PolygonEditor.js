import React, {useRef, useState} from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes, {func} from "prop-types";

const PolygonEditor = ({width = 300, height = 300, finishedEditingCallback}) => {

    const [points, setPoints] = useState([]);
    const [cursorLocation, setCursorLocation] = useState(null);
    const [finishedDrawing, setFinishedDrawing] = useState(false);

    const svgDisplay = useRef(null);

    function handleClickSvg(e) {
        e.preventDefault();
        if (finishedDrawing) return;
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setPoints([...points, [x, y]]);
    }

    function handleMoveSvg(e) {
        e.preventDefault();
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setCursorLocation([x, y]);
    }

    function handleLeaveSvg(e) {
        e.preventDefault();
        setCursorLocation(null);
    }

    function finishDrawing() {
        setFinishedDrawing(true);
        finishedEditingCallback(points);
    }

    function clearDrawing() {
        setPoints([]);
        setFinishedDrawing(false);
    }

    return (
        <div className={STYLES.editorContainer}>
            <svg
                className={finishedDrawing ? STYLES.svgDisplayFinished : STYLES.svgDisplay}
                width={width}
                height={height}
                onClick={handleClickSvg}
                onMouseMove={handleMoveSvg}
                onMouseEnter={handleMoveSvg}
                onMouseLeave={handleLeaveSvg}
                ref={svgDisplay}
            >
                {cursorLocation && points.length > 0 && !finishedDrawing &&
                <line
                    key="line-cursor"
                    x1={points[points.length - 1][0]}
                    y1={points[points.length - 1][1]}
                    x2={cursorLocation[0]}
                    y2={cursorLocation[1]}
                    className={STYLES.line}
                />}
                {finishedDrawing &&
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
                        {i < points.length - 1 && <line
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
                {cursorLocation && !finishedDrawing &&
                <circle
                    key="point-cursor"
                    cx={cursorLocation[0]}
                    cy={cursorLocation[1]}
                    r={5}
                    className={STYLES.cursorPoint}
                /> }
            </svg>
            <div className={STYLES.buttonRow}>
                <button
                    className={STYLES.editorButton}
                    onClick={finishDrawing}
                    disabled={points.length < 3 || finishedDrawing}
                >
                    Done
                </button>
                <button
                    className={STYLES.editorButton}
                    onClick={clearDrawing}
                    disabled={points.length === 0}
                >
                    Clear
                </button>
            </div>
        </div>

    );
};

PolygonEditor.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    finishedEditingCallback: PropTypes.func,
};

export default PolygonEditor;
