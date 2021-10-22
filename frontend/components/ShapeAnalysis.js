import React, {useState} from "react";

const ShapeAnalysis = () => {

    const [text, setText] = useState("");
    const [results, setResults] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
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
        fetch(`/api/get_shape_analysis/?text=${encodedText}`)
            .then(response => response.json())
            .then(data => {
                setResults(data["sound"]);
            });
    };

    return (
        <div className="container-fluid">
            <h1>Text Shape Analysis</h1>
            <p>
                Add descriptive text here.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <h3><label htmlFor="text" className="col-2 col-form-label">Text</label></h3>
                    <div className="col">
                        <textarea
                            className="form-control"
                            id="text" rows="8" value={text}
                            onChange={handleTextChange}
                            required
                        />
                    </div>
                </div>
                <button className="btn btn-secondary" type="button" onClick={handleAlignLeft}>
                    Align Left</button> &nbsp;
                <button className="btn btn-secondary" type="button" onClick={handleAlignCenter}>
                    Align Center</button> &nbsp;
                <button className="btn btn-secondary" type="button" onClick={handleAlignRight}>
                    Align Right</button><br/><br/>
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

export default ShapeAnalysis;
