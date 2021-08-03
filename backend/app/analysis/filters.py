""""
Various filtering functions to apply to audio waves (represented as int16 numpy arrays)
"""

import numpy as np


def change_volume(audio_metadata, amplitude):
    """
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers.

    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param amplitude: An int representing the factor increase or decrease in volume
    :return: A Dict instance containing audio samples list with modified amplitudes, sample rate, and notes array
    """


    return (amplitude * audio).astype(np.int16)


def change_speed(audio_metadata, sample_rate=44100):
    """
    :param audio_metadata: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def add_chords(audio_metadata, sample_rate=44100):
    """
    :param audio_metadata: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def overlap_notes(audio_metadata, sample_rate=44100):
    """
    :param audio_metadata: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def change_quality(audio_metadata, sample_rate=44100):
    """
    :param audio_metadata: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate
