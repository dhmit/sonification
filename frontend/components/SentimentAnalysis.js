import React, {useState} from "react";
import {getCookie} from "../common";

const SentimentAnalysis = () => {

    const [text, setText] = useState("");
    const [results, setResults] = useState();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken
            },
            body: JSON.stringify({
                user_text: text
            })
        };
        fetch("api/get_sentiment_analysis", requestOptions)
            .then(response => response.json())
            .then(data => {
                setResults(data);
                setText("");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <h4><label htmlFor="text" className="col-2 col-form-label">Text</label></h4>
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
            <h2>Play Audio:</h2>
            <audio controls>
                <source href={`data:audio/wav;base64,${results}`} />
            </audio>
        </>
    );
};

export default SentimentAnalysis;
