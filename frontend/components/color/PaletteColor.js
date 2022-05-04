import React, {useEffect, useState} from "react";
import STYLES from "../instruments/PadInstrument.module.scss";
import PropTypes from "prop-types";

const PaletteColor = ({
    id, color, handlePaletteClick, selected, children,
    keyBind, padClassName, startCallback, endCallback
}) => {
    keyBind = keyBind.toLowerCase();

    const [keyStatusClass, setKeyStatusClass] = useState('');

    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
        border: `2px solid ${colorCssRgb}`,
        borderRadius: '20%',
        minWidth: '75px',
        minHeight: '75px',
        textStroke: '1px',
    };

    if (selected) {
        style.border = "2px solid black";
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
            className="mr-2"
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
