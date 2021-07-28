import React, {useState} from "react";
import Sound from "react-sound";
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
        fetch("api/add_text", requestOptions)
            .then(response => response.json())
            .then(data => {
                setResults(data);
                setText("");
            });
    };

    return (
        <>
            <script>
                var audio = new Audio("../../backend/app/analysis/sentiment_analysis.wav");
                audio.play();
            </script>
            {results}
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="text" className="col-2 col-form-label">Text</label>
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
            <h3>Play Audio: </h3>
            <audio
                controls
                src="../../backend/app/analysis/sentiment_analysis.wav">
            </audio>
            <Sound
                url={"../../backend/app/analysis/sentiment_analysis.wav"}
            />
        </>
    );
};

export default SentimentAnalysis;
