"""
Methods for creating sound!
"""
import math
import numpy as np
from scipy import signal

from app.common import NOTE_FREQ_SIMPLE
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE


def quadratic_growth(x, max_x):
    return 2 ** (x / max_x) - 1

def quadratic_decay(x, max_x):
    return 2 ** (1 - x / max_x) - 1

def apply_envelope(samples, sustain_gain, a=10/100, d=20/100, s=60/100, r=10/100):
    num_samples = len(samples)
    len_a = int(a * num_samples)
    len_d = int(d * num_samples)
    len_s = int(s * num_samples)
    len_r = int(r * num_samples)
    len_r += num_samples - len_a - len_d - len_s - len_r  # account for any rounding error

    peak_gain = 1
    final_gain = 0

    # Compute weights for the attack portion of the audio
    a_weights = [
        peak_gain * quadratic_growth(x, len_a)
        for x in range(len_a)
    ]

    # Compute weights for the decay portion of the audio
    d_weights = [
        sustain_gain
        + (peak_gain - sustain_gain) * quadratic_decay(x, len_d)
        for x in range(len_d)
    ]

    # Fill out length of the sustain portion with the sustain weight
    s_weights = [sustain_gain for _ in range(len_s)]

    # Compute weights for the release portion of the audio
    r_weights = [
        final_gain + sustain_gain * quadratic_decay(x, len_r)
        for x in range(len_r)
    ]

    # Concatenate weights for the full envelope
    adsr_envelope_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    return samples * adsr_envelope_weights

def generate_wave_weighted_harmonics(frequency, duration, harmonic_weights):
    '''
    Create a wave from the addition of weighted harmonics of a given frequency.
    '''
    num_samples = int(duration * WAV_SAMPLE_RATE)
    wave = np.zeros(num_samples)

    for i, weight in enumerate(harmonic_weights):
        print(i)
        harmonic_wave = generate_sine_wave(frequency*(i+1), duration)
        wave += weight*harmonic_wave

    # normalize
    norm = sum(harmonic_weights)
    if norm != 0:
        wave /= norm

    wave = apply_envelope(wave, 0.7, a=0.2, d=0.1, s=0.6, r=0.1)

    return wave


def interp_envelope(duration, t, mags):
    '''
    Interpolates a time-varying envelope to fit an audio signal.
    :param duration:    duration of the envelope signal (in seconds)
    :param t:           times of each envelope sample (in seconds)
    :param mags:        magnitudes of the envelope at the given times
    '''
    num_samples = int(duration * WAV_SAMPLE_RATE)
    time_steps = np.linspace(0, duration, num=num_samples, retstep=False)

    mag_interp = np.interp(time_steps, t, mags)
    return mag_interp


def generate_wave_phase_mod(duration, t, freq):
    '''
    Generates an audio signal from a time-varying frequency signal.
    :param duration:    duration of the frequency signal (in seconds)
    :param t:           times of each frequency sample (in seconds)
    :param freq:        frequency signal (in Hz)
    '''
    num_samples = int(duration * WAV_SAMPLE_RATE)
    time_steps = np.linspace(0, duration, num=num_samples, retstep=False)

    dt = time_steps[1] - time_steps[0]
    # interpolate frequencies to fit sampling times
    freq_interp = np.interp(time_steps, t, freq)
    phi = 2 * np.pi * np.cumsum(freq_interp) * dt

    wave_samples = np.sin(phi)
    return wave_samples


# pylint: disable=too-many-locals
def generate_wave(frequency, duration, harmonics=0, vibrato=False, wave_type=np.sin):
    """
    Generates audio samples for various wave types
    :param frequency: frequency in Hz
    :param duration:  duration in seconds
    :param harmonics: number of desired harmonics
    :param wave_type:  wave type
    :param vibrato: boolean for using vibrato or not
    :return: audio samples for wave of the given wave type
    """
    num_samples = int(duration * WAV_SAMPLE_RATE)
    time_steps = np.linspace(0, duration, num=num_samples, retstep=False)
    wave_samples = wave_type(frequency * 2 * np.pi * time_steps)

    if harmonics != 0:
        for i in range(harmonics):
            harmonic = np.sin(frequency * 2 * np.pi * time_steps * (i + 2))
            for j, _ in enumerate(wave_samples):
                wave_samples[j] += harmonic[j] * .3

    if vibrato:
        vibrato_changer = 5  # 5 is arbitrary, decrease for stronger vibrato
        copies = {}

        for c in range(20):
            copy = len(wave_samples) * [wave_samples[0] / vibrato_changer]
            for i in range(2000 * c, len(wave_samples)):
                if i < (len(wave_samples) - 1000):
                    copy[i] = (wave_samples[i - 2000 * c]) / vibrato_changer
                else:
                    copy[i] = 0

            copies[c] = copy

        for i, _ in enumerate(copies):
            wave_samples += copies[i]

    return wave_samples


def generate_sine_wave(frequency, duration, harmonics=0, vibrato=False):
    """
    Generates audio samples for a sine wave
    Wrapper for generate_wave, passing np.sin as the wave_type
    """
    sine_wave_samples = generate_wave(frequency, duration, harmonics, vibrato, np.sin)
    return sine_wave_samples


def generate_square_wave(frequency, duration, harmonics=0, vibrato=False):
    """
    Generates audio samples for a square wave
    Wrapper for generate_wave, passing signal.square as the wave_type
    """
    square_wave_samples = generate_wave(frequency, duration, harmonics, vibrato, signal.square)
    return square_wave_samples


def generate_sawtooth_wave(frequency, duration, harmonics=0, vibrato=False):
    """
    Generates audio samples for a sawtooth wave
    Wrapper for generate_wave, passing signal.sawtooth as the wave_type
    """
    sawtooth_wave_samples = generate_wave(frequency, duration, harmonics, vibrato, signal.sawtooth)
    return sawtooth_wave_samples


# pylint: disable-msg=R0913
def generate_wave_with_envelope(frequency, duration, a_percentage=0.1, d_percentage=0.1,
                                s_percentage=0.1, r_percentage=0.7, harmonics=0, vibrato=False,
                                wave_type=np.sin):
    # pylint: disable-msg=R0914
    """
    Uses the ADSR (Attack, Decay, Sustain, Release) envelope
    to generate a note that fades in and out
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency in Hz
    :param duration:  duration in seconds
    :param a_percentage: attack
    :param d_percentage: decay
    :param s_percentage: sustain
    :param r_percentage: release
    :param harmonics: number of desired harmonics
    :param vibrato: boolean for using vibrato or not
    :param wave_type: wave type
    :return:
    """
    sustain_gain = 0.7

    try:
        assert math.isclose(a_percentage + d_percentage + s_percentage + r_percentage, 1.0)
    except AssertionError:
        print("ADSR percentages should add up to 1")

    wave_samples = generate_wave(frequency, duration, harmonics, vibrato, wave_type)

    # apply the envelope weights to the generated sine wave
    audio_samples_with_adsr_envelope =\
        apply_envelope(wave_samples, 0.7, a_percentage, d_percentage, s_percentage, r_percentage)

    return audio_samples_with_adsr_envelope


# pylint: disable-msg=R0913
def generate_sine_wave_with_envelope(frequency, duration, a_percentage=0.1, d_percentage=0.1,
                                     s_percentage=0.1, r_percentage=0.7, harmonics=0,
                                     vibrato=False):
    # pylint: disable-msg=R0914
    """
    For a sine wave uses the ADSR (Attack, Decay, Sustain, Release) envelope
    to generate a note that fades in and out
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency of the note in Hz
    :param duration: duration in seconds
    :param a_percentage: attack
    :param d_percentage: decay
    :param s_percentage: sustain
    :param r_percentage: release
    :param harmonics: number of desired harmonics
    :param vibrato: boolean for using vibrato or not
    :return audio_samples: list of samples for the note
    """

    return generate_wave_with_envelope(frequency, duration, a_percentage, d_percentage,
                                       s_percentage, r_percentage, harmonics, vibrato, np.sin)


def generate_square_wave_with_envelope(frequency, duration, a_percentage=0.1, d_percentage=0.1,
                                       s_percentage=0.1, r_percentage=0.7, harmonics=0,
                                       vibrato=False):
    """
    Square wave with envelope created similarly to sine waves
    created by generate_sine_wave_with_envelope.
    """
    return generate_wave_with_envelope(frequency, duration, a_percentage, d_percentage,
                                       s_percentage, r_percentage, harmonics, vibrato,
                                       signal.square)


def generate_sawtooth_wave_with_envelope(frequency, duration, a_percentage=0.1, d_percentage=0.1,
                                         s_percentage=0.1, r_percentage=0.7, harmonics=0,
                                         vibrato=False):
    """
    Sawtooth wave with envelope created similarly to sine waves
    created by generate_sine_wave_with_envelope.
    """
    return generate_wave_with_envelope(frequency, duration, a_percentage, d_percentage,
                                       s_percentage, r_percentage, harmonics,
                                       vibrato, signal.sawtooth)


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
