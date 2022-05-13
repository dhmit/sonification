import React, {useRef, useState, useEffect} from "react";
import {fetchPost} from "../../common";
import Loading from "../global/Loading";
import {StudentQuote, MOISES_QUOTE, EESHA_QUOTE} from "../../studentQuotes";
import NiceAudioPlayer from "../instruments/NiceAudioPlayer";
import {base64AudioToDataURI} from "../../common";
import ExploratoriumLayout from "../global/ExploratoriumLayout";
import {createAudioContextWithCompressor} from "../instruments/common";
import {PlayToggleButton} from "../instruments/NiceAudioPlayer";
import {createAudioCallbacks} from "../instruments/SamplePlayer";


const DEFAULT_COLUMN_CONSTANTS = {
    "base_frequency": 220,
    "multiplier": 4,
    "offset": 0,
    "a_percentage": .2,
    "d_percentage": .1,
    "s_percentage": .5,
    "r_percentage": .2,
};

const SUNRISE_SUNSET_BOSTON = {
    title: "Sunrise and Sunset Times in Boston",
    filename: "boston_sunrise_sunset",
    headers: [
        'Sunrise',
        'Sunset',
    ],
    constants: DEFAULT_COLUMN_CONSTANTS,
};

const IRRATIONALS = {
    title: "Irrational Numbers",
    filename: "irrationals_demo",
    headers: [
        'Fibonnaci',
        'Golden Ratio',
        'Pi',
    ],
    constants: DEFAULT_COLUMN_CONSTANTS,
};


const INITIAL_EVERY_N = 1;
const INITIAL_DURATION = .5;


const TimeSeriesSonifier = ({data, audioContextRef, compressorRef}) => {
    const title = data.title;
    const filename = data.filename;
    const headers = data.headers;
    const defaultColumnConstants = data.constants;
    const [playing, setPlaying] = useState(false);
    const [graph, setGraph] = useState();
    const [samples, setSamples] = useState([]);
    const [startCallbacks, setStartCallbacks] = useState([]);
    const [endCallbacks, setEndCallbacks] = useState([]);
    const [unmuteCallbacks, setUnmuteCallbacks] = useState([]);
    const [tracksPlaying, setTracksPlaying] = useState([]);

    useEffect(async () => {
        await fetchPost(
            '/api/time_series_sample_data/',
            {name: filename},
            async (parsedCSV) => {
                // TODO(ra): this is a horrifying mess, but clean it up later
                // Basically we shouldn't do a double round trip
                const newColumnConstants = [];
                parsedCSV[0].forEach(() => newColumnConstants.push({...defaultColumnConstants}));
                let nextFreq = 220;
                for (const constants of newColumnConstants) {
                    constants.base_frequency = nextFreq;
                    nextFreq *= 2;
                }

                const numRows = parsedCSV.length;
                // aim for 30 seconds of audio if too long
                const duration = Math.round(Math.min(30 / numRows, INITIAL_DURATION) * 10) / 10;

                const requestBody = {
                    parsedCSV,
                    duration,
                    everyN: INITIAL_EVERY_N,
                    constants: newColumnConstants,
                };

                await fetchPost('/api/time_series_to_audio/', requestBody, response => {
                    const [startCallbacks, endCallbacks, unmuteCallbacks] =
                        createAudioCallbacks(response.samples, audioContextRef.current);
                    setStartCallbacks(startCallbacks);
                    setEndCallbacks(endCallbacks);
                    setUnmuteCallbacks(unmuteCallbacks);
                    setGraph(response.graph);
                    setSamples(response.samples);
                });
            },
        );
    }, []);

    const toggleAllTracks = () => {
        const newTracksPlaying = [];
        if (playing) {
            endCallbacks.forEach(f => f());
            setPlaying(false);
        } else {
            startCallbacks.forEach((f, i) => {
                newTracksPlaying.push(i);
                f();
            });
            setPlaying(true);
        }
        setTracksPlaying(newTracksPlaying);
    };

    const toggleOneTrack = (i) => {
        // TODO(ra): start global playing with individual track toggles?
        if (!playing) return;

        let newTracksPlaying = [];
        if (tracksPlaying.includes(i)) {
            newTracksPlaying = tracksPlaying.filter(t => t !== i);
            endCallbacks[i]();
        } else {
            newTracksPlaying = [...tracksPlaying, i];
            unmuteCallbacks[i]();
        }
        setTracksPlaying(newTracksPlaying);
    };

    return (
        <div className="row mb-4 border p-2 py-4">
            <div className="col-4">
                {graph && <img
                    src={`data:image/png;base64, ${graph}`}
                    className="img-fluid"
                    alt="A line chart showing the frequencies of the sonified data"
                />}
            </div>
            <div className="col-8">
                <div className="row mb-4">
                    <div className="col w-100">
                        <h4 className="mb-4">{title}</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel est sollicitudin, scelerisque nunc at, dictum orci. Ut ut ultrices ex, in tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultrices neque nec turpis mollis, non ornare lacus ullamcorper. Quisque efficitur tincidunt diam, et porta sapien volutpat a. Ut non tortor orci. Duis fringilla pharetra vulputate. Ut placerat est eget nibh vulputate, quis fermentum nunc euismod. Pellentesque ultricies tincidunt tortor, ac posuere purus posuere dapibus. Vivamus ut mi tortor.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {samples.length > 0
                            ? <>
                                <PlayToggleButton
                                    onClick={toggleAllTracks}
                                    playing={playing}
                                    text="Play all tracks"
                                    extraClass="mb-4"
                                />
                                <p>
                                Toggle each track:
                                </p>
                                {samples.map((sample, i) =>
                                    <button
                                        key={i}
                                        className={
                                            `btn btn-sonification btn-primary audio-player
                                             ${tracksPlaying.includes(i) && "audio-player-on"}`}
                                        onClick={() => toggleOneTrack(i)}
                                    >
                                        {headers[i]}
                                    </button>
                                )}
                            </>

                            : <Loading/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const TimeSeriesExploratoriumMain = () => {
    const audioContextRef = useRef(null);
    const compressorRef = useRef(null);
    if (!audioContextRef.current) {
        const {audioCtx, compressor} = createAudioContextWithCompressor();
        audioContextRef.current = audioCtx;
        compressorRef.current = compressor;
    }

    return (<>
        <TimeSeriesSonifier
            audioContextRef={audioContextRef}
            compressorRef={compressorRef}
            data={SUNRISE_SUNSET_BOSTON}
        />

        <TimeSeriesSonifier
            audioContextRef={audioContextRef}
            compressorRef={compressorRef}
            data={IRRATIONALS}
        />
    </>);
};

export const TimeSeriesExploratoriumSidebar = () => {
    return (<>
        <StudentQuote quoteData={MOISES_QUOTE} blob={2}/>
        <StudentQuote quoteData={EESHA_QUOTE} blob={3}/>
    </>);
};

const TimeSeriesExploratorium = () => <ExploratoriumLayout
    extraClass={"timeSeries"}
    title={"Time Series"}
    main={<TimeSeriesExploratoriumMain/>}
    sidebar={
        <TimeSeriesExploratoriumSidebar/>}/>;


export default TimeSeriesExploratorium;
