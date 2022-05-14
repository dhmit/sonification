import React from "react";
import {fetchPost} from "../../common";
import {rgb2hsv, hex2rgb, hsv2rgb, freqToHsv, freqToHue} from "./ColorSonifier";
import ColorPadInstrument from "../instruments/ColorPadInstrument";
import Loading from "../global/Loading";
import ColorSonifier from "./ColorSonifier";
import {StudentQuote, EMEKA_QUOTE} from "../../studentQuotes";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import {createAudioContextWithCompressor} from "../instruments/common";
import ExploratoriumLayout from "../global/ExploratoriumLayout";
import PaletteColor from "./PaletteColor";
import MarkP from "../global/MarkP.js";

/*
Using:
https://colordesigner.io/color-palette-from-image
To create color themes
 */

const sortRGBsByHue = (rgbA, rgbB) => rgb2hsv(rgbA).h - rgb2hsv(rgbB).h;
const filterRGBsByValue = (rgbA) => rgb2hsv(rgbA).v > 40;
const filterRGBsBySaturation = (rgbA) => rgb2hsv(rgbA).s > 30;

import MURAKAMI_IMG from "../../images/paintings/murakami.jpg";

const MURAKAMI_COLORS = [
    hex2rgb("#A6B340"),
    hex2rgb("#05ADED"),
    hex2rgb("#7A3E64"),
    hex2rgb("#7299B2"),
    hex2rgb("#EAEAEE"),
    hex2rgb("#B78DB7"),
    hex2rgb("#1B8937"),
    hex2rgb("#ED3576"),
    hex2rgb("#232C4C"),
    hex2rgb("#A6BED3"),
    hex2rgb("#C653BC"),
    hex2rgb("#743414"),
    hex2rgb("#B4C893"),
    hex2rgb("#1664AA"),
    hex2rgb("#CBBCCB"),
    hex2rgb("#D4DDBC"),
    hex2rgb("#208691"),
    hex2rgb("#1A86C6"),
    hex2rgb("#0EA5BD"),
    hex2rgb("#29D4F0"),
].sort(sortRGBsByHue).filter(filterRGBsByValue).filter(filterRGBsBySaturation);
const MURAKAMI_DATA = {
    colors: MURAKAMI_COLORS,
    img: MURAKAMI_IMG,
    title: "Takashi Murakami",
};


import BISA_BUTLER_IMG from "../../images/paintings/BisaButler.jpg";

const BISA_BUTLER_COLORS = [
    hex2rgb("#E2A73F"),
    hex2rgb("#9185AF"),
    hex2rgb("#ACA031"),
    hex2rgb("#07AFBA"),
    hex2rgb("#BB122B"),
    hex2rgb("#363857"),
    hex2rgb("#C0D767"),
    hex2rgb("#787492"),
    hex2rgb("#33515B"),
    hex2rgb("#208149"),
    hex2rgb("#C2C1CD"),
    hex2rgb("#2CABAE"),
    hex2rgb("#84685C"),
    hex2rgb("#CC8B30"),
    hex2rgb("#306983"),
    hex2rgb("#4180AD"),
    hex2rgb("#322B3E"),
    hex2rgb("#5B4045"),
    hex2rgb("#3A734F"),
    hex2rgb("#C22A3E"),
    hex2rgb("#B579A1"),
    hex2rgb("#305156"),
    hex2rgb("#3A375F"),
    hex2rgb("#462C3F"),
    hex2rgb("#CBA17A"),
    hex2rgb("#322321"),
    hex2rgb("#221912"),
    hex2rgb("#112530"),
    hex2rgb("#DDEDEB"),
    hex2rgb("#340B27"),
].sort(sortRGBsByHue).filter(filterRGBsByValue).filter(filterRGBsBySaturation);


const BISA_BUTLER_DATA = {
    colors: BISA_BUTLER_COLORS,
    img: BISA_BUTLER_IMG,
    title: "I Go To Prepare A Place For You by Bisa Butler",
};




// TODO(ra): Probably reduce the resolution on this one
import OKEEFFE_IMG from "../../images/paintings/GeorgiaOKeeffe.jpg";

const OKEEFFE_COLORS = [
    hex2rgb("#9993B8"),
    hex2rgb("#6095B8"),
    hex2rgb("#CCB3B8"),
    hex2rgb("#163433"),
    hex2rgb("#136FA6"),
    hex2rgb("#70337A"),
    hex2rgb("#A4C7D7"),
    hex2rgb("#BB436E"),
    hex2rgb("#076B5F"),
    hex2rgb("#C26F92"),
    hex2rgb("#E9ECD7"),
    hex2rgb("#75AAD4"),
    hex2rgb("#0D7E7B"),
    hex2rgb("#2D9C93"),
    hex2rgb("#9C273E"),
    hex2rgb("#E69177"),
    hex2rgb("#E87B56"),
    hex2rgb("#239548"),
    hex2rgb("#9E5471"),
    hex2rgb("#C7D6E7"),
].sort(sortRGBsByHue).filter(filterRGBsByValue).filter(filterRGBsBySaturation);
const OKEEFFE_DATA = {
    colors: OKEEFFE_COLORS,
    img: OKEEFFE_IMG,
    title: "Georgia O'Keeffe",
};


import STARRY_NIGHT_IMG from "../../images/paintings/starry-night.jpg";

const STARRY_NIGHT_COLORS = [
    hex2rgb("#0433BF"),
    hex2rgb("#0442BF"),
    hex2rgb("#0476D9"),
    hex2rgb("#F2E205"),
    hex2rgb("#F2CB05"),
    hex2rgb("#C4E2D6"),
    hex2rgb("#5ABDD7"),
    hex2rgb("#1D3258"),
    hex2rgb("#3B86BF"),
    hex2rgb("#11151C"),
    hex2rgb("#CEC620"),
    hex2rgb("#132D9C"),
    hex2rgb("#205EAF"),
    hex2rgb("#C1CA75"),
    hex2rgb("#305AE0"),
    hex2rgb("#253CCA"),
    hex2rgb("#60B784"),
    hex2rgb("#74B239"),
    hex2rgb("#5F751F"),
    hex2rgb("#A45424"),
    hex2rgb("#615CB9"),
    hex2rgb("#693A18"),
    hex2rgb("#402CA7"),
    hex2rgb("#25422F"),
    hex2rgb("#190989"),
].sort(sortRGBsByHue).filter(filterRGBsByValue).filter(filterRGBsBySaturation);
const STARRY_NIGHT_DATA = {
    colors: STARRY_NIGHT_COLORS,
    img: STARRY_NIGHT_IMG,
    title: "The Starry Night by Vincent van Gogh",
};

//
//
// const RAINBOW_COLORS = [
//     {r: 255, g: 0, b: 0},
//     {r: 255, g: 159, b: 0},
//     {r: 255, g: 231, b: 0},
//     {r: 134, g: 255, b: 0},
//     {r: 0, g: 116, b: 255},
//     {r: 137, g: 0, b: 255},
//     {r: 255, g: 0, b: 168},
// ];

const produceColorsForRatio = (baseFreq, numerator, denominator, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        const freq = baseFreq * ((numerator / denominator) ** i);
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
const MICROTONE_COLORS = produceColorsForRatio(300, 35, 34, 12);

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
            <div className="row mb-2 py-4">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.state.music && this.state.instrumentSamples &&
                            <ColorPadInstrument
                                samples={this.state.instrumentSamples}
                                colors={this.colors}
                            />
                            }
                        </div>
                    </div>
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
            colorsPlaying: [],
        };
    }

    async componentDidMount() {
        const requestBody = {
            colors: this.colors.map(color => rgb2hsv(color)),
            sineOnly: true,
        };
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


    colorIsActive = (i) => {
        return this.state.colorsPlaying.includes(i);
    }

    toggleColor = (i) => {
        const newColorsPlaying = this.state.colorsPlaying.slice();

        if (this.colorIsActive(i)) {
            const colorIndex = newColorsPlaying.indexOf(i);
            newColorsPlaying.splice(colorIndex, 1);
            this.state.audioEndCallbacks[i]();
        } else {
            newColorsPlaying.push(i);
            this.state.audioStartCallbacks[i]();
        }

        this.setState({colorsPlaying: newColorsPlaying});
    }

    toggleAllColors = () => {




        const colorsPlaying = [];
        if (this.state.colorsPlaying.length === 0) {
            // Start a random chord!
            const numToStartRandomly = 4;
            const startIndices = [];
            while (startIndices.length < numToStartRandomly) {
                const i = Math.floor(Math.random() * this.colors.length);
                if (!startIndices.includes(i)) {
                    startIndices.push(i);
                }
            }

            this.state.audioStartCallbacks.forEach((startCallback, i) => {
                if (startIndices.includes(i)) {
                    startCallback();
                    colorsPlaying.push(i);
                }
            });
        } else {
            // Turn everything that's playing off
            this.state.audioEndCallbacks.forEach((endCallback, i) => {
                if (this.colorIsActive(i)) endCallback();
            });
        }

        this.setState({colorsPlaying});
    }

    render() {
        if (!(this.state.music && this.state.instrumentSamples)) return <Loading/>;

        // TODO(ra): move all of this to CSS after getting out of CSS modules
        const imgStyle = {};
        if (this.state.colorsPlaying.length > 0) imgStyle.border = "2px solid black";

        return (
            <div className="row mb-4 py-4">
                <h3 className="mb-4">{this.title}</h3>
                <div className="col">
                    <img
                        style={imgStyle}
                        onClick={this.toggleAllColors}
                        className="img-fluid h100"
                        alt={this.title}
                        src={this.img}
                    />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="d-flex flex-wrap color-pads">
                            {this.state.instrumentSamples.map((sample, i) =>
                                <PaletteColor
                                    key={i} id={i}
                                    color={this.colors[i]}
                                    selected={this.colorIsActive(i)}
                                    handlePaletteClick={() => this.toggleColor(i)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const InfoCard = ({children}) => {
    return (<div className="card mb-4 mt-5 row">
        <div className="card-body">
            <div className="row">
                {children}
            </div>
        </div>
    </div>);
};

const ColorExploratoriumMain = () => {
    return (<>
        <div className="row">
            <div className="col-9">
                <MarkP>
                    This module takes individual colors and converts them into sounds.
                    Click the color swatches to hear them.
                </MarkP>

                {/*<img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HueScale.svg" />*/}

                <ColorSonifierExplainer colors={M3_COLORS}>
                    <MarkP>
                        Each color's hue is mapped to a pitch in the human hearing range.
                        This series of intervals traverses the entire space of visible colors:
                    </MarkP>
                </ColorSonifierExplainer>

                <ColorSonifierExplainer colors={FIFTH_COLORS}>
                    <MarkP>
                        The further apart the colors are in our visual perception,
                        the wider the distance between the pitches:
                    </MarkP>
                </ColorSonifierExplainer>

                {/*<ColorSonifierExplainer colors={OCTAVE_COLORS}>*/}
                {/*    <p>*/}

                {/*        Example of ascending octaves traversing the hue/pitch space.*/}

                {/*    </p>*/}
                {/*</ColorSonifierExplainer>*/}

                <ColorSonifierExplainer colors={OVERTONE_SEMITONE_COLORS}>
                    <MarkP>
                        These closely spaced colors produce (roughly!) the twelve notes of the Western
                        chromatic scale:
                    </MarkP>
                </ColorSonifierExplainer>

                <ColorSonifierExplainer colors={MICROTONE_COLORS}>
                    <MarkP>
                        Colors even closer together produce notes that cannot be played
                        on a normal piano: the notes here are about twice as dense
                        as the notes on a piano.
                    </MarkP>
                </ColorSonifierExplainer>
            </div>
        </div>

        <ColorSonifier/>

        <InfoCard>
            <h2>The Sound of Paintings</h2>
            <div className='col'>
                <p>
                    Below, we've sonified a few paintings.
                </p>
                <p>
                    Click on the painting itself to start playing a chord picked from the painting's colors.
                </p>
                <p>
                    Click the buttons next to the painting to toggle
                    individual colors on or off.
                </p>
            </div>
        </InfoCard>

        <PaintingSonifier data={OKEEFFE_DATA}/>
        <PaintingSonifier data={MURAKAMI_DATA}/>
        <PaintingSonifier data={BISA_BUTLER_DATA}/>
        <PaintingSonifier data={STARRY_NIGHT_DATA}/>
    </>);
};


export const ColorExploratoriumSidebar = () => {
    return (
        <StudentQuote quoteData={EMEKA_QUOTE} blob={3} style={{top: "-20px", left: "200px"}}/>
    );
};


const ColorExploratorium = () => <ExploratoriumLayout extraClass={"colors"}
                                                      title={"Colors"}
                                                      main={<ColorExploratoriumMain/>}
                                                      sidebar={<ColorExploratoriumSidebar/>}/>;

export default ColorExploratorium;
