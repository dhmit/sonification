import React from "react";
import {SketchPicker} from 'react-color';
import {fetchPost} from "../../common";
import SliderInstrument from "../instruments/SliderInstrument";
import PaletteColor from "../color_encoding_to_sound/PaletteColor";

class BasePage extends React.Component {
    constructor(props) {
        super(props);

        this.handlePaletteClick = this.handlePaletteClick.bind(this);
        this.state = {
            result: [],
            selected: 0,
            instrumentGenerated: false,
            colorPickerColor: {
                    r: 51,
                    g: 51,
                    b: 51,
            },
            listOfColors: [
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                },
                {
                    r: 0,
                    g: 0,
                    b: 0,
                }
            ],
        };
    }

    handlePaletteClick = (e) => {
        this.setState({ selected: Number(e.target.id) });
    }

    handleChangeComplete = (color) => {
        const currentColorState = [ ...this.state.listOfColors ];
        currentColorState[this.state.selected] = color.rgb;
        this.setState({ listOfColors: [ ...currentColorState ], colorPickerColor: color.rgb });
    };

    handleSubmit = () => {
        const requestBody = {listOfColors: this.state.listOfColors};
        const responseCallbackFunc = responseDict => {
            this.setState({
                result: responseDict,
                instrumentGenerated: true
            });
            alert("Instrument has been updated!");
        };
        fetchPost('/api/color/', requestBody, responseCallbackFunc);
    };

    render() {
        const colorDisplay = this.state.listOfColors.map( (color, i) =>
            {console.log("i", i);
                console.log("selected", this.state.selected);
                return (<div key={i}>
                    <PaletteColor id={i} color={color} selected={i===Number(this.state.selected)} handlePaletteClick={this.handlePaletteClick}/>
                </div>);
            }
        );
        return (<div>
            <h1> Color Encoding to Sound </h1>
            <p> Use the color picker below to choose a color, and hit the <b>submit</b> button
            to add up to (max) colors to your palette. When you're ready to  hear them together,
            click the <b>Generate Instrument</b> button to hear them together!</p>
            <div className="row">
                <SketchPicker
                    color={this.state.colorPickerColor}
                    onChangeComplete={this.handleChangeComplete}
                    disableAlpha
                    className="col-sm"
                />

                {/*<audio controls controlsList={"nodownload"}>*/}
                {/*        <source src={`data:audio/wav;base64,${this.state.result}`} type={"audio/wav"}/>*/}
                {/*</audio>*/}
                {/*<audio controls="controls"*/}
                {/*       src={`data:audio/wav;base64, ${this.state.result}`}*/}
                {/*       controlsList="nodownload"/>*/}

                <div className="col-sm-2">
                    { colorDisplay }
                    <button onClick={this.handleSubmit}>
                        {this.state.instrumentGenerated ? "Update Instrument" : "Generate Instrument"}
                    </button>
                </div>

                <div className="col-sm">
                    {this.state.result.length !== 0 && <SliderInstrument
                        samples={this.state.result}
                    />}
                </div>
            </div>
        </div>);
    }
};

export default BasePage;
