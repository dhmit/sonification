import React from "react";
import PropTypes from "prop-types";

const PaletteColor = ({id, color, handlePaletteClick, selected}) => {
    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
        border: `2px solid ${colorCssRgb}`,
        borderRadius: '20%',
        minWidth: '75px',
        minHeight: '75px',
    };

    if (selected) {
        style.border = "2px solid black";
    }

    return (
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
            className="mr-2"
        />
    );
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
