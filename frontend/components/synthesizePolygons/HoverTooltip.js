import React from "react";
import STYLES from "./PolygonEditor.module.scss";
import PropTypes from "prop-types";

const HoverTooltip = ({tooltip, tooltipLeft}) => {
    return (
        <div className={STYLES.tooltipDiv + ' ' + STYLES.tooltipContainer}>
            <div>?</div>
            <span className={tooltipLeft ? STYLES.editorTooltipLeft : STYLES.editorTooltip}>
                {tooltip}
            </span>
        </div>
    );
};

HoverTooltip.propTypes = {
    tooltip: PropTypes.string,
    tooltipLeft: PropTypes.bool,
};

export default HoverTooltip;
