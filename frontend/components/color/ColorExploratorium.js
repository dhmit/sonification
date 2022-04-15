import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import {rgb2hsv, hex2rgb} from "./ColorSonifier";
import ColorPadInstrument from "../instruments/ColorPadInstrument";

import MoveIcon from "../../images/MoveIcon.svg";

import STARRY_NIGHT_IMG from "./paintings/starry-night.jpg";
const STARRY_NIGHT_COLORS = [
    hex2rgb("#0433BF"),
    hex2rgb("#0442BF"),
    hex2rgb("#0476D9"),
    hex2rgb("#F2E205"),
    hex2rgb("#F2CB05"),
];
const STARRY_NIGHT_DATA = {
    colors: STARRY_NIGHT_COLORS,
    img: STARRY_NIGHT_IMG,
    title: "The Starry Night by Vincent van Gogh",
};


import KISS_IMG from "./paintings/kiss.jpg";
const KISS_COLORS = [
    hex2rgb("#F2CB05"),
    hex2rgb("#82B4A1"),
    hex2rgb("#B73A41"),
    hex2rgb("#733702"),
    hex2rgb("#D767C2"),
];
const KISS_DATA = {
    colors: KISS_COLORS,
    img: KISS_IMG,
    title: "The Kiss by Gustav Klimt",
};


import GUITARIST_IMG from "./paintings/guitarist.jpg";
const GUITARIST_COLORS = [
    hex2rgb("#314259"),
    hex2rgb("#64818C"),
    hex2rgb("#222621"),
    hex2rgb("#A68C5B"),
    hex2rgb("#735439"),
];
const GUITARIST_DATA = {
    colors: GUITARIST_COLORS,
    img: GUITARIST_IMG,
    title: "The Old Guitarist by Pablo Picasso",
};

/*
Using:
https://color.adobe.com/create/image

To create color themes

monet water lillies
van gogh sunflowers
matisse
Marc Chagall

 */

const RAINBOW_COLORS = [
    {r: 255, g: 0, b: 0},
    {r: 255, g: 159, b: 0},
    {r: 255, g: 231, b: 0},
    {r: 134, g: 255, b: 0},
    {r: 0, g: 116, b: 255},
    {r: 137, g: 0, b: 255},
    {r: 255, g: 0, b: 168},
];

const DESATURATING_COLORS = [
    hex2rgb("#0000FF"),
    hex2rgb("#3333FF"),
    hex2rgb("#6666FF"),
    hex2rgb("#9A9AFF"),
    hex2rgb("#CDCDFF"),
    hex2rgb("#FFFFFF"),
];

class ColorSonifierExplainer extends React.Component {
    constructor(props) {
        super(props);
        this.colors = props.colors;
        this.body = props.body;
        this.state = {};
    }

    async componentDidMount() {
        const requestBody = {colors: this.colors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {
            this.setState({
                instrumentSamples: response.samples,
                music: response.music,
            });
        });
    }

    render() {
        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    <div className="row mb-3"><div className="col">
                        {this.state.music && this.state.instrumentSamples &&
                            <ColorPadInstrument
                                samples={this.state.instrumentSamples}
                                colors={this.colors}
                            />
                        }
                    </div></div>
                    <div className="row"><div className="col">
                        <p>
                            Copy about how the hue maps to the pitch?
                        </p>
                        <p>
                            Hue diagram?
                        </p>
                    </div></div>
                </div>
            </div>
        );
    }
}


class PaintingSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.colors = props.data.colors;
        this.img = props.data.img;
        this.title = props.data.title;
        this.state = {};
    }

    async componentDidMount() {
        const requestBody = {colors: this.colors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {
            this.setState({
                instrumentSamples: response.samples,
                music: response.music,
            });
        });
    }

    render() {
        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    <img className="img-fluid h100" alt={this.title} src={this.img} />
                </div>
                <div className="col">
                    <div className="row mb-4"><div className="col w-100">
                        <h4 className="mb-4">{this.title}</h4>
                    </div></div>
                    <div className="row"><div className="col">
                        {this.state.music && this.state.instrumentSamples &&
                            <ColorPadInstrument
                                samples={this.state.instrumentSamples}
                                colors={this.colors}
                            />
                        }
                    </div></div>
                </div>
            </div>
        );
    }
}

const InfoCard = ({children}) => {
    return (<div className="card mb-4">
        <div className="card-body">
            {children}
        </div>
    </div>);
};

class ColorExploratorium extends React.Component {
    render() {
        return (<>
            <InfoCard>
                <img
                    className="mr-2"
                    alt="Portrait of student"
                    src={MoveIcon} width="100px" height="100%" />
                Student pull quote goes here.
            </ InfoCard>

            <PaintingSonifier data={STARRY_NIGHT_DATA} />

            <ColorSonifierExplainer colors={RAINBOW_COLORS} />

            <PaintingSonifier data={KISS_DATA} />

            <InfoCard>
                <img
                    className="mr-2"
                    alt="Portrait of student"
                    src={MoveIcon} width="100px" height="100%" />
                Could put more copy here about the sonification. How does it work?
            </InfoCard>

            <PaintingSonifier data={GUITARIST_DATA} />

            <InfoCard>
                <img
                    className="mr-2"
                    alt="Portrait of student"
                    src={MoveIcon} width="100px" height="100%" />
                Could put more copy here about the sonification. How does it work?
            </InfoCard>
        </>);
    }
}

export default ColorExploratorium;
