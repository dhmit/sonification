import React from "react";
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import ColorPicker from "./ColorPicker";
import ToolTemplate from "../templates/ToolTemplate";

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
            {r: 208, g: 2, b: 27},
            {r: 245, g: 166, b: 35},
            {r: 248, g: 231, b: 28},
            {r: 126, g: 211, b: 31},
            {r: 74, g: 144, b: 226},
            {r: 144, g: 19, b: 254},
            {r: 139, g: 87, b: 42},
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
        this.setState({selected: Number(e.target.id)});
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

        return (
            <ToolTemplate
                title='Colors'
                description={
                    // eslint-disable-next-line max-len
                    <p> Use the color picker below to choose a color, and hit the <b>submit</b> button to add up to seven colors to your palette. When you're ready to hear them together, click the <b>Generate Instrument</b> button to hear them together!</p>
                }
                instrumentSamples={this.state.instrumentSamples}
                music={this.state.music}
                handleSubmit={this.handleSubmit}
                tool={<>
                    <div className='row'>
                        <div className='col'>
                            <ColorPicker 
                                initColor={rgb2hex(this.state.colorPickerColor)}
                                onColorChange={this.handleChangeComplete}                         
                            />
                            <p>
                                <b>H:</b> {Math.round(hsv.h)}&deg;
                                <b> S:</b> {Math.round(hsv.s)}% 
                                <b> V:</b> {Math.round(hsv.v)}%
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            {colorDisplay}
                        </div>
                    </div>
                </>}
            />
        );
    }
}

export default ColorSonifier;
