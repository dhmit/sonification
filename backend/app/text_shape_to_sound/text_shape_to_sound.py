import numpy as np
from app.synthesis.synthesizers import generate_sine_wave
from app.data_processing.text import get_average_length_of_whitespace_per_line


def text_shape_to_sound(text, base_freq=440, max_beat_freq=20, secs_per_line=1,
                        higher_second_freq=False):
    """
    :param text: String of text
    :param base_freq: integer representing the base frequency in Hertz
    :param max_beat_freq: integer representing the maximum beat frequency in Hertz
    :param secs_per_line: integer representing the length of the sound of each line in seconds
    :param higher_second_freq: boolean representing whether the second frequency will be higher
    than the base frequency
    :return: Numpy array of samples representing the sonification of a text based on its shape
    """
    samples = np.array([])

    base_audio_freq = base_freq
    average_length_of_whitespace_per_line = get_average_length_of_whitespace_per_line(text)
    base_wave = generate_sine_wave(base_audio_freq, secs_per_line)

    for average_length_of_whitespace in average_length_of_whitespace_per_line:
        delta_freq = max(max_beat_freq - average_length_of_whitespace, 0)
        secondary_freq = base_audio_freq - (1 - int(higher_second_freq)) * delta_freq + int(
            higher_second_freq) * delta_freq
        secondary_wave = generate_sine_wave(secondary_freq, secs_per_line)
        combined_wave = base_wave + secondary_wave
        samples = np.hstack((samples, combined_wave))

    return samples
