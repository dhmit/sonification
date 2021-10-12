import React, {useRef, useState} from "react";
import {getCookie} from "../../common";
import PropTypes from "prop-types";


const UploadTimeSeriesFileInput = ({id, uploadSuccessfulCallback, apiEndpoint}) => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const [constants, setConstants] = useState(
        [
            {
                "base_frequency": 100,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": .25,
                "d_percentage": 0,
                "s_percentage": .5,
                "r_percentage": .25,
            },
            {
                "base_frequency": 150,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": .2,
                "d_percentage": .4,
                "s_percentage": .3,
                "r_percentage": .1,
            },
            {
                "base_frequency": 225,
                "multiplier": 20,
                "offset": 0,
                "a_percentage": .2,
                "d_percentage": .4,
                "s_percentage": .3,
                "r_percentage": .1,
            },
        ]
    );

    const fileRef = useRef(null);
    const handleSubmitFile = (event) => {
        event.preventDefault();
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": true}));
        submitFileToAPI(tempFile, "file");
    };

    const handleFileInput = (event) => {
        setTempFile(event.target.files[0]);
    };

    const updateConstant = (col, name, val) => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp[col][name] = parseFloat(val);
            return temp;
        });
    };

    const clearFile = () => {
        const file = fileRef.current;
        file.value = null;
        setTempFile(null);
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": false}));
    };

    const submitFileToAPI = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("id", id);
        formData.append("value", file, "tempfile.csv");
        formData.append("constants", JSON.stringify(constants));
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

    return (
        <>
            <div>
                {constants.map((each, i) => {
                    return <div className="form-inline" key={i}>
                        <p>Column {i}: </p>
                        <div>
                            <label>Offset</label>
                            <input className="form-control my-3" type="number"
                                   onChange={e => updateConstant(i, "offset", e.target.value)}
                                   placeholder={"Offset"} value={constants[i]["offset"]}
                            />
                        </div>
                        <div>
                            <label>Multiplier</label>
                            <input className="form-control my-3" type="number"
                                   onChange={e => updateConstant(i, "multiplier", e.target.value)}
                                   placeholder={"Multiplier"} value={constants[i]["multiplier"]}
                            />
                        </div>
                        <div>
                            <label>Base Frequency</label>
                            <input className="form-control my-3" type="number"
                                   onChange={e => updateConstant(i, "base_frequency", e.target.value)}
                                   placeholder={"Base Frequency"}
                                   value={constants[i]["base_frequency"]}
                            />
                        </div>
                        <div>
                            <label>A</label>
                            <input className="form-control my-3" type="number" min={0} max={1}
                                   step={.1}
                                   onChange={e => updateConstant(i, "a_percentage", e.target.value)}
                                   placeholder={"Attack"} value={constants[i]["a_percentage"]}
                            />
                        </div>
                        <div>
                            <label>D</label>
                            <input className="form-control my-3" type="number" min={0} max={1}
                                   step={.1}
                                   onChange={e => updateConstant(i, "d_percentage", e.target.value)}
                                   placeholder={"Decay"} value={constants[i]["d_percentage"]}
                            />
                        </div>
                        <div>
                            <label>S</label>
                            <input className="form-control my-3" type="number" min={0} max={1}
                                   step={.1}
                                   onChange={e => updateConstant(i, "s_percentage", e.target.value)}
                                   placeholder={"Sustain"} value={constants[i]["s_percentage"]}
                            />
                        </div>
                        <div>
                            <label>R</label>
                            <input className="form-control my-3" type="number" min={0} max={1}
                                   step={.1}
                                   onChange={e => updateConstant(i, "r_percentage", e.target.value)}
                                   placeholder={"Release"} value={constants[i]["r_percentage"]}
                            />
                        </div>
                    </div>;
                })}
            </div>
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control my-3" type="file" ref={fileRef}
                           accept="text/csv" disabled={submitted.file}
                           onChange={handleFileInput}/>
                    {tempFile &&
                    <button className="btn btn-secondary ml-1"
                            type="button"
                            onClick={clearFile} disabled={tempFile === null}
                            data-dismiss="fileupload">Clear</button>
                    }
                </div>
                {tempFile &&
                <button id="upload-file" className="btn btn-primary ml-1"
                        disabled={tempFile === null}
                        type={"submit"}
                        onClick={handleSubmitFile}>
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
