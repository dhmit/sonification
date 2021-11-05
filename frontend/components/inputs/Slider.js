import React from "react";
import {debounce} from "../../common";
import PropTypes from "prop-types";

const Slider = ({onChangeFunction, initialValue}) => {
    const updateValue = (event) => {
        onChangeFunction(event.target.value);
    };

    return (
        <input
            className="mr-2"
            type="range"
            onChange={debounce(updateValue)}
            defaultValue={initialValue}
        />
    );
};


Slider.propTypes = {
    onChangeFunction: PropTypes.func,
    initialValue: PropTypes.number,
};

export default Slider;
