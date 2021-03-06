import React, {useState} from "react";
import {fetchPost} from "../../common";

const NumbersToMusic = () => {
    const [audioData, setAudioData] = useState(null);
    const [numberStr, setNumberStr] = useState('');

    const apiEndpoint = '/api/numbers_to_music/';
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPost(apiEndpoint, {numberStr}, setAudioData);
    };

    return (<>
        <h1>Numbers to Audio</h1>
        <p>
            This component sonifies a bunch of numbers separated by spaces into a single
            audio track.
        </p>
        <p>
            This is for demoing only. Please don't ship me.
        </p>
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                value={numberStr}
                onChange={(e) => setNumberStr(e.target.value)}
            />
            <button type="submit">Generate Music</button>
        </form>

        {audioData &&
            <audio
                controls="controls"
                src={`data:audio/wav;base64, ${audioData}`}
            />
        }
    </>);
};

export default NumbersToMusic;
