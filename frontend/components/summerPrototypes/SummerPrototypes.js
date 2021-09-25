import React from "react";

import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalysis2 from "./SentimentAnalysis2";
import ImageAnalysis from "./ImageAnalysis";
import TimeSeries from "../timeSeries/TimeSeries";

const SummerPrototypes = () => {
    return (<div>
        <TimeSeries />
        <hr />
        <SentimentAnalysis />
        <hr />
        <SentimentAnalysis2 />
        <hr />
        <ImageAnalysis />
    </div>);
};

export default SummerPrototypes;
