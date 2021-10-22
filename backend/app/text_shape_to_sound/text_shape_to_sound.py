import numpy as np
from app.synthesis.synthesizers import generate_sine_wave
from app.data_processing.text import get_average_length_of_whitespace_per_line

def text_shape_to_sound(text):
    """
    :param text: String of text
    :return: Numpy array of samples representing the sonification of a text based on its shape
    """
    samples = np.array([])

    base_freq = 440
    average_length_of_whitespace_per_line = get_average_length_of_whitespace_per_line(text)
    num_lines = len(average_length_of_whitespace_per_line)
    base_audio_freq = abs(base_freq - num_lines * 20)
    base_wave = generate_sine_wave(base_audio_freq, 1)

    for average_length_of_whitespace in average_length_of_whitespace_per_line:
        secondary_freq = base_audio_freq - max(20 - average_length_of_whitespace, 0)
        secondary_wave = generate_sine_wave(secondary_freq, 1)
        combined_wave = base_wave + secondary_wave
        samples = np.hstack((samples, combined_wave))

    return samples


