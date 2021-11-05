import React, {useState} from "react";
import STYLES from "./TextShapeAnalysis.module.scss";

const TextShapeAnalysis = () => {

    const [text, setText] = useState("");
    const [secondsPerLine, setSecondsPerLine] = useState(1);
    const [baseFreq, setBaseFreq] = useState(440);
    const [maxBeatFreq, setMaxBeatFreq] = useState(20);
    const [results, setResults] = useState("");
    const [higherSecondFreq, sethigherSecondFreq] = useState(false);

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
        sethigherSecondFreq(event.target.checked);
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

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function (fileEvent) {
            const textFromFile = fileEvent.target.result;
            setText(textFromFile);
        };
        fileReader.readAsText(file, 'utf-8');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setResults("");
        const encodedText = encodeURIComponent(text);
        const encodedSecondsPerLine = encodeURIComponent(secondsPerLine);
        const encodedBaseFreq = encodeURIComponent(baseFreq);
        const encodedMaxBeatFreq = encodeURIComponent(maxBeatFreq);
        const encodedHigherSecondFreq = encodeURIComponent(higherSecondFreq);
        fetch(`/api/get_shape_analysis/?text=${encodedText}
        &secondsPerLine=${encodedSecondsPerLine}&baseFreq=${encodedBaseFreq}
        &maxBeatFreq=${encodedMaxBeatFreq}
        &higherSecondFreq=${encodedHigherSecondFreq}`)
            .then(response => response.json())
            .then(data => {
                setResults(data["sound"]);
            });
    };


    return (
        <div className="container-fluid">
            <h1>Text Shape</h1>
            <p>
                This sonificiation produces sequence of beat frequencies based on the shape of the text.<br/>
                Each beat frequency, based on the base frequency, represents a line by taking into
                account the average length of spaces in it.<br/>
                As the average length of spaces in a line increases, the beat frequency decreases.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <textarea
                            className={`form-control ${STYLES.inputTextArea}`}
                            id="text" rows="8" value={text}
                            onChange={handleTextChange}
                            placeholder={"Write text here or upload a text file ..."}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        Align: <button className="btn btn-dark" type="button"
                                       onClick={handleAlignLeft}> Left</button> &nbsp;
                        <button className="btn btn-dark" type="button" onClick={handleAlignCenter}>
                            Center
                        </button>
                        &nbsp;
                        <button className="btn btn-dark" type="button" onClick={handleAlignRight}>
                            Right
                        </button>
                        <br/>
                        <br/>
                        <label>Upload text into text box:</label>
                        <br/>
                        <input className="my-3" type="file" accept=".txt"
                               onChange={handleUploadFile}/><br/><br/>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="col">
                        <p><b>Edit Default Parameters</b></p>
                        <div className="form-inline">
                            Seconds Per Line: &nbsp;
                            <input className="form-control" id="secondsPerLine" type="number"
                                   value={secondsPerLine}
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   title="the duration of each beat frequency in seconds"
                                   onChange={handleSecondsPerLineChange}
                                   required/>
                            &nbsp;<b>s</b>
                        </div>
                        <div className="form-inline">
                            Base Frequency: &nbsp;
                            <input className="form-control" id="baseFreq" type="number"
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   title="the frequency that the beat frequencies will be based on
                                   in Hertz"
                                   value={baseFreq} onChange={handleBaseFreqChange}
                                   required/>
                            &nbsp;<b>Hz</b>
                        </div>
                        <div className="form-inline">
                            Max Beat Frequency:&nbsp;
                            <input className="form-control" id="maxBeatFreq" type="number"
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   title="the maximum possible beat frequency in Hertz"
                                   value={maxBeatFreq} onChange={handleMaxBeatFreqChange}
                                   required/>&nbsp;
                            <b>Hz</b>
                        </div>
                         <div className="form-inline">
                             Second Frequency Relative to Base Frequency: &nbsp;
                             <div className="form-check form-switch">
                                 <label className="form-check-label"
                                            id="lowerSecondFreqStatus">
                                         <b>Lower</b>
                                 </label> &nbsp;&nbsp;
                                 <input className="form-check-input"
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
                                 <label className="form-check-label"
                                            id="higherSecondFreqStatus">
                                         Higher
                                 </label>
                             </div>
                        </div>
                    </div>
                </div>
            </form>
            {results && (<>
                <h3>Play Audio:</h3>
                <audio controls controlsList={"nodownload"}>
                    <source src={`data:audio/wav;base64,${results}`} type={"audio/wav"}/>
                </audio>
            </>)}
        </div>
    );
};

export default TextShapeAnalysis;
