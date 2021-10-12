"""
Methods for creating sound!
"""

import numpy as np
import math

from app.common import NOTE_FREQ_SIMPLE
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE


def generate_sine_wave(frequency, duration):
    """
    Generates audio samples for a sine wave at a given frequency and duration

    :param frequency:  frequency in Hz
    :param duration:   duration in seconds
    :return: audio samples for the sine wave
    """
    num_samples = int(duration * WAV_SAMPLE_RATE)
    time_steps = np.linspace(0, duration, num=num_samples, retstep=False)
    sine_wave_samples = np.sin(frequency * 2 * np.pi * time_steps)
    return sine_wave_samples


# pylint: disable-msg=R0913
def generate_sine_wave_with_envelope(frequency, duration,
                                     a_percentage=0.1, d_percentage=0.1,
                                     s_percentage=0.1, r_percentage=0.7):
    # pylint: disable-msg=R0914
    """
    Uses the ADSR (Attack, Decay, Sustain, Release) envelope
    to generate a note that fades in and out
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency of the note in Hz
    :param duration: duration in seconds
    :param a_percentage: attack
    :param d_percentage: decay
    :param s_percentage: sustain
    :param r_percentage: release
    :return audio_samples: list of samples for the note
    """

    peak_weight = 1
    sustain_weight = peak_weight * 0.7
    final_weight = 0

    try:
        assert math.isclose(a_percentage + d_percentage + s_percentage + r_percentage, 1.0)
    except AssertionError:
        print("ADSR percentages should add up to 1")

    total_num_samples = int(duration * WAV_SAMPLE_RATE)
    len_a = int(a_percentage * total_num_samples)
    len_d = int(d_percentage * total_num_samples)
    len_s = int(s_percentage * total_num_samples)
    len_r = int(r_percentage * total_num_samples)
    len_r += total_num_samples - len_a - len_d - len_s - len_r  # account for any rounding error

    def quadratic_growth(x, max_x):
        return 2 ** (x / max_x) - 1

    def quadratic_decay(x, max_x):
        return 2 ** (1 - x / max_x) - 1

    # Compute weights for the attack portion of the audio
    a_weights = [
        peak_weight * quadratic_growth(x, len_a)
        for x in range(len_a)
    ]

    # Compute weights for the decay portion of the audio
    d_weights = [
        sustain_weight
        + (peak_weight - sustain_weight) * quadratic_decay(x, len_d)
        for x in range(len_d)
    ]

    # Fill out length of the sustain portion with the sustain weight
    s_weights = [sustain_weight for _ in range(len_s)]

    # Compute weights for the release portion of the audio
    r_weights = [
        final_weight + sustain_weight * quadratic_decay(x, len_r)
        for x in range(len_r)
    ]

    # Concatenate weights for the full envelope
    adsr_envelope_weights = np.array(a_weights + d_weights + s_weights + r_weights)

    sine_wave_samples = generate_sine_wave(frequency, duration)

    # apply the envelope weights to the generated sine wave
    audio_samples_with_adsr_envelope = sine_wave_samples * adsr_envelope_weights

    return audio_samples_with_adsr_envelope


def convert_piano_key_num_to_sin_wave(piano_key):
    """
    Calculates the frequency of a musical note using A4 (440 Hz) as the base note
    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param piano_key: integer from 0 to 88
    :return sin_wave, sample_rate
    """
    a4_note = NOTE_FREQ_SIMPLE['a']
    duration = 1
    frequency = a4_note * (2 ** ((piano_key + 1 - 49) / 12))
    return generate_sine_wave(frequency, duration)
