import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import InstrumentPicker from '../instruments/InstrumentPicker';
import {ALL_INSTRUMENTS_NO_MUSIC} from "../instruments/InstrumentPicker";
import {rgb2hsv, hex2rgb} from "./ColorSonifier";

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
                        {this.colors.map((color, i) =>
                            <PaletteColor
                                key={i} id={i}
                                color={color}
                                selected={false}
                                handlePaletteClick={undefined}
                            />
                        )}
                    </div></div>
                    <div className="row"><div className="col">
                        {this.state.music && this.state.instrumentSamples &&
                            <InstrumentPicker
                                samples={this.state.instrumentSamples}
                                music={this.state.music}
                                includedDefaultInstruments={ALL_INSTRUMENTS_NO_MUSIC}
                            />}
                    </div></div>
                </div>
            </div>
        );
    }
}

class ColorExploratorium extends React.Component {
    render() {
        return (<>
            <div className="card">
                <div className="card-body">
                    <img
                        className="mr-2"
                        alt="Portrait of student"
                        src={MoveIcon} width="100px" height="100%" />
                    Student pull quote goes here.
                </div>
            </div>

            <p>
                Copy here about the sonification. How does it work?
            </p>
            <PaintingSonifier data={STARRY_NIGHT_DATA} />
            <PaintingSonifier data={KISS_DATA} />
            <PaintingSonifier data={GUITARIST_DATA} />
        </>);
    }
}

export default ColorExploratorium;
