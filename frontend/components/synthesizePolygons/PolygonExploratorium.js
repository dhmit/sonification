import React, {useState, useRef} from "react";
import PolygonViewer from "./PolygonViewer";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import PolygonEditor from "./PolygonEditor";
import {createAudioContextWithCompressor} from "../instruments/common";


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
        [116,376],
        [398,436],
        [268,228],
        [394,150],
        [416,427],
        [512,147],
        [620,181],
        [428,435],
        [729,347],
        [727,486],
        [433,448],
        [704,569],
        [582,632],
        [428,472],
        [454,663],
        [344,652],
        [392,467],
        [201,634],
        [166,533],
        [356,466],
        [95,450],
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

class PolygonSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.points = props.data.points;
        this.compressor = props.compressor;
        this.audioContextRef = props.audioContextRef;
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
            noteLength: 1/6,
            noteDelay: 1/6,
            baseFrequency: 220,
            floorFrequency: 220,
            ceilFrequency: 880,
            restrictFrequency: false,
            sidesAsDuration: false,
        };

        await fetchPost('/api/polygon_to_audio', requestBody, (response) => {
            this.setState({
                music: response.musicData.sound,
                timestamps: response.musicData.timestamps,
            });
        });
    }

    toggleAudio() {
        if(this.state.playing) {
            this.audioRef.current.pause();
            clearTimeout(this.activeTimeoutId);
            this.activeTimeoutId = null;
            this.setState({playing: false});
        } else {
            if(!this.mediaElementSource) {
                this.mediaElementSource =
                    this.audioContextRef.current.createMediaElementSource(this.audioRef.current);
                const gainNode = this.audioContextRef.current.createGain();
                gainNode.connect(this.compressor);
                this.mediaElementSource.connect(gainNode);
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
        if (!this.state.music) return <Loading />;

        return (
            <div
                onClick={() => this.toggleAudio()}
                className={`
                    btn
                    ${this.state.playing
                        ? 'btn-outline-primary'
                        : 'btn-outline-secondary'
                    }
                    col-4 mb-4`}
            >
                <PolygonViewer
                    width={275}
                    height={275}
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
            </div>
        );
    }
}

const PolygonExploratorium = () => {
    const {audioCtx, compressor} = createAudioContextWithCompressor();
    const audioContextRef = useRef(audioCtx);
    const [newPolygonPoints, setNewPolygonPoints] = useState(null);
    const [userPolygons, setUserPolygons] = useState([]);

    return (<>
        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Student pull quote goes here.
        </ InfoCard>

        {[SQUARE_DATA, FLOWERISH_DATA, OVAL_DATA, TRIANGLE_DATA, STARRISH_DATA].map((data, i) =>
            <PolygonSonifier
                key={i}
                data={data} audioContextRef={audioContextRef} compressor={compressor} />
        )}

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>


        {/* PolygonEditor queries its container div for height and width */}
        <div style={{height: '500px', width: '500px'}}>
            <PolygonEditor
                outerWidth={500}
                onPointsUpdate={setNewPolygonPoints}
                onEdit={() => {}}
            />
        </div>
        <button
            onClick={() => {
                const newUserPolygons = userPolygons.slice();
                newUserPolygons.push({points: newPolygonPoints});
                setUserPolygons(newUserPolygons);
            }}
        >
            Add
        </button>
        {userPolygons.map((data, i) =>
            <PolygonSonifier
                key={i+20}
                data={data} audioContextRef={audioContextRef} compressor={compressor} />
        )}


    </>);

};

export default PolygonExploratorium;
