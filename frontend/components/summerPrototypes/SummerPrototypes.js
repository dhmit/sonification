import React from "react";

import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalysis2 from "./SentimentAnalysis2";
import ImageAnalysis from "./ImageAnalysis";

const SummerPrototypes = () => {
    return (<div>
        <SentimentAnalysis />
        <hr />
        <SentimentAnalysis2 />
        <hr />
        <ImageAnalysis />
    </div>);
};

export default SummerPrototypes;
