import React, {useState} from "react";
// import * as PropTypes from "prop-types";
// import STYLES from "./SentimentAnalysis.module.scss";

const SentimentAnalysis = () => {
    const [userInput, setUserInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [audioData, setAudioData] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/get_sentiment_analysis?text=${userInput}`)
            .then(response => response.json())
            .then(data =>{
                setAudioData(data);
            });
        setSubmitted(true);
    };

    const resetText = (event) => {
        event.preventDefault();
        setUserInput("");
        setAudioData(null);
        setSubmitted(false);
    };

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Please input your response in the textarea below.
                    </label>
                    <textarea className="form-control col-7" id="user-input-text" rows="5"
                        onChange={handleInputChange} disabled={submitted}
                        required value={userInput}></textarea>
                </div>
                <button type="submit" className="btn btn-primary"
                    disabled={submitted}>Submit</button>
                <button className="btn btn-primary mx-3" onClick={resetText}>Try again!</button>
            </form>
            {
                submitted
                    ? <div>
                        <p>Here is your submitted text:</p>
                        <p className="mx-3">{userInput}</p>
                        {
                            audioData
                                ? <>
                                    <p><b>Note:</b></p>
                                    <audio controls="controls"
                                    src={`data:audio/wav;base64, ${audioData.note}`}
                                    controlsList="nodownload"/>
                                    <p><b>Sound:</b></p>
                                    <audio controls="controls"
                                    src={`data:audio/wav;base64, ${audioData.sound}`}
                                    controlsList="nodownload"/>
                                </>
                                : <p>Loading audio...</p>
                        }
                    </div>
                    : <div>You have not submitted any response yet.</div>
            }
        </div>
    );
};

export default SentimentAnalysis;