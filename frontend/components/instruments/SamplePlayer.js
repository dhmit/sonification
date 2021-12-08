import {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

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
    shouldPlay,
    loop,
    sample,
    volume,
    audioContext,
}) => {
    if (!sample) return null;

    const audioSourceRef = useRef(null);
    const audioGainNodeRef = useRef(audioContext.createGain());
    // save a ref to the audio buffer so we can cache between reloads
    const audioBuffer = useRef(sampleBase64StrToArrayBuffer(sample));
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldSetupAudio, setShouldSetupAudio] = useState(true);


    const setupAudioRouting = () => {
        const audioGainNode = audioGainNodeRef.current;
        audioGainNode.connect(audioContext.destination);

        // NOTE(ra): Could do this via createMediaElementSource instead - maybe simpler. Not sure.
        const audioSource = audioContext.createBufferSource();
        audioSourceRef.current = audioSource;
        audioSource.loop = loop;
        audioSource.connect(audioGainNode);

        // AudioBufferSourceNode is a single-use object: once the buffer plays once, we have to
        // throw it away and do this audio setup again.
        audioSource.onended = () => {
            setShouldSetupAudio(true);
            setIsPlaying(false);
        };

        audioContext.decodeAudioData(
            // decodeAudioData detaches the buffer when complete, preventing reuse
            // so we pass a _copy_ of the cached value in the ref,
            // to avoid having to reconvert to an ArrayBuffer everytime
            audioBuffer.current.slice(0),
            (buffer) => { audioSource.buffer = buffer; }
        );
        setShouldSetupAudio(false);
    };


    useEffect(() => {
        setupAudioRouting();
    }, [sample]);

    useEffect(() => {
        if (shouldSetupAudio) { setupAudioRouting(); }
        const audioSource = audioSourceRef.current;
        if (shouldPlay && !isPlaying) {
            audioSource.start(0);
            setIsPlaying(true);
        } else if (!shouldPlay && isPlaying) {
            audioSource.stop();
            setIsPlaying(false);
        }
    }, [shouldPlay, sample, loop]);

    useEffect(() => {
        const audioGainNode = audioGainNodeRef.current;
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


export default SamplePlayer;
