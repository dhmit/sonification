import React, {useState} from "react";
import {fetchPost, getCookie} from "../../common";
import PropTypes from "prop-types";
import FileInput from "./FileInput";


const DEFAULT_COLUMN_CONSTANTS = {
    "base_frequency": 220,
    "multiplier": 1,
    "offset": 0,
    "a_percentage": .2,
    "d_percentage": .1,
    "s_percentage": .5,
    "r_percentage": .2,
};

const UploadTimeSeriesFileInput = ({uploadSuccessfulCallback, apiEndpoint}) => {
    const [parsedCSV, setParsedCSV] = useState(null);
    const [duration, setDuration] = useState(.2);
    const [everyN, setEveryN] = useState(1);
    const [mapToNote, setMapToNote] = useState(false);
    const [constants, setConstants] = useState([]);
    const [activeColumn, setActiveColumn] = useState(0);

    const constantsDefaults = {
        "base_frequency": {"label": "Base Frequency", "min": null, "max": null, "step": null},
        "multiplier": {"label": "Multiplier", "min": null, "max": null, "step": null},
        "offset": {"label": "Offset", "min": null, "max": null, "step": null},
        "a_percentage": {"label": "A", "min": 0, "max": 1, "step": .1},
        "d_percentage": {"label": "D", "min": 0, "max": 1, "step": .1},
        "s_percentage": {"label": "S", "min": 0, "max": 1, "step": .1},
        "r_percentage": {"label": "R", "min": 0, "max": 1, "step": .1},
    };

    const setParsedCsvAndUpdateConstants = (parsedData) => {
        // NOTE(RA): This wipes out old constants with the default settings whenever we upload
        //           a new CSV. It might be nice to retain settings between uploads. Not sure.
        const newColumnConstants = [];
        parsedData[0].forEach(() => newColumnConstants.push({...DEFAULT_COLUMN_CONSTANTS}));
        setConstants(newColumnConstants);
        setParsedCSV(parsedData);  // we set this last because the UI if's on its presence
    };

    const csvParse = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
        fetchPost('/api/parse_csv/', formData, setParsedCsvAndUpdateConstants, false);
    };

    const submitToAPI = () => {
        const requestBody = {
            constants,
            duration,
            everyN,
            mapToNote,
            parsedCSV,
        };
        fetchPost(apiEndpoint, requestBody, uploadSuccessfulCallback);
    };

    const updateConstant = (colNumber, constantName, val) => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp[colNumber][constantName] = parseFloat(val);
            return temp;
        });
    };

    const makeColumnControls = (columnNumber) => {
        const columnConstants = constants[columnNumber];
        const controls = (<form>
            <div className="row">
                {makeControl(columnNumber, "base_frequency")}
                {makeControl(columnNumber, "multiplier")}
                {makeControl(columnNumber, "offset")}
            </div>
            <div className="row">
                {makeControl(columnNumber, "a_percentage")}
                {makeControl(columnNumber, "d_percentage")}
                {makeControl(columnNumber, "s_percentage")}
                {makeControl(columnNumber, "r_percentage")}
            </div>
        </form>);

        return controls;
    };

    const makeControl = (columnNumber, constantName) => {
        return (
            <div className="col">
                <div className="form-group col-md-6" key={constantsDefaults[constantName]["label"]}>
                    <label htmlFor="input">{constantsDefaults[constantName]["label"]}</label>
                    <input
                        className="form-control my-3" type="number" id="input"
                        min={constantsDefaults[constantName]["min"]}
                        max={constantsDefaults[constantName]["max"]}
                        step={constantsDefaults[constantName]["step"]}
                        onChange={e => {
                            updateConstant(columnNumber, constantName, e.target.value);
                        }}
                        value={constants[columnNumber][constantName]}
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            {!parsedCSV && <>
                <p className="mb-0">
                    First, upload a CSV file that has numeric values in its columns:
                </p>
                <FileInput onSubmit={csvParse} />
            </>}

            {parsedCSV && constants && <>
                <p>Great! We detected {parsedCSV[0].length} columns of numeric data.</p>
                <p>
                    We're going to turn your data into sound, based on the values below,
                    which you can edit.
                </p>

                <ul className="nav nav-tabs">
                    {constants.map((col, i) => (
                        <li className="nav-item" key={i}>
                            <a
                                onClick={() => setActiveColumn(i)}
                                href="#"
                                className={activeColumn === i ? "nav-link active" : "nav-link"}>
                                Column {i+1}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="form-inline">
                    <div>
                        {makeColumnControls(activeColumn)}
                    </div>
                </div>

                <hr />

                <p className="mb-0">
                    Global parameters
                </p>
                <br />

                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group col-md-6">
                                <label htmlFor="step_size">Step size</label>
                                <input
                                    className="form-control" type="number" id="step_size"
                                    min={1}
                                    step={1}
                                    onChange={e => setEveryN(e.target.value)}
                                    value={everyN}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group col-md-6">
                                <label htmlFor="duration">Duration of each step (sec)</label>
                                <input
                                    className="form-control" type="number" id="duration"
                                    min={0.1}
                                    max={10}
                                    step={.1}
                                    onChange={e => setDuration(e.target.value)}
                                    value={duration}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <label>
                                <input type="checkbox" onClick={e => setMapToNote(e.target.checked)}/>
                                <span> Map numbers to note?</span>
                            </label>
                        </div>
                    </div>
                </form>

                <button
                    className="btn btn-primary"
                    onClick={() => submitToAPI()}
                >
                    Sonify my data!
                </button>
            </>}
        </>
    );
};

UploadTimeSeriesFileInput.propTypes = {
    uploadSuccessfulCallback: PropTypes.func,
    apiEndpoint: PropTypes.string,
};


export default UploadTimeSeriesFileInput;
