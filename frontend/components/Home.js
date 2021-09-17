import React, {useState} from "react";
import PropTypes from "prop-types";
import UploadFileInput from "./UploadFileInput";
import Slider from "./Slider";


const Instrument = ({samples}) => {
    if (samples === null) { return ('Waiting to load data to create an instrument.'); }

    const [isPlaying, setIsPlaying] = useState(true);

    const adjustAudioVolume = (audioElementId, newValue) => {
        console.log(audioElementId);
        const audioTag = document.getElementById(audioElementId);
        console.log(audioTag);
        audioTag.volume = newValue / 100;
    };

    const toggleAudio = () => {
        const audios = document.querySelectorAll('audio');
        for (const audio of audios) {
            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        }
    };

    const controllers = [];
    for (let i = 0; i < samples.length; i++) {
        const audioElementId = `audio-${i}`;
        controllers.push(
            <li className="list-inline-item" key={i} >
                <audio
                    autoPlay
                    loop
                    id={audioElementId}
                    src={`data:audio/wav;base64,${samples[i]}`}
                    controlsList="nodownload"
                />
                <Slider
                    id={i}
                    onChangeFunction={(newValue) => adjustAudioVolume(audioElementId, newValue)}
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
Instrument.propTypes = {
    samples: PropTypes.array,
};

const Home = () => {
    const [instrumentSamples, setInstrumentSamples] = useState(null);

    return (
        <>
            <h2>Welcome to our Sonification toolkit!</h2>
            <UploadFileInput
                id={0}
                uploadSuccessfulCallback={setInstrumentSamples}
                apiEndpoint={'api/generate_instrument/'}
            />
            <Instrument
                samples={instrumentSamples}
            />
        </>
    );
};

export default Home;
