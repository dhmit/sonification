import React from "react";
import { SketchPicker } from 'react-color';

class BasePage extends React.Component {
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({background: color.hex });
    };

    render() {
        return (<div>
            <p> Hi </p>
            <SketchPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
            />
        </div>);
    }
};

export default BasePage;
