import React from "react";
import PropTypes from "prop-types";

const PaletteColor = ({id, color, handlePaletteClick, selected}) => {
    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
        height: "30px",
        width: "100px",
        border: `2px solid ${colorCssRgb}`,
    };

    if (selected) {
        style.border = "2px solid black";
    }

    return (<span className="mr-2">
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
        />
    </span>);
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
