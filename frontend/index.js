// Libraries
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Our imports
import "./scss/index.scss";
import Base from "./components/global/Base";
import ErrorNotFoundComponent from "./components/global/ErrorNotFoundComponent";
import ExampleId from "./components/global/ExampleId";
import SummerPrototypes from "./components/summerPrototypes/SummerPrototypes";
import Home from "./components/Home";
import TextShapeAnalysis from "./components/textShapeToSound/TextShapeAnalysis";
import GesturesToSound from "./components/gestureToSound/GesturesToSound";
import SynthesizePolygons from './components/synthesizePolygons/SynthesizePolygons';
import TimeSeries from "./components/timeSeries/TimeSeries";
import ColorSonifier from "./components/color/ColorSonifier";
import PlaybackDemo from "./components/instruments/PlaybackDemo";
import RatioCSV from "./components/timeSeries/RatioCSV";

// Register each new view component here
const COMPONENTS = {
    ErrorNotFoundComponent,
    ExampleId,
    Home,
    SummerPrototypes,
    TextShapeAnalysis,
    GesturesToSound,
    SynthesizePolygons,
    TimeSeries,
    ColorSonifier,
    PlaybackDemo,
    RatioCSV,
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
