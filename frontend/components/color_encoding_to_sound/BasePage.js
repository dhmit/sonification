import React from "react";
import { SketchPicker } from 'react-color';
import { fetchPost } from "../../common";

class BasePage extends React.Component {
    state = {
        color: {
            r: 51,
            g: 51,
            b: 51
        },
        result: "",
    };

    handleChangeComplete = (color) => {
        this.setState({color: color.rgb });
    };

    handleSubmit = () => {
        const requestBody = {color: this.state.color};
        const responseCallbackFunc = responseDict => {
                this.setState({result: responseDict});
                console.log(responseDict);
        };
        fetchPost('/api/color/', requestBody, responseCallbackFunc);
    };

    render() {
        return (<div>
            <p>Hi</p>
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
            <audio controls="controls"
                   src={`data:audio/wav;base64, ${this.state.result}`}
                   controlsList="nodownload"/>
        </div>);
    }
};

export default BasePage;
