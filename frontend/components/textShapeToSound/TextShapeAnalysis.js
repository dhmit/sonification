import React, {useState} from "react";
import STYLES from "./TextShapeAnalysis.module.scss";

const TextShapeAnalysis = () => {

    const [text, setText] = useState("");
    const [secondsPerLine, setSecondsPerLine] = useState(1);
    const [baseFreq, setBaseFreq] = useState(440);
    const [maxBeatFreq, setMaxBeatFreq] = useState(20);
    const [results, setResults] = useState("");
    const [higherSecondFreq, setHigherSecondFreq] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSecondsPerLineChange = (event) => {
        setSecondsPerLine(event.target.value);
    };

    const handleBaseFreqChange = (event) => {
        setBaseFreq(event.target.value);
    };

    const handleMaxBeatFreqChange = (event) => {
        setMaxBeatFreq(event.target.value);
    };

    const handleHigherSecondFreqChange = (event) => {
        setHigherSecondFreq(event.target.checked);
        let higherSecondFreqStatus = "Higher";
        let lowerSecondFreqStatus = "<b>Lower</b>";

        if (event.target.checked) {
            higherSecondFreqStatus = "<b>Higher</b>";
            lowerSecondFreqStatus = "Lower";
        }
        document.getElementById("higherSecondFreqStatus").innerHTML=higherSecondFreqStatus;
        document.getElementById("lowerSecondFreqStatus").innerHTML=lowerSecondFreqStatus;
    };


    const handleAlignCenter = () => {
        // Get lines of current text and remove leading/trailing whitespaces
        let lines = text.split('\n').map(line => line.trim());
        const maxLineLength = Math.max(...lines.map(line => line.length));

        // Pad each line with leading/trailing whitespaces to center it according to maxLineLength
        lines = lines.map(line => line.padStart(Math.floor((maxLineLength - line.length) / 2) +
            line.length).padEnd(maxLineLength));

        // Update text
        const newText = lines.join('\n');
        setText(newText);
    };

    const handleAlignLeft = () => {
        // Get lines of current text and remove leading whitespaces to align left
        let lines = text.split('\n').map(line => line.trimStart());

        // Update text
        const newText = lines.join('\n');
        setText(newText);
    };

    const handleAlignRight = () => {
        // Get lines of current text and remove trailing whitespaces
        let lines = text.split('\n').map(line => line.trimEnd());
        const maxLineLength = Math.max(...lines.map(line => line.length));

        // Pad each line with leading whitespaces to align right according to maxLineLength
        lines = lines.map(line => line.padStart(maxLineLength));

        // Update text
        const newText = lines.join('\n');
        setText(newText);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setResults("");
        const encodedText = encodeURIComponent(text);
        const encodedSecondsPerLine = encodeURIComponent(secondsPerLine);
        const encodedBaseFreq = encodeURIComponent(baseFreq);
        const encodedMaxBeatFreq = encodeURIComponent(maxBeatFreq);
        const encodedHigherSecondFreq = encodeURIComponent(higherSecondFreq);
        fetch(`/api/text_shape_to_music/?text=${encodedText}
        &secondsPerLine=${encodedSecondsPerLine}&baseFreq=${encodedBaseFreq}
        &maxBeatFreq=${encodedMaxBeatFreq}
        &higherSecondFreq=${encodedHigherSecondFreq}`)
            .then(response => response.json())
            .then(data => {
                setResults(data["sound"]);
            });
    };

    const makeTextInput = (heading, id, value, title, onChange, unit) => (
        <div className="form-inline p-1">
            <label className="mr-1" htmlFor={id}>{heading}</label>
            <input
                className="form-control mr-1" id={id} type="number"
                value={value}
                data-toggle="tooltip"
                data-placement="top"
                title={title}
                onChange={onChange}
                required
                style={{width: "40%"}}
            />
            <strong>{unit}</strong>
        </div>

    );

    return (
        <div className="container">
            <h1>Text Shape</h1>
            <form onSubmit={handleSubmit}>
                <div className="row" style={{width: "90%"}}>
                    <p className="col-sm-9">
                        Welcome to the Text Shape Synthesizer!
                        Start by typing or uploading a text file and hit submit to generate sound.
                        The sound is based on the amount of linebreaks and whitespace in the text.
                    </p>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <textarea
                            className={`form-control ${STYLES.inputTextArea}`}
                            id="text" rows="18" value={text}
                            onChange={handleTextChange}
                            placeholder={"Write text here or upload a text file ..."}
                            required
                        />
                    </div>
                    <div className="col">
                        <p><strong>Edit Default Parameters</strong></p>
                        {makeTextInput(
                            "Seconds Per Line:",
                            "secondsPerLine",
                            secondsPerLine,
                            "the duration of each beat frequency in seconds",
                            handleSecondsPerLineChange,
                            "s"
                        )}

                        {makeTextInput(
                            "Base Frequency:",
                            "baseFreq",
                            baseFreq,
                            "the frequency that the beat frequencies will be based on\n" +
                            "                                   in Hertz",
                            handleBaseFreqChange,
                            "Hz"
                        )}
                        {makeTextInput(
                            "Max Beat Frequency:",
                            "maxBeatFreq",
                            maxBeatFreq,
                            "the maximum possible beat frequency in Hertz",
                            handleMaxBeatFreqChange,
                            "Hz"
                        )}

                        <div className="form-inline" style={{marginTop: "2%"}}>
                            Relative to Base Frequency: &nbsp;
                            <div className="form-check form-switch">
                                <label className="form-check-label" id="lowerSecondFreqStatus">
                                    <b>Lower</b>
                                </label> &nbsp;&nbsp;
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="determines whether the second frequencies,
                                        which combined with the base frequency produces the beats,
                                        will be higher than the base frequency"
                                    checked={higherSecondFreq}
                                    onChange={handleHigherSecondFreqChange}
                                />&nbsp;
                                <label className="form-check-label" id="higherSecondFreqStatus">
                                    Higher
                                </label>
                            </div>
                            <div style={{marginTop: "4%"}}>
                                Align Text:
                                <button className="btn btn-dark mr-1" type="button"
                                    onClick={handleAlignLeft}
                                >Left
                                </button>
                                <button className="btn btn-dark mr-1" type="button"
                                    onClick={handleAlignCenter}
                                >Center
                                </button>
                                <button className="btn btn-dark" type="button"
                                    onClick={handleAlignRight}
                                >Right
                                </button>
                                <br/>
                                <button
                                    className="btn btn-primary" type="submit"
                                    style={{position: 'absolute', bottom:0}}
                                >Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {results && (<>
                <h3>Play Audio:</h3>
                <audio controls controlsList={"download"}>
                    <source src={`data:audio/wav;base64,${results}`} type={"audio/wav"}/>
                </audio>
            </>)}

        </div>
    );
};

export default TextShapeAnalysis;
