import React from "react";
import PropTypes from "prop-types";

const PaletteColor = ({id, color, handlePaletteClick, selected}) => {
    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
        border: `2px solid ${colorCssRgb}`,
    };

    if (selected) {
        style.border = "2px solid black";
    }

    return (<div className="col-3 mb-1">
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
            className="w-100 h-100"
        />
    </div>);
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
