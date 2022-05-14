import React, {useState, useRef, useEffect} from "react";
import * as PropTypes from "prop-types";
import PlayIcon from "../../images/icons/play.svg";
import StopIcon from "../../images/icons/stop.svg";


export const PlayToggleButton = ({onClick, playing, extraClass, simpleButton, text}) =>
    <button
        onClick={onClick}
        className={playing
            ? `audio-player audio-player-on ${extraClass}`
            : `audio-player ${extraClass}`}>
        {simpleButton
            ? <>{text}</>

            :
            <div className="row">
                <div className="col-2 mr-0 ml-2">
                            <span className="icon-audio">
                                {playing
                                    ? <StopIcon className="icon-stop" fill={"#44616B"}/>
                                    : <PlayIcon className="icon-play" fill={"#44616B"}/>
                                }
                            </span>
                </div>
                <div className="col-9 my-auto text-left align-right">
                    {text}
                </div>
            </div>}
    </button>
;

const NiceAudioPlayer = ({src, text, extraClass="", audioContextRef, compressorRef, onPlayCallback}) => {
    const [audioPlayer] = useState(new Audio(src));
    const [playing, setPlaying] = useState(false);
    const toggleAudio = () => setPlaying(!playing);
    const simpleButton = extraClass && extraClass.indexOf("btn-sonification") > -1;


    // NOTE(ra): we can optionally pass a ref to an AudioContext here,
    // so that we can pass all of these on a page through a single compressor.
    // If we pass an AudioContext, we also have to pass its compressor.
    const mediaElementSourceRef = useRef();
    if (audioContextRef && !mediaElementSourceRef.current) {
        mediaElementSourceRef.current =
            audioContextRef.current.createMediaElementSource(audioPlayer);
        const gainNode = audioContextRef.current.createGain();
        gainNode.connect(compressorRef.current);
        mediaElementSourceRef.current.connect(gainNode);
    }

    useEffect(() => {
        if (playing) {
            if (audioContextRef && audioContextRef.current.state !== 'running') {
                audioContextRef.current.resume();
            }
            audioPlayer.play();
            if (onPlayCallback) onPlayCallback();
        } else {
            audioPlayer.pause();
        }
    }, [playing]);


    useEffect(() => {
        audioPlayer.addEventListener('ended', () => setPlaying(false));
        return () => {
            audioPlayer.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return (
        <PlayToggleButton
            onClick={toggleAudio}
            playing={playing}
            extraClass={extraClass}
            simpleButton={simpleButton}
            text={text}
        />
    );
};



NiceAudioPlayer.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
    extraClass: PropTypes.string,
    onPlayCallback: PropTypes.func,
    audioContextRef: PropTypes.object,
    compressorRef: PropTypes.object,
};

export default NiceAudioPlayer;
