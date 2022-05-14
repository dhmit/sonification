import React, {useEffect, useState} from "react";
import STYLES from "../instruments/PadInstrument.module.scss";
import PropTypes from "prop-types";

const PaletteColor = ({
    id, color, handlePaletteClick, selected, children,
    keyBind, padClassName, startCallback, endCallback
}) => {

    if (keyBind) keyBind = keyBind.toLowerCase();

    const [keyStatusClass, setKeyStatusClass] = useState('');

    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
    };

    if (selected) {
        style.border = "4px solid black";
    }

    let isPlaying = false;

    const startPlaying = () => {
        if (isPlaying) return;
        isPlaying = true;
        startCallback();
        setKeyStatusClass(STYLES.keypress);
    };

    const stopPlaying = () => {
        if (!isPlaying) return;
        isPlaying = false;
        endCallback();
        setKeyStatusClass('');
    };

    const handleKeyDown = (event) => {
        if (event.key === keyBind) {
            startPlaying();
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === keyBind) {
            stopPlaying();
        }
    };

    useEffect(() => {
        if (!keyBind) return;

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [startCallback, endCallback]);

    return (
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
            className="color-pad mr-2 mb-2"
        >
            {children}
        </button>
    );
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
