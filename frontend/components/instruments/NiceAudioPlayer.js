import React, {useState, useEffect} from "react";
import STYLES from "./NiceAudioPlayer.module.scss";

const NiceAudioPlayer = ({src, text, onPlayCallback}) => {
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
            className={playing ? STYLES.niceAudioPlayerPlaying : STYLES.niceAudioPlayer}
        >
            <div className="row">
                <div className="col-2 mr-0">
                    <span className="code">
                        {playing
                            ? '⏸'
                            : '▶'
                        }
                    </span>
                </div>
                <div className="col-10 text-left">
                    {text}
                </div>
            </div>
        </button>
    );
};

export default NiceAudioPlayer;
