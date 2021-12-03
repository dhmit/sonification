import React, {useState} from "react";
import PropTypes from "prop-types";
import Slider from '@mui/material/Slider';

// updateValues is a function that takes in the value and the slider to be updated
const PitchDurationSliderInput = (
    {minPitch, maxPitch, minDuration, maxDuration, updateValues}) => {
    const [durationValues, setDurationValues] = useState([minDuration, maxDuration]);
    const [pitchValues, setPitchValues] = useState([minPitch, maxPitch]);


    const updateDurationSlider = (event, newValues) => {
        event.preventDefault();
        setDurationValues(newValues);
        updateValues(newValues, "duration");
    };

    const updatePitchSlider= (event, newValues) => {
        event.preventDefault();
        setPitchValues(newValues);
        updateValues(newValues, "pitch");
    };

    return(
        <>
            <b>Duration</b>
            <div className="row">
                <div className="col-2">
                    {durationValues[0]} secs
                </div>
                <Slider className="col"
                    getAriaLabel={() => 'Duration'}
                    value={durationValues}
                    onChange={updateDurationSlider}
                    valueLabelDisplay="auto"
                    min={minDuration}
                    max={maxDuration}
                    step={0.01}
                />
                <div className="col-2">
                    {durationValues[1]} secs
                </div>
            </div>
            <b>Pitch</b>
            <div className="row">
                <div className="col-2">
                    {pitchValues[0]} Hz
                </div>
                <Slider className="col"
                    getAriaLabel={() => 'Duration'}
                    value={pitchValues}
                    onChange={updatePitchSlider}
                    valueLabelDisplay="auto"
                    min={minPitch}
                    max={maxPitch}

                />
                <div className="col-2">
                    {pitchValues[1]} Hz
                </div>
            </div>
        </>);
};

PitchDurationSliderInput.propTypes = {
    minPitch: PropTypes.number,
    maxPitch: PropTypes.number,
    minDuration: PropTypes.number,
    maxDuration: PropTypes.number,
    updateValues: PropTypes.func,
};

export default PitchDurationSliderInput;
