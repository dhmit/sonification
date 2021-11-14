import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import SamplePlayer from "./SamplePlayer";
import STYLES from "./DrumMachine.module.scss";

let dragged;
    document.addEventListener("drag", function(event) {
    }, false);

    document.addEventListener("dragstart", function(event) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function(event) {
      // reset the transparency
      event.target.style.opacity = "";
    }, false);

    document.addEventListener("dragover", function(event) {
      // prevent default to allow drop
      event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function(event) {
      // highlight potential drop target when the draggable element enters it
      if (event.target.className === "dropzone") {
        event.target.style.background = "purple";
      }
    }, false);

    document.addEventListener("dragleave", function(event) {
      // reset background of potential drop target when the draggable element leaves it
      if (event.target.className === "dropzone") {
        event.target.style.background = "";
      }
    }, false);

    document.addEventListener("drop", function(event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.className === "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
      }
    }, false);

const DrumPlayer = ({sample, audioContext}) => {
    const [shouldPlay, setShouldPlay] = useState(false);



    const handleClick = () => {
        setShouldPlay(true);
        // TODO(ra): dynamically set to length of sample, or allow retriggers shorter than that
        setTimeout(() => {setShouldPlay(false); }, 1000);
    };

    return (<>
        <button className={STYLES.dragSample}
                id="draggable" draggable="true"
                onDragStart="event.dataTransfer.setData('text/plain',null)"
                onClick={handleClick}/>

        <SamplePlayer
            sample={sample}
            shouldPlay={shouldPlay}
            loop={false}
            volume={100}
            audioContext={audioContext}
        />
    </>);
};
DrumPlayer.propTypes = {
    sample: PropTypes.string,
    audioContext: PropTypes.object,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides buttons that the user can click to trigger the sample.
 */
const DrumMachine = ({samples}) => {
    const audioContextRef = useRef(new AudioContext());


    return (
        <div id="step-sequencer">
            {samples.map((sample, i) => (
                <DrumPlayer
                    key={i}
                    sample={sample}
                    audioContext={audioContextRef.current}
                />
            ))}
            <br></br>&emsp;&emsp;
            <button className="dropzone"/>&emsp;&emsp;&emsp;&emsp;
            <button className="dropzone"/>&emsp;&emsp;&emsp;&emsp;
            <button className="dropzone"/>&emsp;&emsp;&emsp;&emsp;
            <button className="dropzone"/>&emsp;&emsp;
        </div>
    );
};

DrumMachine.propTypes = {
    samples: PropTypes.array,
};

export default DrumMachine;

/*
var dragged;

COMMENT events fired on the draggable target
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

COMMENT events fired on the drop targets
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

*/
