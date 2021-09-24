import React, {useState} from "react";

const SentimentAnalysis = () => {

    const [text, setText] = useState("");
    const [results, setResults] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setResults("");
        fetch(`/api/get_sentiment_analysis/?text=${text}`)
            .then(response => response.json())
            .then(data => {
                setResults(data["sound"]);
                setText("");
            });
    };

    return (
        <div className="container-fluid">
            <h1>Text Sentiment Analysis</h1>
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

export default SentimentAnalysis;
