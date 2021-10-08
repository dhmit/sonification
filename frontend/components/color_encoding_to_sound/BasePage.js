import React from "react";
import { SketchPicker } from 'react-color';
import { fetchPost } from "../../common";

class BasePage extends React.Component {
    state = {
        color: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({color: color.hex });
    };

    handleSubmit = () => {
        const requestBody = {color: this.state.color};
        const responseCallbackFunc = responseDict => alert(responseDict.text);
        fetchPost('/api/color/', requestBody, responseCallbackFunc);
    };
Ss
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
        </div>);
    }
};

export default BasePage;
