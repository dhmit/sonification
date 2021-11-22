import React, {useEffect, useState} from "react";
import SliderInstrument from "./SliderInstrument";
import PadInstrument from "./PadInstrument";
import DragPadInstrument from "./DragPadInstrument";
import StepSequencer from "./StepSequencer";
import {fetchPost} from "../../common";

const PlaybackDemo = () => {
    const [samples, setSamples] = useState();

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
                    <h3>Draggable Pad Instrument</h3>
                    <DragPadInstrument samples={samples}/>
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

            </>}
        </>
    );
};

export default PlaybackDemo;
