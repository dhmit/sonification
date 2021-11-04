import React, {useEffect, useState} from "react";
import SliderInstrument from "./SliderInstrument";
import PadInstrument from "./PadInstrument";
import {fetchPost} from "../../common";

const PlaybackDemo = () => {
    const [samples, setSamples] = useState();

    useEffect(() => {
        const apiEndpoint = '/api/playback_demo/';
        fetchPost(apiEndpoint, {}, setSamples, false);
    }, []);

    console.log(samples);

    return (
        <>
            <h2>Playback Demo Page</h2>
            {samples &&<>

                <section className="mb-4">
                    <h3>Slider Player</h3>
                    <SliderInstrument samples={samples}/>
                </section>

                <section className="mb-4">
                    <h3>Pad Instrument</h3>
                    <PadInstrument samples={samples}/>
                </section>
            </>}
        </>
    );
};

export default PlaybackDemo;
