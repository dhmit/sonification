import React, {useEffect, useState} from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

/**
 * A polygon viewer using svg graphics with specified width and height. Takes a list of points
 * as input and draws the polygon based on these points. Also auto scales the polygon to
 * fit/fill the svg.
 */
const PolygonViewer = ({rawPoints, width, height, currentTime, timestamps, active}) => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let minX = Number.MAX_VALUE;
        let maxX = -Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxY = -Number.MAX_VALUE;

        rawPoints.forEach(val => {
            minX = Math.min(minX, val[0]);
            maxX = Math.max(maxX, val[0]);
            minY = Math.min(minY, val[1]);
            maxY = Math.max(maxY, val[1]);
        });

        const xStretch = 0.9 * width / (maxX - minX);
        const yStretch = 0.9 * height / (maxY - minY);
        const stretch = Math.min(xStretch, yStretch);
        const newPoints = [];
        rawPoints.forEach(val => {
            newPoints.push([(val[0] - minX) * stretch + .05 * width,
                (val[1] - minY) * stretch + .05 * height]);
        });
        setPoints(newPoints);
    }, [rawPoints]);

    return (
        <svg width={width} height={height}>
            {points && timestamps && timestamps.length===points.length && points.length >= 3 &&
            <line
                key="line-0"
                x1={points[points.length - 1][0]}
                y1={points[points.length - 1][1]}
                x2={points[0][0]}
                y2={points[0][1]}
                className={STYLES.line}
            />}
            {points && timestamps && timestamps.length === points.length &&
            points.map((p, i) => (
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
                        className={
                            active
                                ? (currentTime >= timestamps[i][0] && currentTime <= timestamps[i][1])
                                    ? STYLES.playedPoint
                                    : STYLES.displayPoint
                                : STYLES.inactivePoint
                        }
                    />
                </React.Fragment>
            ))}
        </svg>
    );
};

PolygonViewer.propTypes = {
    rawPoints: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    currentTime: PropTypes.number,
    timestamps: PropTypes.array,
};

export default PolygonViewer;
