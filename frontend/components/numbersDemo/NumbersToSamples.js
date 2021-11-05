import React, {useState} from "react";
import SliderInstrument from "../instruments/SliderInstrument";
import {fetchPost} from "../../common";

const NumbersToSamples = () => {
    const [samples, setSamples] = useState(null);
    const [numberStr, setNumberStr] = useState('');

    const apiEndpoint = '/api/numbers_to_samples/';
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPost(apiEndpoint, {numberStr}, setSamples);
    };

    return (<div className="mb-5">
        <h1>Numbers to Samples</h1>
        <p>
            This component sonifies a bunch of numbers separated by spaces into some samples
            that the user can playback using an instrument.
        </p>
        <p>
            This is for demoing only. Please don't ship me.
        </p>
        <form onSubmit={handleSubmit}>
            <input
                value={numberStr}
                onChange={(e) => setNumberStr(e.target.value)}
            />
            <button type="submit">Generate Instrument</button>
        </form>

        {samples && <SliderInstrument samples={samples} />}
    </div>);
};

export default NumbersToSamples;
