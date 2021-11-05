import React, {useState} from "react";
import SliderInstrument from "../instruments/SliderInstrument";
import {fetchPost} from "../../common";

export const NumbersDemoBefore = () => {
    return <>
        <NumbersToSamples />
        <NumbersToAudio />
    </>;
};

export const NumbersDemoAfter = () => {
    return <>
        <NumbersToSamples />
        <NumbersToAudio />
    </>;
};

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
            This component sonifies a bunch of numbers separated by spaces.
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

const NumbersToAudio = () => {
    const [audioData, setAudioData] = useState(null);
    const [numberStr, setNumberStr] = useState('');

    const apiEndpoint = '/api/numbers_to_audio/';
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPost(apiEndpoint, {numberStr}, setAudioData);
    };

    return (<>
        <h1>Numbers to Audio</h1>
        <p>
            This component sonifies a bunch of numbers separated by spaces.
        </p>
        <p>
            This is for demoing only. Please don't ship me.
        </p>
        <form onSubmit={handleSubmit}>
            <input
                value={numberStr}
                onChange={(e) => setNumberStr(e.target.value)}
            />
            <button type="submit">Generate Audio</button>
        </form>

        {audioData &&
            <audio
                controls="controls"
                src={`data:audio/wav;base64, ${audioData}`}
            />
        }
    </>);
};
