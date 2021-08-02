import React, {useState} from "react";
import {getCookie} from "../common";

const SentimentAnalysis = () => {

    const [text, setText] = useState("");
    const [results, setResults] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const csrftoken = getCookie("csrftoken");
        // const requestOptions = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "X-CSRFToken": csrftoken
        //     },
        //     body: JSON.stringify({
        //         user_text: text
        //     })
        // };
        fetch(`api/get_sentiment_analysis?text=${text}`)
            .then(response => response.json())
            .then(data => {
                setResults(data['sound']);
                setText("");
                console.log("end of second then");
                console.log(data['sound']);
                console.log(results);


            });
    };

    return (
        <>
            <h2>Sentiment Analysis</h2>
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
            <h3>Play Audio:</h3>
            {results && <audio controls controlsList={"nodownload"}>
                <source src={`data:audio/wav;base64,${results}`} type={"audio/wav"}/>
            </audio>}
        </>
    );
};

export default SentimentAnalysis;
