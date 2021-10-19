import React from "react";
import PropTypes from "prop-types";
import STYLES from "./CustomizableInput.module.scss";

/**
 * A customizable input component. Consists of a wrapper div, a display description, and an
 * input component.
 */
const CustomizableInput = (
    {type, name, display, getValue, setValue, enabled=true, options=[], ...rest}
) => {
    return (
        <div key={name} className={STYLES.customizableInputDiv} hidden={!enabled}>
            {display}
            {type === "dropdown"
                ? <select
                    name={name}
                    className={STYLES.customizableInput}
                    onChange={(e) => setValue(e.target.value)}
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
                    onChange={(e) => setValue(e.target.value)}
                    value={getValue()}
                    {...rest}
                />
            }
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
};

export default CustomizableInput;
