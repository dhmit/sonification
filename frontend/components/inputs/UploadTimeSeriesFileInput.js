import React, {useEffect, useState} from "react";
import {fetchPost} from "../../common";
import PropTypes from "prop-types";
import FileInput from "./FileInput";
import ReactTooltip from 'react-tooltip';


const DEFAULT_COLUMN_CONSTANTS = {
    "base_frequency": 220,
    "multiplier": 220,
    "a_percentage": .2,
    "d_percentage": .1,
    "s_percentage": .5,
    "r_percentage": .2,
    "wave_pattern": "sin",
};

const INITIAL_EVERY_N = 1;
const INITIAL_DURATION = .5;

const UploadTimeSeriesFileInput = ({
    updateInputCallback,
}) => {
    const [parsedCSV, setParsedCSV] = useState(null);
    const [duration, setDuration] = useState(INITIAL_DURATION);
    const [everyN, setEveryN] = useState(INITIAL_EVERY_N);
    const [constants, setConstants] = useState([]);
    const [activeColumn, setActiveColumn] = useState(0);

    useEffect(() => {
        updateInputCallback({
            parsedCSV,
            duration,
            everyN,
            constants,
        });
    }, [parsedCSV, duration, everyN, constants]);

    const constantsDefaults = {
        "multiplier": {"label": "Multiplier", "min": null, "max": null, "step": null,
            "tooltip": (val) => `Each value will be multiplied by ${val} Hz. [A, B, C]
             will become [A * ${val}, B * ${val}, C * ${val}] = [A', B', C']`},
        "base_frequency": {"label": "Base Frequency", "min": null, "max": null, "step": null,
            "tooltip": (val) => `Each value will be transposed by ${val} Hz. [A', B', C'] will
             become [A' + ${val}, B' + ${val}, C' + ${val}] = [A'', B'', C'']`},
        "a_percentage": {"label": "A", "min": 0, "max": 1, "step": .1, "tooltip": () => null},
        "d_percentage": {"label": "D", "min": 0, "max": 1, "step": .1, "tooltip": () => null},
        "s_percentage": {"label": "S", "min": 0, "max": 1, "step": .1, "tooltip": () => null},
        "r_percentage": {"label": "R", "min": 0, "max": 1, "step": .1, "tooltip": () => null},
        "wave_pattern": {"label": "Wave Pattern", "min": null, "max": null, "step": null,
            "tooltip": () => "Choose from sin, square, or sawtooth patterns",
            "options": ["sin", "square", "sawtooth"]},
    };

    const setParsedCsvAndUpdateConstants = (parsedData) => {
        // NOTE(RA): This wipes out old constants with the default settings whenever we upload
        //           a new CSV. It might be nice to retain settings between uploads. Not sure.
        const newColumnConstants = [];
        parsedData[0].forEach(() => newColumnConstants.push({...DEFAULT_COLUMN_CONSTANTS}));
        let nextFreq = 220;
        for (const constants of newColumnConstants) {
            constants.base_frequency = nextFreq;
            nextFreq *= 2;
        }

        const numRows = parsedData.length;
        // aim for 30 seconds of audio if too long
        const dur = Math.round(Math.min(30 / numRows, INITIAL_DURATION) * 10) / 10;
        setDuration(dur);

        setConstants(newColumnConstants);
        setParsedCSV(parsedData);  // we set this last because the UI if's on its presence
    };

    const csvParse = (file) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("value", file, "tempfile.csv");
        void fetchPost('/api/parse_csv/', formData, setParsedCsvAndUpdateConstants, false);
    };

    const getSampleData = (name) => {
        void fetchPost('/api/time_series_sample_data/', {name}, setParsedCsvAndUpdateConstants);
    };

    const updateConstant = (colNumber, constantName, val, isString = false) => {
        setConstants(prevState => {
            let temp = Object.assign([], prevState);
            temp[colNumber][constantName] = isString ? val : parseFloat(val);
            return temp;
        });
    };

    const makeColumnControls = (columnNumber) => {
        return (<form className="container">
            <div>
                {makeControl(columnNumber, "multiplier")}
                {makeControl(columnNumber, "base_frequency")}
                {makeDropdownControl(columnNumber, "wave_pattern")}
            </div>
        </form>);
    };

    const makeControl = (columnNumber, constantName) => {
        return (
            <div className="col">
                <div className="form-group col-md-6" key={constantsDefaults[constantName]["label"]}>
                    <label htmlFor="input" data-tip={constantsDefaults[constantName]["tooltip"]
                    (constants[columnNumber][constantName])}>
                        <u>{constantsDefaults[constantName]["label"]}</u></label>
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

    const makeDropdownControl = (columnNumber, constantName) => {
        return (
            <div className="col">
                <div className="form-group col-md-6" key={constantsDefaults[constantName]["label"]}>
                    <label htmlFor="input" data-tip={constantsDefaults[constantName]["tooltip"]
                    (constants[columnNumber][constantName])}>
                        <u>{constantsDefaults[constantName]["label"]}</u></label>
                    <select className="my-3" onChange={e => {updateConstant(
                        columnNumber, constantName, e.target.value, true)}}>
                        {constantsDefaults[constantName]["options"].map((each, i) =>
                            <option value={each} key={i}>{each}</option>)}
                    </select>
                </div>
            </div>
        );
    };

    return (
        <>
            {!parsedCSV && <>
                <p className="mb-0">
                    Either upload a CSV file that has numeric values in its columns...
                </p>
                <FileInput onSubmit={csvParse} />
                <p>
                ... or try sonifying some data that we've already curated:
                </p>
                <div>
                    <button
                        onClick={() => getSampleData('boston_sunrise_sunset')}
                        className="btn btn-outline-dark mr-1">
                        2020 Sunrise and Sunset Times in Boston</button>
                    <button
                        onClick={() => getSampleData('pi')}
                        className="btn btn-outline-dark mr-1">Digits of Pi</button>
                    <button
                        onClick={() => getSampleData('golden')}
                        className="btn btn-outline-dark mr-1">Digits of the Golden Ratio</button>
                    <button
                        onClick={() => getSampleData('fibonacci')}
                        className="btn btn-outline-dark mr-1">
                        Digits of the Fibonacci Sequence</button>
                </div>
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

                <form className='container'>
                    <div className="row">
                        <div className="col">
                            <div className="form-group col-md-6">
                                <label htmlFor="duration">Duration of each step (sec)</label>
                                <input
                                    className="form-control" type="number" id="duration"
                                    min={0}
                                    max={10}
                                    step={.1}
                                    onChange={e => setDuration(e.target.value)}
                                    value={duration}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="duration">Use every Nth data point where N = {everyN}</label>
                                <input
                                    className="form-control" type="number" id="step"
                                    min={1}
                                    step={1}
                                    onChange={e => setEveryN(e.target.value)}
                                    value={everyN}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                <ReactTooltip />
            </>}
        </>
    );
};

UploadTimeSeriesFileInput.propTypes = {
    updateInputCallback: PropTypes.func,
};


export default UploadTimeSeriesFileInput;
