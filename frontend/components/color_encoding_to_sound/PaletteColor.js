import React from "react";
import PropTypes from "prop-types";
import SliderInstrument from "../instruments/SliderInstrument";

class PaletteColor extends React.Component {
    render() {
        const selected = this.props.selected;
        const color = this.props.color;
        const styleString = `background-color: rgb(${color.r},${color.g},${color.b})`;
        const id = this.props.id;
        let style = {
            backgroundColor: `rgb(${color.r},${color.g},${color.b}`,
            height: "15px",
            width: "100px"
        };

        if (selected) {
            style = {
                    backgroundColor: `rgb(${color.r},${color.g},${color.b}`,
                    height: "15px",
                    width: "100px",
                    // borderStyle: "solid",
                    // borderWidth: 1,
                    // borderColor: 'red',
                    boxShadow: "5px 5px 4px gray"};
        }

        return (<div>
                <div
                    id={id}
                    style={style}
                    onClick={this.props.handlePaletteClick}/>
                <br />
        </div>);
    }
}

PaletteColor.propTypes = {
    selected: PropTypes.bool,
    color: PropTypes.object,
    id: PropTypes.number,
    handlePaletteClick: PropTypes.func
};

export default PaletteColor;
