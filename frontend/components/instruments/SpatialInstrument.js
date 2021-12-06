import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import SoundPoint from "./SoundPoint";
import SpatialInstrumentInternal from "./SpatialInstrumentInternal";

const SpatialInstrument = ({samples, width=200, height=200}) => {
    const [soundPoints, setSoundPoints] = useState([]);

    const [radius, setRadius] = useState(80);
    const [offsetX, setOffsetX] = useState(100);
    const [offsetY, setOffsetY] = useState(100);

    function updateSize(w, h) {
        setRadius(.8*Math.min(w/2, h/2));
        setOffsetX(w/2);
        setOffsetY(h/2);

        updateSoundPoints();
    }

    function unityPoint(i, n) {
        return [
            radius * Math.cos(2 * Math.PI * i / n) + offsetX,
            radius * Math.sin(2 * Math.PI * i / n) + offsetY,
        ];
    }

    function updateSoundPoints() {
        setSoundPoints(samples.map(
            (samp, i) => new SoundPoint(...unityPoint(i, samples.length), samp)
        ));
    }

    useEffect(() => {
        updateSoundPoints();
    }, [samples]);

    return <SpatialInstrumentInternal
        soundPoints={soundPoints}
        width={width}
        height={height}
        updateSize={updateSize}
    />;
};

SpatialInstrument.propTypes = {
    samples: PropTypes.array,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SpatialInstrument;
