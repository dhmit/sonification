import React, {useCallback, useEffect, useState, useRef} from "react";
import STYLES from "./GesturesToSound.module.scss";
import {base64AudioToDataURI, fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import GesturesToSound from "./GesturesToSound";
import {GESTURE_WAVE, GESTURE_LINES, GESTURE_CORNERS} from "./GesturesData";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";
import {drawGesture, clearCanvas, MiniGestureCanvas, animateAllGestures} from "./GesturesToSound";
import {StudentQuote, GRACE_QUOTE, PEIHUA_QUOTE} from "../../studentQuotes";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";
import ExploratoriumLayout from "../global/ExploratoriumLayout";

const GestureSonifier = ({coords, id, audioContextRef, children}) => {
    const mainCanvasRef = useRef(null);
    const [music, setMusic] = useState(null);
    const [instrumentSamples, setInstrumentSamples] = useState([]);
    const [audioStartCallbacks, setAudioStartCallbacks] = useState([]);
    const [animatingIndex, setAnimatingIndex] = useState(null);
    const [isAnimatingAllGestures, setIsAnimatingAllGestures] = useState(false);

    useEffect(async () => {
        for (const gesture of coords) drawGesture(mainCanvasRef, gesture);

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

            // response.samples.forEach((_, i) => {
            //     const miniCanvas = getRef(getRefIdForExampleMiniCanvas(i, id));
            //     if (!miniCanvas) return;
            //     drawGestureOnMiniCanvas(miniCanvas, coords[i]);
            // });
        });
    }, []);

    const handleMiniCanvasClick = (i) => {
        audioStartCallbacks[i]();
        setAnimatingIndex(i);
    };

    useEffect(() => {
        if (animatingIndex === null) return;

        clearCanvas(mainCanvasRef);
        const allOtherGestures =
            coords.filter((coord, coordIndex) => coordIndex !== animatingIndex);
        for (const gesture of allOtherGestures) drawGesture(mainCanvasRef, gesture);

        const gestureCoords = coords[animatingIndex];

        // TODO(ra): Factor out this and similar code in MiniGestureCanvas
        // once this all settles down.
        let startTime;
        const render = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const timeElapsed = timestamp - startTime;

            clearCanvas(mainCanvasRef);
            for (const gesture of allOtherGestures) drawGesture(mainCanvasRef, gesture);

            const coordsToDraw = gestureCoords.filter(coord => {
                return coord.normalizedT <= timeElapsed;
            });
            if (coordsToDraw.length > 0) {
                drawGesture(mainCanvasRef, coordsToDraw);
            }
            if(timeElapsed < gestureCoords[gestureCoords.length - 1].normalizedT) {
                requestAnimationFrame(render);
            }
        };
        requestAnimationFrame(render);
        setAnimatingIndex(null);
    }, [animatingIndex]);


    useEffect(
        () => animateAllGestures(isAnimatingAllGestures, setIsAnimatingAllGestures, coords, mainCanvasRef),
        [isAnimatingAllGestures]
    );

    return (<>
        <div className="row mb-4 border p-2 py-4">
            <div className="row">
                {children}
            </div>
            <div className="row">
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
                            ? <NiceAudioPlayer
                                src={base64AudioToDataURI(music)}
                                text="Play the full drawing"
                                onPlayCallback={() => setIsAnimatingAllGestures(true)}
                            />
                            : <Loading />
                        }
                    </div>

                    <div>
                        {(instrumentSamples.length > 0) && (<>
                            <p>
                                Click to play each gesture:
                            </p>
                            {instrumentSamples.map((sample, i) =>
                                <MiniGestureCanvas
                                    clickCallback={() => handleMiniCanvasClick(i)}
                                    coords={coords[i]}
                                    key={i}
                                />
                            )}
                        </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
};

const GesturesExploratoriumMain = () => {
    const {audioCtx, compressor} = createAudioContextWithCompressor();
    const audioContextRef = useRef(audioCtx);

    return (<>
        <GestureSonifier coords={GESTURE_WAVE} id={"wave"} audioContextRef={audioContextRef}>
            <p>
                Each of the drawings on this page appear to be two dimensional, but they have a hidden third dimension: time.
            </p>
            <p>
                Click "Play the full drawing" or the individual gesture buttons underneath.
            </p>
        </GestureSonifier>
        <GestureSonifier coords={GESTURE_LINES} id={"wave"} audioContextRef={audioContextRef}>
            <p>
                The qualities of each gesture&mdash;speed, direction, starting and ending positions&mdash;
                are converted into pitch, volume, and tempo.
            </p>
            <p>
                Each of these strokes appears similar, but the speed and direction of each stroke is
                preserved in the sonification.
            </p>
        </GestureSonifier>

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100px" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>
        <GestureSonifier coords={GESTURE_CORNERS} id={"wave"} audioContextRef={audioContextRef}>
            <p>
                TODO: MORE COPY HERE -- probably a better sample gesture, too.
            </p>
        </GestureSonifier>

        <h3>Make Your Own</h3>
        <GesturesToSound audioContextRef={audioContextRef} />
    </>);
};

export const GesturesExploratoriumSidebar = () => {
    return (<>
        <StudentQuote quoteData={PEIHUA_QUOTE} color={"#A5E0EC"}/>
        <StudentQuote quoteData={GRACE_QUOTE} color={"#DAFBB1"}/>
    </>);
};


const GesturesExploratorium = () => <ExploratoriumLayout
    extraClass={"gestures"}
    main={<GesturesExploratoriumMain/>}
    sidebar={
        <GesturesExploratoriumSidebar/>}/>;

export default GesturesExploratorium;
