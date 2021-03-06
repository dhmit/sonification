import React, {useState} from "react";

const SentimentAnalysis2 = () => {
    const [userInput, setUserInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [noteData, setNoteData] = useState(null);
    const [soundData, setSoundData] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/get_sentiment_analysis_2/?text=${userInput}`)
            .then(response => response.json())
            .then(data =>{
                setNoteData(data.note);
                setSoundData(data.sound);
            });
        setSubmitted(true);
    };

    const resetText = (event) => {
        event.preventDefault();
        setUserInput("");
        setSoundData(null);
        setNoteData(null);
        setSubmitted(false);
    };

    return(
        <div className="container-fluid">
            <h1>Text Sentiment Analysis</h1>
            <p>
                Add descriptive text here.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Please input your response in the textarea below.
                    </label>
                    <textarea
                        className="form-control col-7"
                        id="user-input-text" rows="5"
                        onChange={handleInputChange}
                        disabled={submitted}
                        required
                        value={userInput}
                    />
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
                            noteData
                                ? <>
                                    <p><b>Note:</b></p>
                                    <audio
                                        controls
                                        src={`data:audio/wav;base64, ${noteData}`}
                                        controlsList="nodownload"
                                    />
                                </>
                                : <p>Loading note...</p>
                        }
                        {
                            soundData
                                ? <>
                                    <p><b>Sound:</b></p>
                                    <audio
                                        controls
                                        src={`data:audio/wav;base64, ${soundData}`}
                                        controlsList="nodownload"
                                    />
                                </>
                                : <p>Loading sound...</p>
                        }
                    </div>
                    : <div>You have not submitted any response yet.</div>
            }
        </div>
    );
};

export default SentimentAnalysis2;
