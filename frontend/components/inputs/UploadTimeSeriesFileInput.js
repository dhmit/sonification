import React, {useState} from "react";
import {getCookie} from "../../common";
import PropTypes from "prop-types";
import FileInput from "./FileInput";

const UploadTimeSeriesFileInput = ({uploadSuccessfulCallback, apiEndpoint}) => {
    const [duration, setDuration] = useState(.2);
    const [everyN, setEveryN] = useState(1);
    const [constants, setConstants] = useState(
        [
            {
                "base_frequency": 100,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": 0,
                "d_percentage": 0,
                "s_percentage": 1,
                "r_percentage": 0,
            },
            {
                "base_frequency": 150,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": 0,
                "d_percentage": 0,
                "s_percentage": 1,
                "r_percentage": 0,
            },
            {
                "base_frequency": 225,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": 0,
                "d_percentage": 0,
                "s_percentage": 1,
                "r_percentage": 0,
            },
        ]
    );
    const constantsDefaults = {
        "base_frequency": {"label": "Base Frequency", "min": null, "max": null, "step": null},
        "multiplier": {"label": "Multiplier", "min": null, "max": null, "step": null},
        "offset": {"label": "Offset", "min": null, "max": null, "step": null},
        "a_percentage": {"label": "A", "min": 0, "max": 1, "step": .1},
        "d_percentage": {"label": "D", "min": 0, "max": 1, "step": .1},
        "s_percentage": {"label": "S", "min": 0, "max": 1, "step": .1},
        "r_percentage": {"label": "R", "min": 0, "max": 1, "step": .1},
    };

    const updateConstant = (col, name, val) => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp[col][name] = parseFloat(val);
            return temp;
        });
    };

    const addColumn = () => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp.push({
                "base_frequency": 100,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": 0,
                "d_percentage": 0,
                "s_percentage": 1,
                "r_percentage": 0,
            },);
            return temp;
        });
    };

    const removeColumn = () => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp.pop();
            return temp;
        });
    };

    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
        formData.append("constants", JSON.stringify(constants));
        formData.append("duration", duration.toString());
        formData.append("everyN", everyN.toString());
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken,
            },
            body: formData,
        };
        fetch(apiEndpoint, requestOptions)
            .then(response => response.json())
            .then(data => uploadSuccessfulCallback(data));
    };

    const makeControl = (i, key) => {
        return (
            <div key={i + constantsDefaults[key]["label"]}>
                <label>{constantsDefaults[key]["label"]}</label>
                <input className="form-control my-3" type="number"
                        min={constantsDefaults[key]["min"]}
                        max={constantsDefaults[key]["max"]}
                        step={constantsDefaults[key]["step"]}
                        onChange={e => updateConstant(i, key, e.target.value)}
                        value={constants[i][key]}
                />
            </div>
        );
    };

    return (
        <>
            <FileInput onSubmit={submitFileToAPI} />
            <div className={"time-series-input"}>
                <label>Use every nth value</label>
                <input className="form-control my-3" type="number"
                        min={1}
                        step={1}
                        onChange={e => setEveryN(e.target.value)}
                       value={everyN}
                />
            </div>
            <div className={"time-series-input"}>
                <label>Duration of each step (sec)</label>
                <input className="form-control my-3" type="number"
                    min={0.1}
                    max={10}
                    step={.1}
                    onChange={e => setDuration(e.target.value)}
                    value={duration}
                />
            </div>
            <p>Column Constants:</p>
            <button className="btn btn-secondary ml-1" onClick={addColumn}>+</button>
            <button className="btn btn-secondary ml-1" onClick={removeColumn}>-</button>
            <div className="form-inline">
                {constants.map((col, i) => {
                    return <div className={"time-series-input"} key={i}>
                        <p>Column {i+1}: </p>
                        {Object.keys(col).map(constant => {
                            return makeControl(i,constant);
                        })}
                    </div>;
                })}
            </div>
        </>
    );
};
UploadTimeSeriesFileInput.propTypes = {
    uploadSuccessfulCallback: PropTypes.func,
    apiEndpoint: PropTypes.string,
};


export default UploadTimeSeriesFileInput;
