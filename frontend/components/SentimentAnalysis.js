import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import STYLES from "./SentimentAnalysis.module.scss";

const SentimentAnalysis = () => {
    const [userInput, setUserInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [audioData, setAudioData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Please input your response in the textarea below.
                    </label>
                    <textarea className="form-control" id="text" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SentimentAnalysis;