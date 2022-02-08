import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import ColorPicker from "./ColorPicker";
import ToolTemplate from "../templates/ToolTemplate";
import {ALL_DEFAULT_INSTRUMENTS} from "../instruments/InstrumentPicker";

// input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
// https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
function rgb2hsv(color) {
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

class ColorSonifier extends React.Component {
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
        const colorDisplay = this.state.listOfColors.map((color, i) =>
            <PaletteColor
                key={i} id={i}
                color={color}
                selected={i === Number(this.state.selected)}
                handlePaletteClick={this.handlePaletteClick}
            />
        );

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
                    {colorDisplay}
                </div>
            </div>
        );

        return (
            <ToolTemplate
                title='Colors'
                description={<>
                    <p>
                        Choose up to seven colors below, then click Sonify! at the bottom of the
                        page to hear your palette.
                    </p>
                    <p>
                        Each color's:<ul>
                            <li><strong>Hue</strong> is mapped to the pitch of the sound</li>
                            <li><strong>Saturation</strong> is mapped to its loudness</li>
                            <li><strong>Value</strong> to its timbre.</li>
                        </ul>
                    </p>
                </>}
                instrumentSamples={this.state.instrumentSamples}
                music={this.state.music}
                handleSubmit={this.handleSubmit}
                instrumentPickerProps={{
                    includedDefaultInstruments: ALL_DEFAULT_INSTRUMENTS,
                }}
                tool={toolLayout}
            />
        );
    }
}

export default ColorSonifier;
