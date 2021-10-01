"""
Throughout our project, on the backend we handle audio as numpy arrays of amplitudes of a waveform.
We use 44100 samples per second (44.1 kHz), but the amplitude of each sample is unbounded.

This module handles transformation from that numpy array into a WAV file,
which involves normalizing the amplitude to the range of a 16-bit integer.

It also handles base64 encoding that WAV file, so we can send it to the frontend as part
of our JSON payload.

For more information on what's going on here, check out:
https://wiki.hydrogenaud.io/index.php?title=Sampling_rate
for a nice visualization of how a WAV file represents a sound wave.

See also:
https://docs.fileformat.com/audio/wav/
for the anatomy of a WAV file
"""

import base64
import io
import numpy as np
from scipy.io import wavfile

# We assume 44100 samples per second throughout our project,
# which is the standard sample rate for CD audio.
WAV_SAMPLE_RATE = 44100
# 16-bit audio has a max amplitude of 32767 per sample,
# which is the maximum value of a 16-bit signed integer
WAV_MAX_SAMPLE_AMPLITUDE = 32767


def normalize_audio_samples_to_16_bit_range(audio_samples):
    """
    Normalizes the input audio samples to the 16-bit range for WAV file output.

    :param audio_samples: 1D numpy array of audio samples
    :return: normalized_audio: 1D numpy array of audio samples in 16-bit range
    """
    # TODO(ra): test me!
    normalized_audio = audio_samples / np.max(np.abs(audio_samples))  # normalize from 0 to 1
    normalized_audio *= WAV_MAX_SAMPLE_AMPLITUDE  # Normalize to 16-bit WAV sample range
    normalized_audio = normalized_audio.astype(np.int16)  # tell numpy that this is 16-bit int data
    return normalized_audio


def audio_samples_to_wav_base64(audio_samples):
    """
    This is the public interface to _wav_samples_to_base64, which does the actual work of
    base64 encoding our WAV samples. This function adds the assumption that we're using our
    default, 44.1 kHz sample rate, and normalizes each sample to the 16-bit amplitude range.

    :param audio_samples: 1D NumPy array representing the list of samples
    """
    normalized_audio_samples = normalize_audio_samples_to_16_bit_range(audio_samples)
    return _audio_samples_to_wav_base64(normalized_audio_samples, WAV_SAMPLE_RATE)


def _audio_samples_to_wav_base64(audio_samples, sample_rate):
    """
    Encode the WAV byte array into a base64 encoded WAV file that we can send to the frontend.

    NOTE(ra): We have this private version of this function where we take the sample rate
              as an argument, rather than assuming 44.1 kHz in order to be able
              to write human-readable, sensible tests. (See tests.WavToBase64TestCase)

              The public interface to this is the above function audio_samples_to_wav_base64, which
              assumes 44.1 kHz sampling.

    :param audio_samples: NumPy array representing the list of samples.
    :param sample_rate: int, the sampling rate in Hz
    :return: base64 encoding of the given array as a str
    """
    byte_io = io.BytesIO(bytes())  # bytes buffer to write into
    wavfile.write(byte_io, sample_rate, audio_samples)  # write audio into this buffer in WAV format
    wav_bytes = byte_io.read()  # read the buffer
    base64_wav = base64.b64encode(wav_bytes)  # base64 encode the wav file
    utf8_base64_wav = base64_wav.decode('UTF-8')  # UTF-8 decode the base64 encoded wav file
    return utf8_base64_wav
