import React from "react";
import {fetchPost} from "../../common";
import {rgb2hsv, hex2rgb, hsv2rgb, freqToHsv, freqToHue} from "./ColorSonifier";
import ColorPadInstrument from "../instruments/ColorPadInstrument";
import Loading from "../global/Loading";
import ColorSonifier from "./ColorSonifier";
import {StudentQuote, EMEKA_QUOTE} from "../../studentQuotes";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";

import MoveIcon from "../../images/MoveIcon.svg";


import MURAKAMI_IMG from "../../images/paintings/murakami.jpg";
const MURAKAMI_COLORS = [
    hex2rgb("#0433BF"),
    hex2rgb("#0442BF"),
    hex2rgb("#0476D9"),
    hex2rgb("#F2E205"),
    hex2rgb("#F2CB05"),
];
const MURAKAMI_DATA = {
    colors: MURAKAMI_COLORS,
    img: MURAKAMI_IMG,
    title: "Takashi Murakami",
};


import JOAN_MITCHELL_IMG from "../../images/paintings/JoanMitchell.jpg";
const JOAN_MITCHELL_COLORS = [
    hex2rgb("#0433BF"),
    hex2rgb("#0442BF"),
    hex2rgb("#0476D9"),
    hex2rgb("#F2E205"),
    hex2rgb("#F2CB05"),
];
const JOAN_MITCHELL_DATA = {
    colors: JOAN_MITCHELL_COLORS,
    img: JOAN_MITCHELL_IMG,
    title: "Joan Mitchell",
};

// TODO(ra): Probably reduce the resolution on this one
import OKEEFFE_IMG from "../../images/paintings/GeorgiaOKeeffe.jpg";
const OKEEFFE_COLORS = [
    hex2rgb("#0433BF"),
    hex2rgb("#0442BF"),
    hex2rgb("#0476D9"),
    hex2rgb("#F2E205"),
    hex2rgb("#F2CB05"),
];
const OKEEFFE_DATA = {
    colors: OKEEFFE_COLORS,
    img: OKEEFFE_IMG,
    title: "Georgia O'Keeffe",
};



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


/*
Using:
https://color.adobe.com/create/image
To create color themes
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

const produceColorsForRatio = (baseFreq, numerator, denominator, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        const freq = baseFreq * ((numerator/denominator) ** i);
        const h = freqToHue(freq);
        result.push(hsv2rgb(h, 1, 1));
    }
    return result;
};

// https://www.kylegann.com/Octave.html
const M3_COLORS = produceColorsForRatio(55, 5, 4, 10);
const FIFTH_COLORS = produceColorsForRatio(55, 3, 2, 6);
const OCTAVE_COLORS = produceColorsForRatio(55, 2, 1, 4);
const OVERTONE_SEMITONE_COLORS = produceColorsForRatio(220, 17, 16, 12);

const DESATURATING_COLORS = [
    hex2rgb("#0000FF"),
    hex2rgb("#3333FF"),
    hex2rgb("#6666FF"),
    hex2rgb("#9A9AFF"),
    hex2rgb("#CDCDFF"),
    hex2rgb("#FFFFFF"),
];

const VALUE_COLORS_BLUE = [
    hex2rgb("4000FF"),
    hex2rgb("3A00E6"),
    hex2rgb("3300CD"),
    hex2rgb("2D00B3"),
    hex2rgb("26009A"),
    hex2rgb("200080"),
];

const VALUE_COLORS_ORANGE = [
    hex2rgb("FF9500"),
    hex2rgb("E68600"),
    hex2rgb("CD7700"),
    hex2rgb("B36900"),
    hex2rgb("9A5A00"),
    hex2rgb("804B00"),
    hex2rgb("663C00"),
    hex2rgb("4D2D00"),
];



class ColorSonifierExplainer extends React.Component {
    constructor(props) {
        super(props);
        this.colors = props.colors;
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
                        {this.props.children}
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
        this.audioContextRef = React.createRef();
        const {audioCtx, compressor} = createAudioContextWithCompressor();
        this.audioContextRef.current = audioCtx;
        this.state = {
            playing: false,
        };
    }

    async componentDidMount() {
        const requestBody = {colors: this.colors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {
            const [startCallbacks, endCallbacks] =
                createAudioCallbacks(response.samples, this.audioContextRef.current, true);

            this.setState({
                instrumentSamples: response.samples,
                music: response.music,
                audioStartCallbacks: startCallbacks,
                audioEndCallbacks: endCallbacks,
            });
        });
    }

    toggleLoops = () => {
        // TODO(ra): visual indicator of playing
        // TODO(ra): Maybe the color pickers should turn on and off loops here
        if (this.state.playing) this.state.audioEndCallbacks.forEach(f => f());
        else this.state.audioStartCallbacks.forEach(f => f());
        this.setState({playing: !this.state.playing});
    }

    render() {
        if (!(this.state.music && this.state.instrumentSamples)) return <Loading />;

        return (
            <div className="row mb-4 border p-2 py-4">
            <h4 className="mb-4">{this.title}</h4>
                <div className="col">
                    <img
                        onClick={this.toggleLoops}
                        className="img-fluid h100"
                        alt={this.title}
                        src={this.img}
                    />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="d-flex flex-column justify-content-between">
                            <ColorPadInstrument
                                samples={this.state.instrumentSamples}
                                colors={this.colors}
                                vertical
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const InfoCard = ({children}) => {
    return (<div className="card mb-4">
        <div className="card-body">
            <div className="row">
                {children}
            </div>
        </div>
    </div>);
};

class ColorExploratorium extends React.Component {
    render() {
        return (<>
            <StudentQuote quoteData={EMEKA_QUOTE} />

            <ColorSonifierExplainer colors={M3_COLORS}>
                <p>
                    Example of ascending pure (5/4) major thirds traversing the hue/pitch space.
                </p>
            </ColorSonifierExplainer>

            <ColorSonifierExplainer colors={FIFTH_COLORS}>
                <p>
                    Example of ascending pure fifths traversing the hue/pitch space.
                </p>
            </ColorSonifierExplainer>

            <ColorSonifierExplainer colors={OCTAVE_COLORS}>
                <p>
                    Example of ascending octaves traversing the hue/pitch space.
                </p>
            </ColorSonifierExplainer>

            <ColorSonifierExplainer colors={OVERTONE_SEMITONE_COLORS}>
                <p>
                    Example of ascending 17/16 semitones traversing the hue/pitch space.
                </p>
            </ColorSonifierExplainer>

            <ColorSonifierExplainer colors={VALUE_COLORS_BLUE}>
                <p>
                    Copy here about how the value maps to timbre. Explain value in HSV.
                    Maybe make a more contrast-y example of the timbre changing.
                </p>
            </ColorSonifierExplainer>

            <ColorSonifier />

            <InfoCard>
                <div className="col-2">
                    <img
                        className="mr-2"
                        alt="Portrait of student"
                        src={MoveIcon} width="100px" height="100%" />
                </div>
                <div className="col-10">
                    Below, we've sonified a few paintings. Click on the painting itself to start or pause a loop representing the
                    colors in the painting. Click the buttons next to the painting to hear the sound of individual colors.
                </div>

            </InfoCard>

            <PaintingSonifier data={MURAKAMI_DATA} />
            <PaintingSonifier data={JOAN_MITCHELL_DATA} />
            <PaintingSonifier data={OKEEFFE_DATA} />
            <PaintingSonifier data={STARRY_NIGHT_DATA} />


        </>);
    }
}

export default ColorExploratorium;
