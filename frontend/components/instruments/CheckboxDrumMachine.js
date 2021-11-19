import React, {useState, useRef} from "react";
import SamplePlayer from "./SamplePlayer";

class CheckboxDrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drums: [false, true, false]
        };
    }
}


export default CheckboxDrumMachine;
