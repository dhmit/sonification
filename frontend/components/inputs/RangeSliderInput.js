import React, {useState} from "react";
import PropTypes from "prop-types";
import Slider from '@mui/material/Slider';

const RangeSliderInput = (
    {units, minValue, maxValue, updateValues, step, enabled=true}) => {
    const [sliderValues, setSliderValues] = useState([minValue, maxValue]);


    const updateSlider = (event, newValues) => {
        event.preventDefault();
        setSliderValues(newValues);
        updateValues(newValues);
    };

    return(enabled
        ? <>
            <div className="row">
                <div className="col-2">
                    {`${sliderValues[0]} ${units}`}
                </div>
                <Slider className="col"
                    getAriaLabel={() => 'Duration'}
                    value={sliderValues}
                    onChange={updateSlider}
                    valueLabelDisplay="auto"
                    min={minValue}
                    max={maxValue}
                    step={step}
                />
                <div className="ml-2 col-2">
                    {`${sliderValues[1]} ${units}`}
                </div>
            </div>
        </>
        : <></>);
};

RangeSliderInput.propTypes = {
    units: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    updateValues: PropTypes.func,
    step: PropTypes.number,
    hidden: PropTypes.bool,
};

export default RangeSliderInput;
