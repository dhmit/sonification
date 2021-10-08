import React from "react";
import { SketchPicker } from 'react-color';

class BasePage extends React.Component {
    state = {
        color: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({color: color.hex });
    };

    render() {
        return (<div>
            <p> Hi </p>
            <SketchPicker
            color={this.state.color}
            onChangeComplete={this.handleChangeComplete}
            />
        </div>);
    }
};

export default BasePage;
