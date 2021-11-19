import React, {useState} from "react";
import PropTypes from "prop-types";
import Slider from '@mui/material/Slider';

const PitchDurationSliderInput = () => {

    const updateDurationSlider = (event) => {
        event.preventDefault();
        console.log(event.target.value);

    };

    return(
        <div>
            <Slider
                getAriaLabel={() => 'Duration'}
                value={[100, 300]}
                onChange={updateDurationSlider}
                valueLabelDisplay="auto"
                min={100}
                max={500}
            />
        </div>);
};

// PitchDurationSliderInput.propTypes = {
//     minPitch: PropTypes.string,
//     maxPitch: PropTypes.string,
//     minDuration: PropTypes.string,
//     maxDuration: PropTypes.string,
// };

export default PitchDurationSliderInput;
