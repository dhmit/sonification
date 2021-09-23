"""
Methods for creating sound!
"""

import random
import numpy as np
from app.common import (
    MUSICAL_CHARS, NOTE_FREQ_SIMPLE, DISSONANT_RATIOS, NEUTRAL_RATIOS,
    CONSONANT_RATIOS, lookup_note_frequency
)

from .audio_encoding import WAV_SAMPLE_RATE



def calculate_note_frequency(base_frequency, rounding_frequency, positivity_differential,
                             neutral_score):
    """
    TODO: define function string
    :param base_frequency:
    :param rounding_frequency:
    :param positivity_differential:
    :param neutral_score:
    :return:
    """
    return base_frequency + positivity_differential * rounding_frequency * neutral_score


def generate_note(frequency, duration):
    # pylint: disable-msg=R0914
    """
    Uses the ADSR (Attack, Decay, Sustain, Release) envelope to
    generate a note that fades in and out realistically
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :return note: list of samples for the note
    """
    # TODO(ra): these should all be params that we can modify in a call
    a_percentage = 0.1  # attack
    d_percentage = 0.1  # decay
    s_percentage = 0.1  # sustain
    r_percentage = 0.7  # release
    peak_weight = 1
    sustain_weight = 0.7
    final_weight = 0

    total_length = duration * WAV_SAMPLE_RATE
    len_a = int(a_percentage * total_length)
    len_d = int(d_percentage * total_length)
    len_s = int(s_percentage * total_length)
    len_r = int(r_percentage * total_length)

    a_weights = [peak_weight * (2 ** (x / len_a) - 1) for x in range(len_a)]
    d_weights = [sustain_weight + (peak_weight - sustain_weight) * (2 ** (1 - x / len_d) - 1) for x
                 in range(len_d)]
    s_weights = [sustain_weight for _ in range(len_s)]
    r_weights = [final_weight + sustain_weight * (2 ** (1 - x / len_r) - 1) for x in range(len_r)]

    all_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    time_steps = np.linspace(0, duration, (len_a + len_d + len_s + len_r), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * all_weights

    return note




def convert_piano_key_num_to_sin_wave(piano_key):
    """
    formula calculates the frequency of a musical note using A4 as the base note
    the score is the nth key starting from key 0 being A0 (hence the extra +1)
    the exact middle of the piano is between key 43 (E4) and 44 (F4) if A0 is the zeroth note
    thus, a neutral score should generate an F4 note

    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param piano_key: integer from 0 to 88
    :return sin_wave, sample_rate
    """
    a4_note = NOTE_FREQ_SIMPLE['a']
    duration = 1
    time_axis = np.linspace(0, duration, duration * WAV_SAMPLE_RATE, False)
    frequency = a4_note * (2 ** ((piano_key + 1 - 49) / 12))
    sin_wave = np.sin(2 * np.pi * frequency * time_axis)
    return sin_wave
