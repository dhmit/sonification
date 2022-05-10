import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {base64AudioToDataURI, fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import {useDynamicRefs} from "../../common";
import MoveIcon from "../../images/MoveIcon.svg";
import GesturesToSound from "./GesturesToSound";
import {GESTURE_WAVE, GESTURE_SQUIGGLES, GESTURE_CORNERS} from "./GesturesData";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";
import {drawGesture, MiniGestureCanvas, drawGestureOnMiniCanvas} from "./GesturesToSound";
import {StudentQuote, GRACE_QUOTE, PEIHUA_QUOTE} from "../../studentQuotes";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";

// NOTE(ra): We have a separate set of names for ref IDs in here to avoid
// collisions with the ones over in GesturesToSound
const getRefIdForExampleMiniCanvas = (i, id) => `exampleMiniCanvasRef${i}-${id}`;

const GestureSonifier = ({coords, id}) => {
    const mainCanvasRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [music, setMusic] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState([]);
    const [getRef, setRef] = useDynamicRefs();
    const [audioStartCallbacks, setAudioStartCallbacks] = useState([]);
    const {audioCtx, compressor} = createAudioContextWithCompressor();
    const audioContextRef = useRef(audioCtx);

    useEffect(async () => {
        for(const gesture of coords) drawGesture(mainCanvasRef, gesture);

        const canvas = mainCanvasRef.current;
        const canvasSettings = {
            width: canvas.width,
            height: canvas.height,
        };
        const requestBody = {
            gestures: coords,
            canvas: canvasSettings,
        };

        await fetchPost('/api/gesture_to_audio/', requestBody, (response) => {
            const [startCallbacks, _] =
                createAudioCallbacks(response.samples, audioContextRef.current);
            setMusic(response.music);
            setInstrumentSamples(response.samples);
            setAudioStartCallbacks(startCallbacks);

            response.samples.forEach((_, i) => {
                const miniCanvas = getRef(getRefIdForExampleMiniCanvas(i, id));
                if (!miniCanvas) return;
                drawGestureOnMiniCanvas(miniCanvas, coords[i]);
            });
        });
    }, []);

    return (
        <div className="row mb-4 border p-2 py-4">
            <div className="col">
                <canvas
                    className={STYLES.canvas}
                    ref={mainCanvasRef}
                    width="500" height="500"
                />
            </div>
            <div className="col">
                <div className="mb-4">
                    {music
                        ? <NiceAudioPlayer src={base64AudioToDataURI(music)} text="Play the full drawing"/>
                        : <Loading />
                    }
                </div>

                <div>
                    {(instrumentSamples.length > 1) && (<>
                        <p>
                            Click to play each gesture:
                        </p>
                        {instrumentSamples.map((sample, i) =>
                            <MiniGestureCanvas
                            audioCallback={audioStartCallbacks[i]}
                            canvasRef={setRef(getRefIdForExampleMiniCanvas(i, id))}
                            key={i}
                            />
                            )}
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

const GesturesExploratorium = () => {
    return (<>
        <StudentQuote quoteData={PEIHUA_QUOTE} />
        <StudentQuote quoteData={GRACE_QUOTE} />

        <GestureSonifier coords={GESTURE_WAVE} id={"wave"}/>

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100px" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>
        <GestureSonifier coords={GESTURE_CORNERS} id={"corners"} />
        <GestureSonifier coords={GESTURE_SQUIGGLES} id={"squiggles"} />

        <h3>Try it yourself!</h3>
        <GesturesToSound />
    </>);
};

export default GesturesExploratorium;
