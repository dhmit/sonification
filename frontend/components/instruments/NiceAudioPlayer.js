import React, {useState, useEffect} from "react";
import PlayIcon from "../../images/icons/play.svg";
import StopIcon from "../../images/icons/stop.svg";

const NiceAudioPlayer = ({src, text}) => {
    const [audioPlayer] = useState(new Audio(src));
    const [playing, setPlaying] = useState(false);
    const toggleAudio = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audioPlayer.play() : audioPlayer.pause();
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
            className={playing ? ".audio-player-on" : "audio-player"}>
            <div className="row">
                <div className="col-2 mr-0">
                    <span className="code">
                        {playing
                            ? <StopIcon fill={"#44616B"}/>
                            : <PlayIcon fill={"#44616B"}/>
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
