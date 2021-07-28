import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import STYLES from "./SentimentAnalysis.module.scss";

const SentimentAnalysis = () => {
    const [sentimentAnalysisData, setSentimentAnalysisData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userInput, setUserInput] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch("/api/sentiment_analysis")
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setSentimentAnalysisData(data);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className="container-fluid">
            {loading
                ? <p>Currently loading Sentiment Analysis page...</p>
                : <div>
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
            }
        </div>
    );
};

export default SentimentAnalysis;