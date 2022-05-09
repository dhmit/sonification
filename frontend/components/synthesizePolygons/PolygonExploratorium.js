import React, {useState} from "react";
import PolygonViewer from "./PolygonViewer";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import SynthesizePolygons from "./SynthesizePolygons";

const SQUARE_DATA = {
    points: [[208.6666565,391.7291565], [590.6666565,62.72915649], [962.6666565,400.7291565], [586.6666565,640.7291565]],
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
    points: [[325.6666565, 552.7291565], [572.6666565, 70.72915649], [876.6666565, 558.7291565]],
};

class PolygonSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.points = props.data.points;
        this.state = {
            music: null,
            currentTime: null,
            playing: false,
        };
        this.audioRef = React.createRef();
    }

    async componentDidMount() {
        const requestBody = {
            points: this.points,
            noteLength: 0.75,
            noteDelay: 0.75,
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
            this.setState({playing: false});
        } else {
            this.audioRef.current.play();
            this.setState({playing: true});
        }
    }

    render() {
        // TODO(ra): onTimeUpdate has poor granularity (doesn't guarantee better than 250 ms)
        // so we need to query the audio element's currentTime ourselves in a setInterval loop

        return (
            <div className="row mb-4 border p-2 py-4">
                {this.state.music && <>
                    <div className="col">
                        <PolygonViewer width={300} height={300}
                                       rawPoints={this.points}
                                       currentTime={this.state.currentTime}
                                       timestamps={this.state.timestamps}
                        />
                    </div>
                    <div className="col">
                        <button
                            onClick={() => this.toggleAudio()}
                            className='btn btn-primary'>
                            {this.state.playing
                                ? 'Stop'
                                : 'Start'
                            }
                        </button>
                        <audio
                            loop
                            controlsList={"nodownload"}
                            ref={this.audioRef}
                            onTimeUpdate={() => this.setState({currentTime: this.audioRef.current.currentTime}) }
                            src={`data:audio/wav;base64, ${this.state.music}`}/>
                    </div>
                </>
                }
            </div>
        );
    }
}

const PolygonExploratorium = () => {
    return (<>
        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Student pull quote goes here.
        </ InfoCard>

        <PolygonSonifier data={SQUARE_DATA} />

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>

        <PolygonSonifier data={OVAL_DATA} />
        <PolygonSonifier data={TRIANGLE_DATA} />

        <SynthesizePolygons />
    </>);

};

export default PolygonExploratorium;
