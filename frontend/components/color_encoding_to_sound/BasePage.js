import React from "react";
import {SketchPicker} from 'react-color';
import {fetchPost} from "../../common";
import SliderInstrument from "../instruments/SliderInstrument";
import PaletteColor from "../color_encoding_to_sound/PaletteColor";

class BasePage extends React.Component {
    state = {
        color: {
            r: 51,
            g: 51,
            b: 51,
        },
        result: [],
        listOfColors: [],
    };

    handleChangeComplete = (color) => {
        this.setState({color: color.rgb});
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
                <PaletteColor id={i} color={color} selected={false} />
            </div>
        );
        return (<div>
            <SketchPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
            />
            <button onClick={this.handleSubmit}>
                Submit
            </button>

            {/*<audio controls controlsList={"nodownload"}>*/}
            {/*        <source src={`data:audio/wav;base64,${this.state.result}`} type={"audio/wav"}/>*/}
            {/*</audio>*/}
            {/*<audio controls="controls"*/}
            {/*       src={`data:audio/wav;base64, ${this.state.result}`}*/}
            {/*       controlsList="nodownload"/>*/}

            <SliderInstrument
                samples={this.state.result}
            />

            { colorDisplay }
        </div>);
    }
};

export default BasePage;
