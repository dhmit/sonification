// Libraries
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Our imports
import "./scss/index.scss";
import Base from "./components/global/Base";
import ErrorNotFoundComponent from "./components/ErrorNotFoundComponent";
import ExampleId from "./components/ExampleId";
import SentimentAnalysis from "./components/SentimentAnalysis";
import SentimentAnalysis2 from "./components/SentimentAnalysis2";
import Home from "./components/Home";
import ImageAnalysis from "./components/ImageAnalysis";

// Register each new view component here
const COMPONENTS = {
    ErrorNotFoundComponent,
    ExampleId,
    SentimentAnalysis,
    SentimentAnalysis2,
    ImageAnalysis,
    Home,
};

// Here, we take the data for our components specified by Django in our views.py file,
// and we parse it to hand off to React
const COMPONENT_PROPS_RAW = document.getElementById("component_props").text;
const COMPONENT_NAME_RAW = document.getElementById("component_name").text;
const COMPONENT_PROPS = JSON.parse(COMPONENT_PROPS_RAW);
const COMPONENT_NAME = JSON.parse(COMPONENT_NAME_RAW);

const PreselectedComponent = COMPONENTS[COMPONENT_NAME || "ErrorNotFoundComponent"];

ReactDOM.render(
    <Base>
        <PreselectedComponent {...COMPONENT_PROPS} />
    </Base>,
    document.getElementById("app_root")
);
