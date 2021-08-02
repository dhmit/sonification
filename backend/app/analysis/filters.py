""""
Various filtering functions to apply to audio waves (represented as int16 numpy arrays)
"""

import numpy as np
from backend.app.analysis import *


def change_volume(audio, amplitude):
    """
    :param audio: An int16 NumPy array representing a list of samples
    :param amplitude: An int representing the factor increase or decrease in volume
    :return: A new int16 NumPy array with a modified amplitude.
    """

    # new_audio = amplitude * audio

    return amplitude * audio


def change_speed(audio, sample_rate=44100):
    """
    :param audio: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def add_chords(audio, sample_rate=44100):
    """
    :param audio: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def overlap_notes(audio, sample_rate=44100):
    """
    :param audio: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate


def change_quality(audio, sample_rate=44100):
    """
    :param audio: An int16 NumPy array representing a list of samples
    :param sample_rate: An int representing a sample rate in Hz
    """

    return audio, sample_rate
