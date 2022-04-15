export const createAudioContextWithCompressor = () => {
    const audioCtx = new AudioContext();
    const compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    compressor.connect(audioCtx.destination);
    return {audioCtx, compressor};
};
