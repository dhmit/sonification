import React, {useState} from "react";

const TextShapeAnalysis = () => {

    const [text, setText] = useState("");
    const [secondsPerLine, setSecondsPerLine] = useState(1);
    const [baseFreq, setBaseFreq] = useState(440);
    const [maxBeatFreq, setMaxBeatFreq] = useState(20);
    const [results, setResults] = useState("");

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
        fetch(`/api/get_shape_analysis/?text=${encodedText}
        &secondsPerLine=${encodedSecondsPerLine}&baseFreq=${encodedBaseFreq}
        &maxBeatFreq=${encodedMaxBeatFreq}`)
            .then(response => response.json())
            .then(data => {
                setResults(data["sound"]);
            });
    };


    return (
        <div className="container-fluid">
            <h1>Text Shape Analysis</h1>
            <p>
                Hear your written work come to life!
            </p>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <textarea
                            className="form-control"
                            id="text" rows="8" value={text}
                            onChange={handleTextChange}
                            placeholder={"Write text here ..."}
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
                        <input className="my-3" type="file" accept=".txt"
                               onChange={handleUploadFile}/>
                    </div>
                    <div className="col">
                        <p>Edit Default Parameters</p>
                        <div className="form-inline">
                            Seconds Per Line: &nbsp;
                            <input className="form-control" id="secondsPerLine" type="number"
                                   value={secondsPerLine} onChange={handleSecondsPerLineChange}/>
                        </div>
                        <div className="form-inline">
                            Base Frequency: &nbsp;
                            <input className="form-control" id="baseFreq" type="number"
                                   value={baseFreq} onChange={handleBaseFreqChange}/>
                        </div>
                        <div className="form-inline">
                            Max Beat Frequency:&nbsp;
                            <input className="form-control" id="maxBeatFreq" type="number"
                                   value={maxBeatFreq} onChange={handleMaxBeatFreqChange}/>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
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
