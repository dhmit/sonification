// Libraries
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {normalizeAudioContext} from "./AudioContextMonkeyPatch";

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
import ColorExploratorium from "./components/color/ColorExploratorium";
import PlaybackDemo from "./components/instruments/PlaybackDemo";
import {NumbersDemoBefore, NumbersDemoAfter} from "./components/numbersDemo/Numbers";
import TimeSeriesExploratorium from "./components/timeSeries/TimeSeriesExploratorium";
import PolygonExploratorium from "./components/synthesizePolygons/PolygonExploratorium";
import GesturesExploratorium from "./components/gestureToSound/GesturesExploratorium";

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
    NumbersDemoBefore,
    NumbersDemoAfter,
    ColorExploratorium,
    TimeSeriesExploratorium,
    PolygonExploratorium,
    GesturesExploratorium,
};

// Safari and Firefox support AudioContext fixes, basically
normalizeAudioContext();

// Here, we take the data for our components specified by Django in our views.py file,
// and we parse it to hand off to React
const COMPONENT_PROPS_RAW = document.getElementById("component_props").text;
const COMPONENT_NAME_RAW = document.getElementById("component_name").text;
const COMPONENT_PROPS = JSON.parse(COMPONENT_PROPS_RAW);
const COMPONENT_NAME = JSON.parse(COMPONENT_NAME_RAW);

const PreselectedComponent = COMPONENTS[COMPONENT_NAME || "ErrorNotFoundComponent"];

let components;

if (COMPONENT_PROPS['overrideBase']) {
    components = <PreselectedComponent {...COMPONENT_PROPS} />;
} else {
    components = <Base><PreselectedComponent {...COMPONENT_PROPS} /></Base>;
}

ReactDOM.render(
    components,
    document.getElementById("app_root")
);
