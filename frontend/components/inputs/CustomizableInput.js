import React from "react";
import PropTypes from "prop-types";
import STYLES from "./CustomizableInput.module.scss";

/**
 * A customizable input component. Consists of a wrapper div, a display description, and an
 * input component.
 */
const CustomizableInput = ({type, name, display, getValue, setValue, ...rest}) => {
    return (
        <div key={name} className={STYLES.customizableInputDiv}>
            {display}
            <input
                type={type}
                name={name}
                className={STYLES.customizableInput}
                onChange={(e) => setValue(e.target.value)}
                value={getValue()}
                {...rest}
            />
        </div>
    );
};

CustomizableInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    display: PropTypes.string,
    getValue: PropTypes.func,
    setValue: PropTypes.func,
};

export default CustomizableInput;
