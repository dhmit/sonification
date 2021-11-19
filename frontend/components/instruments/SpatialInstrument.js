import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import SoundPoint from "./SoundPoint";
import SpatialInstrumentInternal from "./SpatialInstrumentInternal";

const SpatialInstrument = ({samples}) => {
    const [soundPoints, setSoundPoints] = useState([]);

    function unityPoint(i, n) {
        const r = 80;
        const dx = 100;
        const dy = 100;
        return [
            r * Math.cos(2 * Math.PI * i / n) + dx,
            r * Math.sin(2 * Math.PI * i / n) + dy,
        ];
    }

    // useEffect(() => {
    //     console.log(soundPoints);
    // }, [soundPoints]);

    useEffect(() => {
        setSoundPoints(samples.map(
            (samp, i) => {
                const p1 = unityPoint(i, samples.length);
                const p2 = unityPoint(i + 1, samples.length);
                return new SoundPoint((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, samp);
            }
        ));
    }, [samples]);

    function SvgRender({width, height, x, y}) {
        return (<>
            {samples.map(
                (samp, i) => {
                    const p1 = unityPoint(i, samples.length);
                    const p2 = unityPoint(i + 1, samples.length);
                    return <line
                        style={{strokeWidth: 1, stroke: "black"}}
                        key={`line-${i}`}
                        x1={p1[0]}
                        y1={p1[1]}
                        x2={p2[0]}
                        y2={p2[1]}
                    />;
                }
            )}
        </>);
    }

    return <SpatialInstrumentInternal soundPoints={soundPoints} SvgRender={SvgRender}/>;
};

SpatialInstrument.propTypes = {
    samples: PropTypes.array,
};

export default SpatialInstrument;
