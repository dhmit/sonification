import React, {useState} from "react";
import * as PropTypes from "prop-types";
import STYLES from "./ExampleId.module.scss";

const ExampleId = ({id}) => {

    const [tracker, setTracker] = useState(0);

    const onButtonClick = () => {
        setTracker(previousState => previousState + 1);
    };

    return (
        <div>
            <h1>This is the Example ID page.</h1>
            <p>
                This page demonstrates passing view parameters from Django to React
                and very simple state management.
            </p>
            <p>View params:</p>
            <ul className={STYLES.list}>
                <li>ID: {id}</li>
            </ul>
            <p>Example state: {tracker}</p>
            <button onClick={onButtonClick}>Add to tracker</button>
        </div>
    );
};

ExampleId.propTypes = {
    id: PropTypes.number
};

export default ExampleId;
