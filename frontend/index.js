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
import GesturesToSound from "./components/GesturesToSound";

// Register each new view component here
const COMPONENTS = {
    ErrorNotFoundComponent,
    ExampleId,
    Home,
    SummerPrototypes,
    GesturesToSound,
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
