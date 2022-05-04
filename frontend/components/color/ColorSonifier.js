import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import ColorPicker from "./ColorPicker";
import ToolTemplate from "../templates/ToolTemplate";
import {ALL_DEFAULT_INSTRUMENTS} from "../instruments/InstrumentPicker";
import {createAudioCallbacks} from "../instruments/SamplePlayer";
import Loading from "../global/Loading";

/*********************************************************************************
 * COLOR UTILITIES
 ********************************************************************************/
// input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
// https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
export function rgb2hsv(color) {
    let {r,g,b} = color;
    let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
    let h= c && ((v===r) ? (g-b)/c : ((v===g) ? 2+(b-r)/c : 4+(r-g)/c));
    return {h: 60*(h<0?h+6:h), s: 100*(v&&c/v), v: 100*v/255};
}

function rgb2hex(color) {
    let {r,g,b} = color;
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hex2rgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
}


class ColorSonifier extends React.Component {
    constructor(props) {
        super(props);

        this.audioContextRef = React.createRef();
        this.audioContextRef.current = new AudioContext();
        this.handlePaletteClick = this.handlePaletteClick.bind(this);

        // rainbow-ish -- taken from default swatches in the color picker
        const initialColors = [
            {r: 255, g: 0, b: 0},
            {r: 255, g: 159, b: 0},
            {r: 255, g: 231, b: 0},
            {r: 134, g: 255, b: 0},
            {r: 0, g: 116, b: 255},
            {r: 137, g: 0, b: 255},
        ];

        this.state = {
            instrumentSamples: null,
            music: null,
            startCallbacks: null,
            endCallbacks: null,
            selected: 0,
            loading: null,
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

    handleChangeComplete = async (color) => {
        const currentColor = this.state.listOfColors[this.state.selected];
        if(currentColor.r === color.rgb.r &&
           currentColor.g === color.rgb.g &&
           currentColor.b === color.rgb.b ) return;

        const currentColorState = [...this.state.listOfColors];
        currentColorState[this.state.selected] = color.rgb;

        this.setState({
            listOfColors: [...currentColorState],
            colorPickerColor: color.rgb,
            loading: this.state.selected,
        });

        const requestBody = {color: rgb2hsv(color.rgb)};
        await fetchPost('/api/single_color_to_sample/', requestBody, response => {
            const newSamples = this.state.instrumentSamples.slice();
            newSamples[this.state.selected] = response.sample;

            // TODO(ra): Just update the single start and end callbacks, not everything!
            const [startCallbacks, endCallbacks] =
                createAudioCallbacks(newSamples, this.audioContextRef.current);

            this.setState({
                instrumentSamples: newSamples,
                startCallbacks,
                endCallbacks,
                loading: null,
            });
        });
    };

    async componentDidMount() {
        let requestBody = {colors: this.state.listOfColors.map(color => rgb2hsv(color))};
        await fetchPost('/api/color_to_audio/', requestBody, response => {

            const [startCallbacks, endCallbacks] =
                createAudioCallbacks(response.samples, this.audioContextRef.current);

            this.setState({
                instrumentSamples: response.samples,
                startCallbacks,
                endCallbacks,
            });
        });
    }

    render() {
        if(!(this.state.startCallbacks && this.state.endCallbacks)) return <Loading />;
        const keyMap = ['Q', 'W', 'E', 'R', 'T', 'Y'];
        const hsv = rgb2hsv(this.state.colorPickerColor);
        const toolLayout = (
            <div className='row'>
                <div className='col'>
                    <ColorPicker
                        initColor={rgb2hex(this.state.listOfColors[this.state.selected])}
                        onColorChange={this.handleChangeComplete}
                    />
                    <div className='row mt-2 text-center'>
                        <div className='col mr-1'><b>Hue</b><br/> {Math.round(hsv.h)}&deg;</div>
                        <div className='col mr-1'><b>Saturation</b><br/> {Math.round(hsv.s)}%</div>
                        <div className='col mr-1'><b>Value</b><br/> {Math.round(hsv.v)}%</div>
                    </div>
                </div>
                <div className='col d-flex justify-content-between mt-4 mt-lg-0'>
                    {this.state.listOfColors.map((color, i) =>
                        <div key={i}>
                            <div>
                            </div>
                            <div>
                                <PaletteColor
                                    key={i} id={i}
                                    color={color}
                                    selected={i === Number(this.state.selected)}
                                    handlePaletteClick={this.handlePaletteClick}
                                    keyBind={keyMap[i]}
                                    startCallback={this.state.startCallbacks[i]}
                                    endCallback={this.state.endCallbacks[i]}
                                >
                                    {i === this.state.loading
                                        ? <Loading/>
                                        : <>{keyMap[i]}</>
                                    }
                                </PaletteColor>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );

        return (<>
            <h3>Try it out!</h3>
            <p>
                You can choose up to seven colors below, and use the letters Q-Y on the keyboard
                to play the palette that you've chosen.
            </p>
            <p>
                Each color's:<ul>
                    <li><strong>Hue</strong> is mapped to the pitch of the sound</li>
                    <li><strong>Saturation</strong> is mapped to its loudness</li>
                    <li><strong>Value</strong> to its timbre.</li>
                </ul>
            </p>
            {toolLayout}
        </>);
    }
}

export default ColorSonifier;
