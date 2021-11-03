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

    // keyboard shortcuts
    const keyboardShortcuts = {
        'KeyA': () => setEditorMode(EditorModes.ADD),
        'KeyE': () => setEditorMode(EditorModes.EDIT),
        'KeyD': () => setEditorMode(EditorModes.DELETE),
        'ArrowUp': (e) => handleMovePoint(0, -POINT_MOVEMENT_SPEED, e),
        'ArrowLeft': (e) => handleMovePoint(-POINT_MOVEMENT_SPEED, 0, e),
        'ArrowDown': (e) => handleMovePoint(0, POINT_MOVEMENT_SPEED, e),
        'ArrowRight': (e) => handleMovePoint(POINT_MOVEMENT_SPEED, 0, e),
    };

    const [keyboardMode, setKeyboardMode] = useState(false);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    function handleKeyDown(e) {
        // console.log(e);
        // handle Ctrl+S
        if (e.code === 'KeyS' && e.ctrlKey) {
            e.preventDefault();
            handleSubmit();
            return;
        }

        // handle Ctrl+O
        if (e.code === 'KeyO' && e.ctrlKey) {
            e.preventDefault();
            handleClickUpload();
            return;
        }

        // handle enter/space
        if (e.code === 'Space' || e.code === 'Enter') {
            if (editorMode === EditorModes.EDIT) {
                if (focusPoint !== null) {
                    e.preventDefault();
                    setFocusPoint(null);
                } else if (focusLine !== null) {
                    e.preventDefault();
                    // TODO: split line
                }
            } else if (editorMode === EditorModes.ADD && cursorLocation) {
                addPoint(cursorLocation[0], cursorLocation[1]);
                e.preventDefault();
            }
            return;
        }

        if (keyboardShortcuts[e.code]) {
            setKeyboardMode(true);
            keyboardShortcuts[e.code](e);
        }
    }

    const POINT_MOVEMENT_SPEED = 5;
    function handleMovePoint(dx, dy, event) {
        if (editorMode === EditorModes.EDIT && focusPoint !== null) {
            event.preventDefault();
            const newPoints = points.map((p, i) => (
                i === focusPoint
                    ? [p[0] + dx, p[1] + dy]
                    : p
            ));
            setPoints(newPoints);
        }
    }

    // editor modes and edit handling
    const EditorModes = {
        ADD: 'add',
        EDIT: 'edit',
        DELETE: 'delete',
    };
    const [editorMode, setEditorMode] = useState(EditorModes.ADD);

    function switchEditorMode(addOption, editOption, deleteOption) {
        switch (editorMode) {
            case EditorModes.ADD:
                return addOption;
            case EditorModes.EDIT:
                return editOption;
            case EditorModes.DELETE:
                return deleteOption;
        }
    }

    const [focusPoint, setFocusPoint] = useState(null);
    const [focusLine, setFocusLine] = useState(null);

    function handleChangeEditorMode(newMode) {
        setEditorMode(newMode);
        setFocusPoint(null);
        setFocusLine(null);
    }

    function handleEdit() {
        onEdit();
    }

    // handle setting width/height automatically
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

    // uploading a file
    const fileReader = new FileReader();
    fileReader.onloadstart = () => {
        setLoading(true);
    };
    // parse the file
    fileReader.onloadend = () => {
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

        const usedWidth = svgDisplay.current.clientWidth;
        const usedHeight = svgDisplay.current.clientHeight;

        const xStretch = 0.9 * usedWidth / (maxX - minX);
        const yStretch = 0.9 * usedHeight / (maxY - minY);
        const stretch = Math.min(xStretch, yStretch);

        const scaledPoints = newPoints.map((point) => {
            return [
                stretch * (point[0] - minX) + 0.05 * usedWidth,
                stretch * (point[1] - minY) + 0.05 * usedHeight,
            ];
        });

        setPoints(scaledPoints);
        handleEdit();
        fileUploadRef.current.value = null;
        setLoading(false);
    };
    function handleClickUpload() {
        fileUploadRef.current.click();
    }

    function uploadPolygon(e) {
        const file = e.target.files[0];
        fileReader.readAsText(file);
    }


    // mouse events
    function handleClickLine(index) {
        if (editorMode === EditorModes.EDIT) {

        }
    }

    function handleClickPoint(index) {
        if (editorMode === EditorModes.EDIT) {
            if (focusPoint === index) {
                setFocusPoint(null);
            } else {
                setFocusPoint(index);
            }
        } else if (editorMode === EditorModes.DELETE) {
            const editedPoints = points.filter((v, i) => i !== index);
            handleEdit();
            setPoints(editedPoints);
        }
    }

    function addPoint(x, y) {
        setPoints([...points, [x, y]]);
        handleEdit();
    }

    // add a new point to polygon
    function handleClickSvg(e) {
        if (editorMode === EditorModes.ADD) {
            const rect = svgDisplay.current.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            addPoint(x, y);
        }
    }

    // move the cursor
    function handleMoveSvg(e) {
        setKeyboardMode(false);
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setCursorLocation([x, y]);
        if (editorMode === EditorModes.EDIT && focusPoint !== null) {
            onEdit();
            const editedPoints = points;
            editedPoints[focusPoint][0] = x;
            editedPoints[focusPoint][1] = y;
            setPoints(editedPoints);
        }
    }

    // remove the cursor
    function handleLeaveSvg() {
        setCursorLocation(null);
    }


    // handle editor buttons
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
            svg: "A",
            onClick: () => handleChangeEditorMode(EditorModes.ADD),
            tooltip: "Add new points. Shortcut: z",
            disabled: editorMode === EditorModes.ADD,
        },
        {
            svg: "E",
            onClick: () => handleChangeEditorMode(EditorModes.EDIT),
            tooltip: "Edit points and lines. Shortcut: x",
            disabled: editorMode === EditorModes.EDIT,
        },
        {
            svg: "D",
            onClick: () => handleChangeEditorMode(EditorModes.DELETE),
            tooltip: "Delete points. Shortcut: c",
            disabled: editorMode === EditorModes.DELETE,
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
                className={loading ? STYLES.svgDisplayLoading :
                    ((editorMode === EditorModes.ADD || focusPoint !== null || keyboardMode)
                        ? STYLES.svgDisplayNoCursor : STYLES.svgDisplay)}
                width={internalWidth}
                height={internalHeight}
                onClick={handleClickSvg}
                onMouseMove={handleMoveSvg}
                onMouseEnter={handleMoveSvg}
                onMouseLeave={handleLeaveSvg}
                ref={svgDisplay}
            >
                {cursorLocation && points.length > 0 && editorMode === EditorModes.ADD &&
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
                {(!cursorLocation || editorMode !== EditorModes.ADD) && points.length >= 3 &&
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
                            // r={5}
                            className={i === focusPoint
                                ? switchEditorMode(STYLES.addPoint, STYLES.focusEditPoint, STYLES.deletePoint)
                                : switchEditorMode(STYLES.addPoint, STYLES.editPoint, STYLES.deletePoint)
                            }
                            onClick={() => handleClickPoint(i)}
                        />
                    </React.Fragment>
                ))}
                {cursorLocation && editorMode === EditorModes.ADD &&
                <circle
                    key="point-cursor"
                    cx={cursorLocation[0]}
                    cy={cursorLocation[1]}
                    r={5}
                    className={STYLES.focusAddPoint}
                /> }
                {loading && <circle cx="50%" cy="50%" r={20} className={STYLES.svgLoadingCircle}/>}
            </svg>
            <div className={STYLES.buttonRow}>
                {editorIconButtons.map((button, i) => (
                    <button className={STYLES.editorButton} {...button} key={`editor-icon-${i}`}>
                        {button.svg}
                        <span className={STYLES.editorTooltip}>{button.tooltip}</span>
                    </button>
                ))}
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
