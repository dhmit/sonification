import React, {useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import PlayIcon from "../../images/icons/play.svg";
import StopIcon from "../../images/icons/stop.svg";

const NiceAudioPlayer = ({src, text, extraClass, onPlayCallback}) => {
    const [audioPlayer] = useState(new Audio(src));
    const [playing, setPlaying] = useState(false);
    const toggleAudio = () => setPlaying(!playing);

    useEffect(() => {
        if (playing) {
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

    // TODO(ra): Playback icon design
    return (
        <button
            onClick={toggleAudio}
            className={playing
                ? `audio-player audio-player-on ${extraClass}`
                : `audio-player ${extraClass}`}>
            <div className="row">
                <div className="col-2 mr-0 ml-2">
                    <span className="play-icon">
                        {playing
                            ? <StopIcon fill={"#44616B"}/>
                            : <PlayIcon fill={"#44616B"}/>
                        }
                    </span>
                </div>
                <div className="col-9 text-left align-right">
                    {text}
                </div>
            </div>
        </button>
    );
};

NiceAudioPlayer.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
    extraClass: PropTypes.string
};

export default NiceAudioPlayer;
