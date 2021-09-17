import React from "react";
import {debounce} from "../common";
import PropTypes from "prop-types";

const Slider = ({onChangeFunction}) => {
    const updateValue = (event) => {
        onChangeFunction(event.target.value);
    };

    return (
        <>
            <input
                className="mr-2"
                type="range"
                onChange={debounce(updateValue)}
            />
        </>
    );
};


Slider.propTypes = {
    id: PropTypes.number,
    onChangeFunction: PropTypes.func,
};

export default Slider;
