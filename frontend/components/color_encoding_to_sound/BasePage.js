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
            color: {
                r: 51,
                g: 51,
                b: 51,
            },
            result: [],
            selected: 0,
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
        this.setState({ selected: e.target.id });
    }

    handleChangeComplete = (color) => {
        const currentColorState = [ ...this.state.listOfColors ];
        currentColorState[this.state.selected] = color.rgb;
        this.setState({ listOfColors: [ ...currentColorState ] });
    };

    handleSubmit = () => {
        const requestBody = {color: this.state.color};
        const responseCallbackFunc = responseDict => {
            const tempColor = this.state.color;
            this.setState({
                result: responseDict,
                listOfColors: this.state.listOfColors.concat(tempColor),
            });
            console.log(this.state.listOfColors);
        };
        fetchPost('/api/color/', requestBody, responseCallbackFunc);
    };

    render() {
        const colorDisplay = this.state.listOfColors.map( (color, i) =>
            <div key={i}>
                <PaletteColor id={i} color={color} selected={false} handlePaletteClick={this.handlePaletteClick}/>
            </div>
        );
        return (<div>
            <h1> Color Encoding to Sound </h1>
            <p> Use the color picker below to choose a color, and hit the <b>submit</b> button
            to add up to (max) colors to your palette. When you're ready to  hear them together,
            click the <b>Generate Instrument</b> button to hear them together!</p>
            <SketchPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
            />
            {/*<button onClick={this.handleSubmit}>*/}
            {/*    Submit*/}
            {/*</button>*/}

            {/*<audio controls controlsList={"nodownload"}>*/}
            {/*        <source src={`data:audio/wav;base64,${this.state.result}`} type={"audio/wav"}/>*/}
            {/*</audio>*/}
            {/*<audio controls="controls"*/}
            {/*       src={`data:audio/wav;base64, ${this.state.result}`}*/}
            {/*       controlsList="nodownload"/>*/}

            {/*<SliderInstrument*/}
            {/*    samples={this.state.result}*/}
            {/*/>*/}

            { colorDisplay }
        </div>);
    }
};

export default BasePage;
