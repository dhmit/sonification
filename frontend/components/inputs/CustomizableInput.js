import React from "react";
import PropTypes from "prop-types";
import STYLES from "./CustomizableInput.module.scss";
import ReactTooltipDefaultExport from 'react-tooltip';

/**
 * A customizable input component. Consists of a wrapper div, a display description, and an
 * input component.
 */
const CustomizableInput = (
    {
        type,
        name,
        display,
        getValue, setValue,
        enabled=true,
        options=[],
        onEdit=()=>{},
        tooltip,
        ...rest
    }
) => {

    function handleChange(e) {
        setValue(e.target.value);
        onEdit();
    }

    return (
        <div key={name} className={STYLES.customizableInputDiv} hidden={!enabled}>
            {display}
            {type === "range" && (" " + getValue())}
            {/*{type === "range" && <label className={STYLES.rangeLabelLeft}>{rest.min}</label>}*/}
            {type === "dropdown"
                ? <select
                    name={name}
                    className={STYLES.customizableInput}
                    onChange={handleChange}
                    value={getValue()}
                    {...rest}
                >
                    {options.map((option) =>
                        <option value={option.name} key={option.name}>
                            {option.display}
                        </option>
                    )}
                </select>
                : <input
                    type={type}
                    name={name}
                    className={STYLES.customizableInput}
                    onChange={handleChange}
                    value={getValue()}
                    {...rest}
                />
            }
            <ReactTooltipDefaultExport id={name} place="right">
                {tooltip}
            </ReactTooltipDefaultExport>
            <div className={STYLES.tooltipDiv} data-tip data-for={name}>
                <div>?</div>
            </div>
        </div>
    );
};

CustomizableInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    display: PropTypes.string,
    getValue: PropTypes.func,
    setValue: PropTypes.func,
    enabled: PropTypes.bool,
    options: PropTypes.array,
    onEdit: PropTypes.func,
    tooltip: PropTypes.string,
};

export default CustomizableInput;
