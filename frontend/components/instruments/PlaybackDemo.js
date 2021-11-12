import React, {useEffect, useState} from "react";
import SliderInstrument from "./SliderInstrument";
import PadInstrument from "./PadInstrument";
import {fetchPost} from "../../common";
import SoundPoint from "./SoundPoint";
import SpatialInstrument from "./SpatialInstrument";

const PlaybackDemo = () => {
    const [samples, setSamples] = useState([]);
    const [soundPoints, setSoundPoints] = useState([]);

    useEffect(() => {
        setSoundPoints(samples.map((sample, i) => new SoundPoint(20*i, 20*i, sample)));
    }, [samples]);

    useEffect(() => {
        const apiEndpoint = '/api/playback_demo/';
        fetchPost(apiEndpoint, {}, setSamples, false);
    }, []);

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

                <section className="mb-4">
                    <h3>A Bunch of Audio Tags</h3>
                    {samples.map((sample, i) => (
                        <audio key={i}
                            controls="controls"
                            src={`data:audio/wav;base64, ${sample}`}
                            controlsList="nodownload"/>
                    ))}
                </section>

                <section className="mb-4">
                    <h3>Spatial Instrument</h3>
                    <SpatialInstrument soundPoints={soundPoints}/>
                </section>

            </>}
        </>
    );
};

export default PlaybackDemo;
