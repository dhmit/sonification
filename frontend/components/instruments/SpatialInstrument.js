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
            (samp, i) => new SoundPoint(...unityPoint(i, samples.length), samp)
        ));
    }, [samples]);

    return <SpatialInstrumentInternal soundPoints={soundPoints}/>;
};

SpatialInstrument.propTypes = {
    samples: PropTypes.array,
};

export default SpatialInstrument;
