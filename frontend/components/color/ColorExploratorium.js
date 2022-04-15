import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import InstrumentPicker from '../instruments/InstrumentPicker';
import {ALL_DEFAULT_INSTRUMENTS} from "../instruments/InstrumentPicker";

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
    imgAlt: "Painting Starry Night by Van Gogh",
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
    imgAlt: "The Kiss by Klimt",
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

// input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
// https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
function rgb2hsv(color) {
    let {r,g,b} = color;
    let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
    let h= c && ((v===r) ? (g-b)/c : ((v===g) ? 2+(b-r)/c : 4+(r-g)/c));
    return {h: 60*(h<0?h+6:h), s: 100*(v&&c/v), v: 100*v/255};
}

function hex2rgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
}

function rgb2hex(color) {
    let {r,g,b} = color;
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

class PaintingSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.colors = props.data.colors;
        this.img = props.data.img;
        this.imgAlt = props.data.imgAlt;
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
                    <img className="img-fluid h100" alt={this.imgAlt} src={this.img} />
                </div>
                <div className="col">
                    <div className="row"><div className="col">
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
                                includedDefaultInstruments={ALL_DEFAULT_INSTRUMENTS}
                            />}
                    </div></div>
                </div>
            </div>
        );
    }
}

class ColorExploratorium extends React.Component {
    constructor(props) {
        super(props);

        this.handlePaletteClick = this.handlePaletteClick.bind(this);

        // rainbow-ish -- taken from default swatches in the color picker
        const initialColors = [
            {r: 255, g: 0, b: 0},
            {r: 255, g: 159, b: 0},
            {r: 255, g: 231, b: 0},
            {r: 134, g: 255, b: 0},
            {r: 0, g: 116, b: 255},
            {r: 137, g: 0, b: 255},
            {r: 255, g: 0, b: 168},
        ];

        this.state = {
            instrumentSamples: null,
            music: null,
            selected: 0,
            colorPickerColor: initialColors[0],
            listOfColors: initialColors,
        };
    }

    handlePaletteClick = (e) => {
        const index = Number(e.target.id);
        this.setState({
            selected: index,
            colorPickerColor: this.state.listOfColors[index],
        });
    }

    handleChangeComplete = (color) => {
        const currentColorState = [...this.state.listOfColors];
        currentColorState[this.state.selected] = color.rgb;
        this.setState({listOfColors: [...currentColorState], colorPickerColor: color.rgb});
    };

    handleSubmit = async () => {
        let requestBody = {colors: this.state.listOfColors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {
            this.setState({
                instrumentSamples: response.samples,
                music: response.music,
            });
        });
    };

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
                Copy here about the sonification.
            </p>
            <p>
                Each color's:<ul>
                    <li><strong>Hue</strong> is mapped to the pitch of the sound</li>
                    <li><strong>Saturation</strong> is mapped to its loudness</li>
                    <li><strong>Value</strong> to its timbre.</li>
                </ul>
            </p>
            <PaintingSonifier data={STARRY_NIGHT_DATA} />
            <PaintingSonifier data={KISS_DATA} />
            <PaintingSonifier data={STARRY_NIGHT_DATA} />
        </>);
    }
}

export default ColorExploratorium;
