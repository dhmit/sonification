import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import SoundPoint from "./SoundPoint";

const SpatialInstrument = ({soundPoints}) => {
    return (
        <></>
    );
};

SpatialInstrument.propTypes = {
    soundPoints: PropTypes.arrayOf(SoundPoint),
};

export default SpatialInstrument;
