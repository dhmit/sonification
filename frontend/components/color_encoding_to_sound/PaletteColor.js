import React from "react";
import PropTypes from "prop-types";

const PaletteColor = ({id, color, handlePaletteClick, selected}) => {
    const style = {
        backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
        height: "15px",
        width: "100px",
        float: "left",
        border: 0,
    };

    if (selected) {
        style.boxShadow = "5px 5px 4px gray";
    }

    return (<div className="row mb-2"><div className="col">
        <button
            id={id}
            style={style}
            onClick={handlePaletteClick}
        />
    </div></div>);
};
PaletteColor.propTypes = {
    id: PropTypes.number,
    color: PropTypes.object,
    handlePaletteClick: PropTypes.func,
    selected: PropTypes.bool,
};

export default PaletteColor;
