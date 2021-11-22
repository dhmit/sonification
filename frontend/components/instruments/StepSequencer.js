import React, {useState, useRef} from "react";
import SamplePlayer from "./SamplePlayer";

class StepSequencer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drums: [false, true, false],
        };
    }

    updateDrum = () => {
        //stop playing
    }

    playSound = () => {
        for (let i = 0; i < this.state.drums.length; i++) {
            if (this.state.drums[i]) {
                // audio.play();
            } else {
                // setTimeout(doNothing(), 500);
            }
        }
    }

}


export default StepSequencer;
