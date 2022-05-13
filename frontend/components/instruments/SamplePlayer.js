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

/**
 * Create callbacks to start and stop audio for a list of samples.
 *
 * @param {list} samples list of base64-encoded audio samples
 * @param {object} audioContext audioContext for the controlling component
 * @param {boolean} loop should the sample loop?
 * @returns {list} list where each index holds a list of two functions where the first will
 *                  make a call to start the audio and the second will make a call to stop it.
 */
export const createAudioCallbacks = (samples, audioContext, loop=false) => {
    const compressor = audioContext.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    compressor.connect(audioContext.destination);

    const buffers = samples.map(sample => sampleBase64StrToArrayBuffer(sample));

    const startCallbacks = [];
    const endCallbacks = [];
    const unmuteCallbacks = [];

    buffers.forEach(buffer => {
        const gainNode = audioContext.createGain();
        gainNode.connect(compressor);

        let audioSource;

        const lopassFilter = audioContext.createBiquadFilter();
        lopassFilter.connect(gainNode);  //
        lopassFilter.frequency.setValueAtTime(2000, audioContext.currentTime);
        lopassFilter.gain.setValueAtTime(25, audioContext.currentTime);

        const startCallback = () => {
            if(audioContext.state !== 'running') audioContext.resume();
            gainNode.gain.setTargetAtTime(1, 0, 1);
            audioSource = audioContext.createBufferSource();
            audioSource.loop = loop;
            audioSource.connect(gainNode);

            audioContext.decodeAudioData(
                buffer.slice(0),
                (b) => {
                    audioSource.buffer = b;
                    audioSource.start(0);
                }
            );
        };

        const endCallback = () => {
            gainNode.gain.setTargetAtTime(0, 0, 0.075);
        };

        const unmuteCallback = () => {
            gainNode.gain.setTargetAtTime(1, 0, .075);
        };

        startCallbacks.push(startCallback);
        endCallbacks.push(endCallback);
        unmuteCallbacks.push(unmuteCallback);
    });

    return [startCallbacks, endCallbacks, unmuteCallbacks];
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
    compressor,
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
        audioGainNode.connect(compressor);

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
        audioGainNode.gain.linearRampToValueAtTime(volume / 100, audioContext.currentTime);
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
