import React, {useEffect, useState} from "react";
import SliderInstrument from "./SliderInstrument";
import PadInstrument from "./PadInstrument";
import DragPadInstrument from "./DragPadInstrument";
import StepSequencer from "./StepSequencer";
import {fetchPost} from "../../common";
import SpatialInstrument from "./SpatialInstrument";
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

            {samples && <>
                <section className="mb-4">
                    <h3>Instrument Picker</h3>
                    <InstrumentPicker samples={samples}/>
                </section>

                <section className="mb-4">
                    <h3>Step Sequencer</h3>
                    <StepSequencer samples={samples}/>
                </section>

                <section className="mb-4">
                    <h3>Spatial Instrument</h3>
                    <SpatialInstrument samples={samples}/>
                </section>

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
            </>}
        </>
    );
};

export default PlaybackDemo;
