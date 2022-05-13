import React, {useState, useRef} from "react";
import PolygonViewer from "./PolygonViewer";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import PolygonEditor from "./PolygonEditor";
import {createAudioContextWithCompressor} from "../instruments/common";
import {StudentQuote, ANGELINA_QUOTE, QUINCY_QUOTE} from "../../studentQuotes";
import ExploratoriumLayout from "../global/ExploratoriumLayout";

const DODECADON_DATA = {
    points: [
        [126, 3],
        [74, 3],
        [29, 29],
        [3, 74],
        [3, 126],
        [29, 171],
        [74, 197],
        [126, 197],
        [171, 171],
        [197, 126],
        [197, 74],
        [171, 29],
    ]
};


const SQUARE_DATA = {
    points: [
        [0, 100],
        [100, 100],
        [100, 0],
        [0, 0],
    ],
};

const STARRISH_DATA = {
    points: [
        [169, 438],
        [428, 392],
        [416, 138],
        [608, 405],
        [892, 363],
        [653, 565],
        [735, 794],
        [436, 549],
        [286, 777],
        [329, 489],
    ],
};


const FLOWERISH_DATA = {
    points: [
        [116, 376],
        [398, 436],
        [268, 228],
        [394, 150],
        [416, 427],
        [512, 147],
        [620, 181],
        [428, 435],
        [729, 347],
        [727, 486],
        [433, 448],
        [704, 569],
        [582, 632],
        [428, 472],
        [454, 663],
        [344, 652],
        [392, 467],
        [201, 634],
        [166, 533],
        [356, 466],
        [95, 450],
    ]
};


const OVAL_DATA = {
    points: [[192.6666565, 368.7291565],
        [273.6666565, 266.7291565],
        [402.6666565, 196.7291565],
        [592.6666565, 186.7291565],
        [718.6666565, 223.7291565],
        [866.6666565, 295.7291565],
        [886.6666565, 360.7291565],
        [896.6666565, 434.7291565],
        [868.6666565, 474.7291565],
        [833.6666565, 490.7291565],
        [758.6666565, 512.7291565],
        [700.6666565, 526.7291565],
        [640.6666565, 530.7291565],
        [556.6666565, 532.7291565],
        [462.6666565, 522.7291565],
        [398.6666565, 504.7291565],
        [341.6666565, 485.7291565],
        [305.6666565, 470.7291565],
        [244.6666565, 445.7291565],
        [211.6666565, 423.7291565],
        [198.6666565, 396.7291565],
        [194.6666565, 382.7291565]],
};

const TRIANGLE_DATA = {
    points: [
        [0, 0],
        [0, 100],
        [100, 50],
    ],
};


const EQUILATERAL_TRIANGLE_DATA = {
    points: [
        [100, 0],
        [13, 150],
        [187, 150],
    ],
};

const TEAPOT_DATA = {
    points: [
        [176, 230.875],
        [177, 297.875],
        [214, 333.875],
        [218, 298.875],
        [356, 297.875],
        [460, 229.875],
        [426, 190.875],
        [356, 263.875],
        [353, 156.875],
        [212, 159.875],
    ],
};

class PolygonSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.points = props.data.points;
        this.compressorRef = props.compressorRef;
        this.audioContextRef = props.audioContextRef;
        this.size = props.size ? props.size : 275;

        this.state = {
            music: null,
            currentTime: null,
            playing: false,
        };
        this.audioRef = React.createRef();
        this.activeTimeoutId = null;
        this.mediaElementSource = null;
    }

    async componentDidMount() {
        const requestBody = {
            points: this.points,
            noteLength: 1 / 6,
            noteDelay: 1 / 6,
            baseFrequency: 220,
            floorFrequency: 220,
            ceilFrequency: 880,
            restrictFrequency: false,
            sidesAsDuration: false,
        };

        console.log(this.points);
        await fetchPost('/api/polygon_to_audio', requestBody, (response) => {
            this.setState({
                music: response.musicData.sound,
                timestamps: response.musicData.timestamps,
            });
        });
    }

    toggleAudio() {
        if (this.state.playing) {
            this.audioRef.current.pause();
            clearTimeout(this.activeTimeoutId);
            this.activeTimeoutId = null;
            this.setState({playing: false});
        } else {
            if (!this.mediaElementSource) {
                this.mediaElementSource =
                    this.audioContextRef.current.createMediaElementSource(this.audioRef.current);
                const gainNode = this.audioContextRef.current.createGain();
                gainNode.connect(this.compressorRef.current);
                this.mediaElementSource.connect(gainNode);
            }

            if (this.audioContextRef.current.state !== 'running') {
                this.audioContextRef.current.resume();
            }

            this.audioRef.current.play();
            this.activeTimeoutId = setInterval(
                () => this.setState({currentTime: this.audioRef.current.currentTime}),
                10
            );
            this.setState({playing: true});
        }
    }

    render() {
        if (!this.state.music) return <Loading/>;

        return (
            <button
                onClick={() => this.toggleAudio()}
                className={`
                    btn polygon
                    ${this.state.playing
                    ? 'polygon-playing'
                    : 'polygon-not-playing'
                }
                `}>
                <PolygonViewer
                    width={this.size}
                    height={this.size}
                    rawPoints={this.points}
                    currentTime={this.state.currentTime}
                    timestamps={this.state.timestamps}
                    active={this.state.playing}
                />
                <audio
                    loop
                    controlsList={"nodownload"}
                    ref={this.audioRef}
                    src={`data:audio/wav;base64, ${this.state.music}`}
                />
            </button>
        );
    }
}


const PolygonExplainer = ({polygon, children}) => {
    return (
        <div className="row mb-4">
            <div className="my-auto col-6">
                    {children}
            </div>
            <div className="col-6">
                {polygon}
            </div>
        </div>
    );
};

const PolygonExploratoriumMain = () => {
    const audioContextRef = useRef(null);
    const compressorRef = useRef(null);
    if (!audioContextRef.current) {
        const {audioCtx, compressor} = createAudioContextWithCompressor();
        audioContextRef.current = audioCtx;
        compressorRef.current = compressor;
    }
    const [newPolygonPoints, setNewPolygonPoints] = useState(null);
    const [userPolygons, setUserPolygons] = useState([]);

    const updateNewPolygon = () => {
        const newUserPolygons = userPolygons.slice();
        newUserPolygons.push({points: newPolygonPoints});
        setUserPolygons(newUserPolygons);
    };

    const removeAllPolygons = () => {
        setUserPolygons([]);
    };

    return (<>
        <PolygonExplainer
            polygon={
                <PolygonSonifier
                    size={150}
                    data={STARRISH_DATA}
                    audioContextRef={audioContextRef} compressorRef={compressorRef}/>
            }
        >
            <p>
                This module takes polygons and turns them into arpeggios.
            </p>
            <p>
                Click on any of the polygons on this page to activate or deactivate them!
            </p>
        </PolygonExplainer>

        <PolygonExplainer
            polygon={
                <PolygonSonifier
                    size={150}
                    data={DODECADON_DATA}
                    audioContextRef={audioContextRef} compressorRef={compressorRef}/>
            }
        >
            <p>
                The interval&mdash;that's the musical distance&mdash;between each pitch is based on the ratio between
                the length of each side of the polygon and its total perimeter.
            </p>
            <p>
                This regular dodecagon produces the Western equally-tempered chromatic scale, with
                12 notes spaced at equal intervals.
            </p>
        </PolygonExplainer>

        <PolygonExplainer
            polygon={
                <PolygonSonifier
                    size={150}
                    data={EQUILATERAL_TRIANGLE_DATA}
                    audioContextRef={audioContextRef} compressorRef={compressorRef}/>
            }
        >
            <p>
                Simple shapes can produce relationships that sound familiar: this triangle produces three notes
                that sound like a major chord in Western music. But the exact frequencies here are not the ones
                on a normal piano. Instead, they're based on the pure geometric relationships from the shape itself!
            </p>
        </PolygonExplainer>

        <PolygonExplainer
            polygon={
                <PolygonSonifier
                    size={150}
                    data={TEAPOT_DATA}
                    audioContextRef={audioContextRef} compressorRef={compressorRef}/>
            }
        >
            <p>
                Irregular shapes can produce wild results!
            </p>
        </PolygonExplainer>


        <p>
            We've made a bunch for you to try: see what happens when you play them simultaneously, in counterpoint with each other!
        </p>
        {[SQUARE_DATA, FLOWERISH_DATA, OVAL_DATA, TRIANGLE_DATA, STARRISH_DATA].map((data, i) =>
            <PolygonSonifier
                key={i}
                size={150}
                data={data} audioContextRef={audioContextRef} compressorRef={compressorRef}/>
        )}


        <h2>
        Make your own!
        </h2>
        {/* PolygonEditor queries its container div for height and width */}
        <div className="row">
            <div className="col-6">
                <div style={{height: '540px', width: '100%'}}>
                    <PolygonEditor
                        outerWidth={500}
                        onPointsUpdate={setNewPolygonPoints}
                        onSubmit={updateNewPolygon}
                    />
                </div>
                {userPolygons.length > 0 &&
                <button onClick={removeAllPolygons} className='w-100 btn btn-primary'>
                    Remove all
                </button>
                }
            </div>
            <div className="col-6">
                <div className="row">
                    {userPolygons.length > 0 && <h3 className="mb-4">Click to play or pause</h3>}
                    {userPolygons.map((data, i) =>
                        <div className="col-6 mb-3" key={i}>
                            <div style={{width: "150px"}}>
                                <PolygonSonifier
                                    key={i + 20}
                                    data={data}
                                    audioContextRef={audioContextRef}
                                    compressorRef={compressorRef}
                                    size={150}
                                />

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>);
};

export const PolygonExploratoriumSidebar = () => {
    return <>
        <StudentQuote quoteData={ANGELINA_QUOTE} color={"#A5E0EC"}/>
        <StudentQuote quoteData={QUINCY_QUOTE} color={"#DAFBB1"}/>
    </>;
};

const PolygonExploratorium = () =>
    <ExploratoriumLayout extraClass={"polygons"}
                         title={"Polygons"}
                         main={<PolygonExploratoriumMain/>}
                         sidebar={<PolygonExploratoriumSidebar/>}/>;

export default PolygonExploratorium;
