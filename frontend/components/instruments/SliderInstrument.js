import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import Slider from "../inputs/Slider";

const sampleBase64StrToArrayBuffer = (sampleStr) => {
    // Load sample using createBufferSource of audio sample
    // NOTE(ra): Could do this via createMediaElementSource instead - maybe simpler. Not sure.
    const byte_str = atob(sampleStr);
    const buffer = new ArrayBuffer(byte_str.length * 2);
    const buffer_view = new Uint8Array(buffer);
    for (let i = 0; i < byte_str.length; i++) {
        buffer_view[i] = byte_str.charCodeAt(i);
    }
    return buffer;
};

const SamplePlayer = ({
    isPlaying,
    loop,
    sample,
    volume,
}) => {
    const audioContextRef = useRef(new AudioContext());
    const audioSourceRef = useRef(null);
    const audioGainNodeRef = useRef(audioContextRef.current.createGain());
    const previousPlayState = useRef(isPlaying);
    const [shouldSetupAudio, setShouldSetupAudio] = useState(true);

    const setupAudioRouting = () => {
        const audioContext = audioContextRef.current;

        const audioGainNode = audioGainNodeRef.current;
        audioGainNode.connect(audioContext.destination);

        const audioSource = audioContext.createBufferSource();
        audioSourceRef.current = audioSource;
        audioSource.loop = loop;
        audioSource.connect(audioGainNode);
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


    return null;  // this component doesn't render anything!
};

SamplePlayer.propTypes = {
    isPlaying: PropTypes.bool,
    loop: PropTypes.bool,
    sample: PropTypes.string,
    volume: PropTypes.number,
};


const SamplePlayerSliderPlayer = ({
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
SamplePlayerSliderPlayer.propTypes = {
    sample: PropTypes.string,
    index: PropTypes.number,
    isPlaying: PropTypes.bool,
};


const AudioTagSliderPlayer = ({
    sample,
    isPlaying,
    index,
}) => {
    const audioTagRef = useRef(null);

    const adjustAudioVolume = (newValue) => {
        const audioTag = audioTagRef.current;
        audioTag.volume = newValue / 100;
    };

    const audioElementId = `audio-${index}`;

    const audioTag = audioTagRef.current;
    if (audioTag) {
        if (isPlaying && audioTag.paused) {
            audioTag.play();
        } else {
            audioTag.pause();
            audioTag.currentTime = 0;
        }
    }

    return (<>
        <audio
            loop
            id={audioElementId}
            src={`data:audio/wav;base64,${sample}`}
            controlsList="nodownload"
            ref={audioTagRef}
        />
        <Slider
            id={index}
            onChangeFunction={(newValue) => adjustAudioVolume(newValue)}
        />
    </>);
};
AudioTagSliderPlayer.propTypes = {
    sample: PropTypes.string,
    index: PropTypes.number,
    isPlaying: PropTypes.bool,
};


const SliderInstrument = ({samples}) => {
    if (samples === null) { return ('Waiting to load data to create an instrument.'); }

    const [isPlaying, setIsPlaying] = useState(false);
    const toggleAudio = () => setIsPlaying(!isPlaying);

    const controllers = [];
    for (let i = 0; i < samples.length; i++) {
        controllers.push(
            <li className="list-inline-item" key={i} >
                <SamplePlayerSliderPlayer
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
