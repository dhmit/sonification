import React, {useRef, useState} from "react";
import {fetchPost} from "../../common";
import PropTypes from "prop-types";
import {handleSubmitFile, handleFileInput, clearFile} from "./UploadFileInput";

const UploadTimeSeriesFileInput = ({id, uploadSuccessfulCallback, apiEndpoint}) => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const [duration, setDuration] = useState(.2);
    const [constants, setConstants] = useState(
        [
            {
                "base_frequency": {"value": 100, "label": "Base Frequency"},
                "multiplier": {"value": 20, "label": "Multiplier"},
                "offset": {"value": 0, "label": "Offset"},
                "a_percentage": {"value": 0, "label": "A", "min": 0, "max": 1, "step": .1},
                "d_percentage": {"value": 0, "label": "D", "min": 0, "max": 1, "step": .1},
                "s_percentage": {"value": 1, "label": "S", "min": 0, "max": 1, "step": .1},
                "r_percentage": {"value": 0, "label": "R", "min": 0, "max": 1, "step": .1},
            },
            {
                "base_frequency": {"value": 150, "label": "Base Frequency"},
                "multiplier": {"value": 20, "label": "Multiplier"},
                "offset": {"value": 0, "label": "Offset"},
                "a_percentage": {"value": 0, "label": "A", "min": 0, "max": 1, "step": .1},
                "d_percentage": {"value": 0, "label": "D", "min": 0, "max": 1, "step": .1},
                "s_percentage": {"value": 1, "label": "S", "min": 0, "max": 1, "step": .1},
                "r_percentage": {"value": 0, "label": "R", "min": 0, "max": 1, "step": .1},
            },
            {
                "base_frequency": {"value": 225, "label": "Base Frequency"},
                "multiplier": {"value": 20, "label": "Multiplier"},
                "offset": {"value": 0, "label": "Offset"},
                "a_percentage": {"value": 0, "label": "A", "min": 0, "max": 1, "step": .1},
                "d_percentage": {"value": 0, "label": "D", "min": 0, "max": 1, "step": .1},
                "s_percentage": {"value": 1, "label": "S", "min": 0, "max": 1, "step": .1},
                "r_percentage": {"value": 0, "label": "R", "min": 0, "max": 1, "step": .1},
            },
        ]
    );

    const fileRef = useRef(null);


    const updateConstant = (col, name, val) => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp[col][name]["value"] = parseFloat(val);
            return temp;
        });
    };

    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("id", id);
        formData.append("value", file, "tempfile.csv");
        formData.append("constants", JSON.stringify(constants));
        formData.append("duration", duration.toString());
        fetchPost(apiEndpoint, formData, uploadSuccessfulCallback, false);
    };


    const makeControl = (i, key) => (
        <div key={i + key["label"]}>
            <label>{constants[i][key]["label"]}</label>
            <input className="form-control my-3" type="number"
                min={constants[i][key]["min"]}
                max={constants[i][key]["max"]}
                step={constants[i][key]["step"]}
                onChange={e => updateConstant(i, key, e.target.value)}
                value={constants[i][key]["value"]}
            />
        </div>
    );

    return (
        <>
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
            <div className="form-inline">
                {constants.map((col, i) => {
                    return <div className={"time-series-input"} key={i}>
                        <p>Column {i}: </p>
                        {Object.keys(col).map(constant => {
                            return makeControl(i,constant);
                        })}
                    </div>;
                })}
            </div>
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control my-3" type="file" ref={fileRef}
                        accept="text/csv" disabled={submitted.file}
                        onChange={(e) => handleFileInput(e, setTempFile)}/>
                    {tempFile &&
                    <button className="btn btn-secondary ml-1"
                        type="button"
                        onClick={() => clearFile(fileRef, setTempFile, setSubmitted)}
                        disabled={tempFile === null}
                        data-dismiss="fileupload">Clear</button>
                    }
                </div>
                {tempFile &&
                <button id="upload-file" className="btn btn-primary ml-1"
                    disabled={tempFile === null}
                    type={"submit"}
                    onClick={(e) => handleSubmitFile(e, setSubmitted, submitFileToAPI, tempFile)}>
                    Upload file
                </button>
                }
            </form>
        </>
    );
};

UploadTimeSeriesFileInput.propTypes = {
    id: PropTypes.number,
    uploadSuccessfulCallback: PropTypes.func,
    apiEndpoint: PropTypes.string,
};


export default UploadTimeSeriesFileInput;
