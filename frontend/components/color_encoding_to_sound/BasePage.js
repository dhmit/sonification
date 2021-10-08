import React from "react";
import { SketchPicker } from 'react-color';
import {getCookie} from "../../common";

class BasePage extends React.Component {
    state = {
        color: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({color: color.hex });
    };

    handleSubmit = () => {
        const csrftoken = getCookie("csrftoken");
        console.log(this.state.color);
        const requestBody = {
            color: this.state.color,
        };
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify(requestBody),
        };
        fetch('/api/color/', requestOptions)
            .then(response => response.json())
            .then(responseDict => alert(responseDict.text));
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
