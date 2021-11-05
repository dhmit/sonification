import React from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

const HoverTooltip = ({tooltip=""}) => {
    return (
        <div className={STYLES.tooltipDiv + ' ' + STYLES.tooltipContainer}>
            <div>?</div>
            <span className={STYLES.editorTooltipRight}>
                {tooltip}
            </span>
        </div>
    );
};

HoverTooltip.propTypes = {
    tooltip: PropTypes.string,
};

export default HoverTooltip;
