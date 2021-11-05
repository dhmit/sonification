import React, {useState} from "react";
import PropTypes from "prop-types";

import {fetchPost} from "../../common";
import SliderInstrument from "../instruments/SliderInstrument";
import NumbersToSamples from "./NumbersToSamples";
import NumbersToAudio from "./NumbersToAudio";

export const NumbersDemoBefore = () => {
    return <>
        <NumbersToSamples />
        <NumbersToAudio />
    </>;
};


const NumbersInput = ({handleSubmitAudio, handleSubmitInstrument}) => {
    const [numberStr, setNumberStr] = useState('');
    return (
        <form>
            <input
                value={numberStr}
                onChange={(e) => setNumberStr(e.target.value)}
            />
            <button onClick={(e) => handleSubmitAudio(e, numberStr)}>
                Generate Audio
            </button>
            <button onClick={(e) => handleSubmitInstrument(e, numberStr)}>
                Generate Instrument
            </button>
        </form>
    );
};
NumbersInput.propTypes = {
    handleSubmitAudio: PropTypes.func,
    handleSubmitInstrument: PropTypes.func,
};

export const NumbersDemoAfter = () => {
    const [samples, setSamples] = useState(null);
    const [audio, setAudio] = useState(null);

    const handleSubmitAudio = (e, numberStr) => {
        e.preventDefault();
        const apiEndpoint = '/api/numbers_to_audio/';
        const callback = (data) => {
            setAudio(data);
            setSamples(null);
        };
        fetchPost(apiEndpoint, {numberStr}, callback);
    };

    const handleSubmitInstrument = (e, numberStr) => {
        e.preventDefault();
        const callback = (data) => {
            setAudio(null);
            setSamples(data);
        };
        const apiEndpoint = '/api/numbers_to_samples/';
        fetchPost(apiEndpoint, {numberStr}, callback);
    };

    return <div>
        <div className="mb-2">
            <h1>Numbers to Samples</h1>
            <p>
                This component sonifies a bunch of numbers separated by spaces and can either
                generate its own audio track or samples that you can play or download.
            </p>
            <p>
                This is for demoing only. Please don't ship me.
            </p>

            <NumbersInput
                handleSubmitAudio={handleSubmitAudio}
                handleSubmitInstrument={handleSubmitInstrument}
            />
        </div>

        {audio &&
            <audio
                controls="controls"
                src={`data:audio/wav;base64, ${audio}`}
            />
        }
        {samples && <SliderInstrument samples={samples} />}

    </div>;

};


