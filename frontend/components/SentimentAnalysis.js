import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import STYLES from "./SentimentAnalysis.module.scss";

const SentimentAnalysis = () => {
    const [userInput, setUserInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [audioData, setAudioData] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h4>How are you feeling today?</h4>
                    <label>
                        Please input your response in the textarea below.
                    </label>
                    <textarea className="form-control" id="user-input-text" rows="5"
                        onChange={handleInputChange} disabled={submitted} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary"
                    disabled={submitted}>Submit</button>
            </form>
            {
                submitted
                    ? <div>Here is your submitted text: {userInput}</div>
                    : <div>You have not submitted any response yet.</div>
            }
        </div>
    );
};

export default SentimentAnalysis;