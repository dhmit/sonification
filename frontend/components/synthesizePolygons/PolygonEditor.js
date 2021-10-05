import React, {useRef, useState} from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

const PolygonEditor =
    ({
        width = 300,
        height = 300,
        showSubmit = false,
        onSubmit,
    }) => {

    const [points, setPoints] = useState([]);
    const [cursorLocation, setCursorLocation] = useState(null);

    const svgDisplay = useRef(null);

    function handleClickSvg(e) {
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setPoints([...points, [x, y]]);
    }

    function handleMoveSvg(e) {
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setCursorLocation([x, y]);
    }

    function handleLeaveSvg(e) {
        setCursorLocation(null);
    }

    function clearDrawing() {
        setPoints([]);
    }

    return (
        <div className={STYLES.editorContainer}>
            <svg
                className={STYLES.svgDisplay}
                width={width}
                height={height}
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
                {/*<button*/}
                {/*    className={STYLES.editorButton}*/}
                {/*    onClick={finishDrawing}*/}
                {/*    disabled={points.length < 3 || finishedDrawing}*/}
                {/*>*/}
                {/*    Done*/}
                {/*</button>*/}
                <button
                    className={STYLES.editorButton}
                    onClick={clearDrawing}
                    disabled={points.length === 0}
                >
                    Clear
                </button>
                {showSubmit &&
                <button
                    className={STYLES.editorButton}
                    onClick={() => onSubmit(points)}
                    disabled={points.length < 3}
                >
                    Submit
                </button>}
            </div>
        </div>

    );
};

PolygonEditor.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    onFinishedEditing: PropTypes.func,
    showSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
};

export default PolygonEditor;
