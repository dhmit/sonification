import React, {useCallback, useEffect, useState, useRef} from "react";
import {base64AudioToDataURI, fetchPost} from "../../common";
import Loading from "../global/Loading";
import GesturesToSound from "./GesturesToSound";
import {GESTURE_WAVE, GESTURE_LINES, GESTURE_CORNERS} from "./GesturesData";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";
import {drawGesture, clearCanvas, MiniGestureCanvas, animateAllGestures} from "./GesturesToSound";
import {StudentQuote, GRACE_QUOTE, PEIHUA_QUOTE} from "../../studentQuotes";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";
import ExploratoriumLayout from "../global/ExploratoriumLayout";
import MarkP from "../global/MarkP";

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
            if (timeElapsed < gestureCoords[gestureCoords.length - 1].normalizedT) {
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
        <div className="row mb-4 p-2 py-4">
            <div className="row">
                {children}
            </div>
            <div className="canvas-row">
                <div className="canvas-side">
                    <canvas className="canvas"
                            ref={mainCanvasRef}
                            width="500" height="500"
                    />
                </div>
                <div className="result-side">
                    <div className="mb-4">
                        {music
                            ? <NiceAudioPlayer
                                extraClass={"btn btn-sonification btn-primary"}
                                src={base64AudioToDataURI(music)}
                                text="Play"
                                onPlayCallback={() => setIsAnimatingAllGestures(true)}
                            />
                            : <Loading/>
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
            <MarkP>
                <mark>
                Each of the drawings on this page appear to be two dimensional, but they have a
                hidden third dimension: time.
                </mark>
            </MarkP>
            <MarkP>
                Click "Play" to hear the full drawing, or click any of the individual gestures below.
            </MarkP>
        </GestureSonifier>
        <GestureSonifier coords={GESTURE_LINES} id={"wave"} audioContextRef={audioContextRef}>
            <MarkP>
                The qualities of each gesture&mdash;speed, direction, starting and ending
                positions&mdash;
                are converted into tempo, pitch, and volume.
            </MarkP>
            <MarkP>
                Each of these strokes appears similar, but the speed and direction of each stroke is
                preserved in the sonification, even including pauses taken while drawing.
            </MarkP>
        </GestureSonifier>

        <GestureSonifier coords={GESTURE_CORNERS} id={"wave"} audioContextRef={audioContextRef}>
            <MarkP>
                We recommend trying out some squiggles.
            </MarkP>
        </GestureSonifier>

        <h3><mark>Make Your Own</mark></h3>
        <GesturesToSound audioContextRef={audioContextRef}/>
    </>);
};

export const GesturesExploratoriumSidebar = () => {
    return (<>
        <StudentQuote quoteData={PEIHUA_QUOTE} blob={1} color={"#A5E0EC"}
                      style={{
                          top: "100px",
                          width: "499px",
                          height: "600px",
                          right: "-100px"
                      }}/>
        <StudentQuote quoteData={GRACE_QUOTE} blob={2} color={"#DAFBB1"}/>
    </>);
};


const GesturesExploratorium = () => <ExploratoriumLayout
    extraClass={"gestures"}
    title={"Gestures"}
    main={<GesturesExploratoriumMain/>}
    sidebar={
        <GesturesExploratoriumSidebar/>}/>;

export default GesturesExploratorium;
