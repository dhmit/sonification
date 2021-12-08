import React from "react";
import {SketchPicker} from 'react-color';
import {fetchPost} from "../../common";
import PaletteColor from "./PaletteColor";
import InstrumentPicker from "../instruments/InstrumentPicker";

class ColorSonifier extends React.Component {
    constructor(props) {
        super(props);

        this.handlePaletteClick = this.handlePaletteClick.bind(this);

        const NUM_COLORS = 7;

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
            result: [],
            selected: 0,
            instrumentGenerated: false,
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

    handleSubmit = () => {
        const requestBody = {listOfColors: this.state.listOfColors};
        const responseCallbackFunc = responseDict => {
            this.setState({
                result: responseDict,
                instrumentGenerated: true,
            });
        };
        fetchPost('/api/color_to_samples/', requestBody, responseCallbackFunc);
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

        return (<div>
            <h1>Colors</h1>
            <p> Use the color picker below to choose a color, and hit the <b>submit</b> button
                to add up to seven colors to your palette. When you're ready to hear them together,
                click the <b>Generate Instrument</b> button to hear them together!</p>
            <div className="row">
                <SketchPicker
                    color={this.state.colorPickerColor}
                    onChangeComplete={this.handleChangeComplete}
                    disableAlpha
                    className="col-sm"
                />

                <div className="col">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="row">
                                {colorDisplay}
                            </div>
                            <div className="text-right">
                                <button className="btn btn-outline-dark"
                                    onClick={this.handleSubmit}>
                                    {this.state.instrumentGenerated
                                        ? "Update Instrument"
                                        : "Generate Instrument"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {this.state.result.length !== 0 &&
                            <InstrumentPicker samples={this.state.result}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default ColorSonifier;
