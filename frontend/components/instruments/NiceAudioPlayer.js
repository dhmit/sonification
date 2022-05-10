import React, {useState, useEffect} from "react";

const NiceAudioPlayer = ({audioUrl}) => {
    const [audioPlayer] = useState(new Audio(audioUrl));
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
    return (<div>
        <button onClick={toggleAudio}>
            <span className="code">
                {playing
                    ? '⏸'
                    : '▶'
                }
            </span>
        </button>
    </div>);
};

export default NiceAudioPlayer;
