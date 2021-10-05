import React, {useRef, useState} from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

const PolygonEditor = ({width=300, height=300}) => {

    const [points, setPoints] = useState([]);

    const svgDisplay = useRef(null);

    function handleClickSvg(e) {
        e.preventDefault();
        const rect = svgDisplay.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        setPoints([...points, [x, y]]);
    }

    return (
        <svg
            className={STYLES.svgDisplay}
            width={width}
            height={height}
            onClick={handleClickSvg}
            ref={svgDisplay}
        >
            {points.map((p, i) => (
                <React.Fragment key={`fragment-${i}`}>
                    {i < points.length - 1 && <line
                        key={`line-${i}`}
                        x1={points[i][0]}
                        y1={points[i][1]}
                        x2={points[i+1][0]}
                        y2={points[i+1][1]}
                        stroke="black"
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
        </svg>
    );
};

PolygonEditor.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    pointColor: PropTypes.string,
};

export default PolygonEditor;
