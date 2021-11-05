import React from "react";
import {SketchPicker} from 'react-color';
import {fetchPost} from "../../common";
import SliderInstrument from "../instruments/SliderInstrument";
import PaletteColor from "./PaletteColor";

class ColorSonifier extends React.Component {
    constructor(props) {
        super(props);

        this.handlePaletteClick = this.handlePaletteClick.bind(this);

        // TODO(ra): can we make a nicer starting palette?
        const NUM_COLORS = 7;
        const initialColors = [];
        for (let i = 0; i < NUM_COLORS; i++) {
            const grey = {r: 125, g: 125, b: 125};
            initialColors.push(grey);
        }

        this.state = {
            result: [],
            selected: 0,
            instrumentGenerated: false,
            colorPickerColor: {r: 51, g: 51, b: 51},
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
            alert("Instrument has been updated!");
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

                <div className="col-sm-2">
                    {colorDisplay}
                    <button onClick={this.handleSubmit}>
                        {this.state.instrumentGenerated
                            ? "Update Instrument"
                            : "Generate Instrument"}
                    </button>
                </div>

                <div className="col-sm">
                    {this.state.result.length !== 0 &&
                    <SliderInstrument samples={this.state.result}/>}
                </div>
            </div>
        </div>);
    }
}
export default ColorSonifier;
