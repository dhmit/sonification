export const createAudioContextWithCompressor = () => {
    const audioCtx = new AudioContext();
    const compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.value = -75;
    compressor.knee.value = 40;
    compressor.ratio.value = 20;
    compressor.attack.value = 0;
    compressor.release.value = 1;
    compressor.connect(audioCtx.destination);
    return {audioCtx, compressor};
};
