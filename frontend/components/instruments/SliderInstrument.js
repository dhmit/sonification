import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import Slider from "../inputs/Slider";

/*
 * Takes base64-encoded wav files and converts them to an ArrayBuffer
 * of the decoded data, which what AudioBufferSourceNode needs to consume
 */
const sampleBase64StrToArrayBuffer = (sampleStr) => {
    const byte_str = atob(sampleStr);
    const buffer = new ArrayBuffer(byte_str.length * 2);
    const buffer_view = new Uint8Array(buffer);
    for (let i = 0; i < byte_str.length; i++) {
        buffer_view[i] = byte_str.charCodeAt(i);
    }
    return buffer;
};


/*
 * An audio playback component that plays a single sample using the Web Audio API
 */
const SamplePlayer = ({
    isPlaying,
    loop,
    sample,
    volume,
}) => {
    // TODO(ra): probably we want the AudioContext to live in the container component,
    //           so we can apply compression to the whole thing.
    const audioContextRef = useRef(new AudioContext());
    const audioSourceRef = useRef(null);
    const audioGainNodeRef = useRef(audioContextRef.current.createGain());
    const previousPlayState = useRef(isPlaying);
    const [shouldSetupAudio, setShouldSetupAudio] = useState(true);

    const setupAudioRouting = () => {
        const audioContext = audioContextRef.current;

        const audioGainNode = audioGainNodeRef.current;
        audioGainNode.connect(audioContext.destination);

        // NOTE(ra): Could do this via createMediaElementSource instead - maybe simpler. Not sure.
        const audioSource = audioContext.createBufferSource();
        audioSourceRef.current = audioSource;
        audioSource.loop = loop;
        audioSource.connect(audioGainNode);

        // AudioBufferSourceNode is a single-use object: once the buffer plays once, we have to
        // throw it away and do this audio setup again.
        audioSource.onended = () => setShouldSetupAudio(true);

        const audioBuffer = sampleBase64StrToArrayBuffer(sample);
        audioContext.decodeAudioData(audioBuffer, (buffer) => { audioSource.buffer = buffer; });
        setShouldSetupAudio(false);
    };

    useEffect(() => {
        if (shouldSetupAudio) { setupAudioRouting(); }
        const audioSource = audioSourceRef.current;
        if (isPlaying) {
            audioSource.start(0);
        } else if (previousPlayState.current) {
            audioSource.stop();
        }
        previousPlayState.current = isPlaying;
    }, [isPlaying, sample, loop]);

    useEffect(() => {
        const audioGainNode = audioGainNodeRef.current;
        const audioContext = audioContextRef.current;
        audioGainNode.gain.setValueAtTime(volume / 100, audioContext.currentTime);
    }, [volume]);

    return null;  // this component doesn't render any UI!
};

SamplePlayer.propTypes = {
    isPlaying: PropTypes.bool,
    loop: PropTypes.bool,
    sample: PropTypes.string,
    volume: PropTypes.number,
};


/*
 * A simple playback component with a slider volume control
 */
const SliderPlayer = ({
    sample,
    isPlaying,
    index,
}) => {
    const [volume, setVolume] = useState(100);
    return (<>
        <SamplePlayer
            loop={true}
            sample={sample}
            volume={volume}
            isPlaying={isPlaying}
        />
        <Slider
            id={index}
            onChangeFunction={(newValue) => setVolume(parseFloat(newValue))}
        />
    </>);
};
SliderPlayer.propTypes = {
    sample: PropTypes.string,
    index: PropTypes.number,
    isPlaying: PropTypes.bool,
};


/*
 * A basic instrument: takes in a bunch of samples, and
 * provides sliders for playing loops with stop/start controls.
 */
const SliderInstrument = ({samples}) => {
    if (samples === null) { return ('Waiting to load data to create an instrument.'); }

    const [isPlaying, setIsPlaying] = useState(false);
    const toggleAudio = () => setIsPlaying(!isPlaying);

    const controllers = [];
    for (let i = 0; i < samples.length; i++) {
        controllers.push(
            <li className="list-unstyled" key={i} >
                <SliderPlayer
                    key={i}
                    index={i}
                    sample={samples[i]}
                    isPlaying={isPlaying}
                    loop={true}
                />
            </li>);
    }

    return (
        <div>
            {controllers}
            <button onClick={() => toggleAudio()}>
                {isPlaying ? 'Stop' : 'Play'}
            </button>
        </div>
    );
};
SliderInstrument.propTypes = {
    samples: PropTypes.array,
};

export default SliderInstrument;
