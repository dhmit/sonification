import React from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import GesturesToSound from "./GesturesToSound";
import {GESTURE_WAVE, GESTURE_SQUIGGLES, GESTURE_CORNERS} from "./GesturesData";

class GestureSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.allMouseCoords = props.data;
        this.state = {};
        this.canvasRef = React.createRef();
    }

    drawLine = (coords) => {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.beginPath();
            context.lineWidth = 5;
            context.lineJoin = "round";
            context.lineCap = "round";
            context.globalCompositeOperation = "source-over";
            context.moveTo(coords[0].x, coords[0].y);
            for (let i = 0; i < coords.length - 1; i++) {
                const c = (coords[i].x + coords[i + 1].x) / 2;
                const d = (coords[i].y + coords[i + 1].y) / 2;
                context.quadraticCurveTo(coords[i].x, coords[i].y, c, d);
            }
            context.stroke();
        }
    };
    async componentDidMount() {
        for(const gesture of this.allMouseCoords) this.drawLine(gesture);

        const canvas = this.canvasRef.current;
        const canvasSettings = {
            width: canvas.width,
            height: canvas.height,
        };
        const requestBody = {
            gestures: this.allMouseCoords,
            canvas: canvasSettings,
        };
        await fetchPost('/api/gesture_to_audio/', requestBody, (response) => {
            this.setState({
                music: response.music,
            });
        });
    }

    render() {
        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    <canvas
                        className={STYLES.canvas}
                        ref={this.canvasRef}
                        width="500" height="500"
                    />
                </div>
                <div className="col">
                    {this.state.music
                        ? <audio controls controlsList="nodownload" src={`data:audio/wav;base64,${this.state.music}`} />
                        : <Loading />
                    }
                </div>
            </div>
        );
    }
}

const GesturesExploratorium = () => {
    return (<>
        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Student pull quote goes here.
        </ InfoCard>

        <GestureSonifier data={GESTURE_WAVE} />

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>
        <GestureSonifier data={GESTURE_CORNERS} />
        <GestureSonifier data={GESTURE_SQUIGGLES} />

        <h3>Try it yourself!</h3>
        <GesturesToSound />
    </>);

};

export default GesturesExploratorium;
