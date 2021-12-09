import React from "react";
import PropTypes from "prop-types";

const PaletteColor = ({id, color, handlePaletteClick, selected}) => {
    const colorCssRgb = `rgb(${color.r},${color.g},${color.b})`;
    const style = {
        backgroundColor: colorCssRgb,
        border: `2px solid ${colorCssRgb}`,
        borderRadius: '50%',
        minWidth: '50px',
        minHeight: '50px'
    };

    if (selected) {
        style.border = "2px solid black";
    }

    return (<li className="list-inline-item p-0 ml-1 mb-1">
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
            className=""
        />
    </li>);
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
