import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import STYLES from "./Corpus.module.scss";
import {getCookie} from "../common";

const SentimentAnalysis = () => {
    const [loading, setLoading] = useState(true);
    const [userInput, setUserInput] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch("/api/sentiment_analysis")
            .then(response => response.json())
            .then(data => {
                setLoading(false);
            });
    }, []);

    const handleSubmit = (event) => {
        
    };

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text">
                        Please input your response in the textarea below.
                    </label>
                    <textarea className="form-control" id="text" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SentimentAnalysis;