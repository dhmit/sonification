import React, {useState} from "react";
import PropTypes from "prop-types";
import Slider from '@mui/material/Slider';

const PitchDurationSliderInput = ({minPitch, maxPitch, minDuration, maxDuration}) => {
    const [durationValues, setDurationValues] = useState([minDuration, maxDuration]);
    const [pitchValues, setPitchValues] = useState([minPitch, maxPitch]);


    const updateDurationSlider = (event, newValues) => {
        event.preventDefault();
        setDurationValues(newValues);
    };

    const updatePitchSlider= (event, newValues) => {
        event.preventDefault();
        setPitchValues(newValues);
    };

    return(
        <>
            <div>
                <Slider
                    getAriaLabel={() => 'Duration'}
                    value={durationValues}
                    onChange={updateDurationSlider}
                    valueLabelDisplay="auto"
                    min={minDuration}
                    max={maxDuration}
                    step={0.01}
                />
             </div>
            <div>
                <Slider
                    getAriaLabel={() => 'Duration'}
                    value={pitchValues}
                    onChange={updatePitchSlider}
                    valueLabelDisplay="auto"
                    min={minPitch}
                    max={maxPitch}
                />
            </div>
        </>);
};

PitchDurationSliderInput.propTypes = {
    minPitch: PropTypes.number,
    maxPitch: PropTypes.number,
    minDuration: PropTypes.number,
    maxDuration: PropTypes.number,
};

export default PitchDurationSliderInput;
