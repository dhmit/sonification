import React, {Component} from "react";
import iro from "@jaames/iro";
import {func, string} from "prop-types";

class ColorPicker extends Component {
    componentDidUpdate() {
        if (this.props.initColor !== this.colorPicker.color.hex) {
            this.colorPicker.color.set(this.props.initColor);
        }
    }

    componentDidMount() {
        this.colorPicker = new iro.ColorPicker(this.el, {
            color: this.props.initColor ?? '#03ecfc',
            width: 450,
            layout: [
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
    initColor: string,
};

export default ColorPicker;
