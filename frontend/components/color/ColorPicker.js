import React, {Component} from "react";
import iro from "@jaames/iro";
import {func} from "prop-types";

class ColorPicker extends Component {
    componentDidMount() {
        // create a new iro color picker and pass component props to it
        this.colorPicker = new iro.ColorPicker(this.el, {
            color: '#03ecfc',
            layoutDirection: 'horizontal',
            layout: [
                {
                    component: iro.ui.Wheel,
                    options: {},
                },
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'hue',
                    },
                },
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'saturation',
                    },
                },
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'value',
                    },
                },
            ],
        });

        this.colorPicker.on(['color:init', 'color:change'], color => {
            if (this.props.onColorChange) {
                this.props.onColorChange(color);
            }
        });
    }

    render() {
        return (
            <div ref={el => (this.el = el)} />
        );
    }
}

ColorPicker.propTypes = {
    onColorChange: func,
};

export default ColorPicker;