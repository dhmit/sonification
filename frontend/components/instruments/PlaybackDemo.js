import React, {useEffect, useState} from "react";
import {fetchPost} from "../../common";
import InstrumentPicker from "./InstrumentPicker";

const PlaybackDemo = () => {
    const [samples, setSamples] = useState([]);

    useEffect(() => {
        const apiEndpoint = '/api/playback_demo/';
        fetchPost(apiEndpoint, {}, setSamples, false);
    }, []);

    return (
        <>
            <h2>Playback Demo Page</h2>
            {samples && <InstrumentPicker samples={samples}/>}
        </>
    );
};

export default PlaybackDemo;
