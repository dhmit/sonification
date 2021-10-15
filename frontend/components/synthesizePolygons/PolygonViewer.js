import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

/**
 * A polygon viewer using svg graphics with specified width and height. Takes a list of points
 * as input and draws the polygon based on these points. Also auto scales the polygon to
 * fit/fill the svg.
 */
const PolygonViewer = ({points, width, height}) => {
    const [pointsText, setPointsText] = useState("");

    useEffect(() => {
        let minX = Number.MAX_VALUE;
        let maxX = -Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxY = -Number.MAX_VALUE;

        points.forEach(val => {
            minX = Math.min(minX, val[0]);
            maxX = Math.max(maxX, val[0]);
            minY = Math.min(minY, val[1]);
            maxY = Math.max(maxY, val[1]);
        });

        let pointsStr = "";
        const xStretch = 0.9 * width / (maxX - minX);
        const yStretch = 0.9 * height / (maxY - minY);
        const stretch = Math.min(xStretch, yStretch);
        points.forEach(val => {
            pointsStr += `${(val[0] - minX) * stretch + .05 * width},` +
                `${(val[1] - minY) * stretch + .05 * height} `;
        });
        setPointsText(pointsStr);
    }, [points]);

    return (
        <svg width={width} height={height}>
            <polygon points={pointsText} fill="none" stroke="black" strokeWidth={3}/>
        </svg>
    );
};

PolygonViewer.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default PolygonViewer;
