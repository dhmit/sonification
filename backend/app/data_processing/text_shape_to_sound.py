import random
from matplotlib import pyplot as plt
import numpy as np
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE
from app.synthesis.audio_encoding import _audio_samples_to_wav_base64
from text import get_average_length_of_whitespace_per_line
import base64


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


def text_shape_to_sound(text):
    """
    :param text: String of text
    :return: Numpy array of samples representing the sonification of the shape of text
    """
    samples = np.array([])

    base_freq = 440
    avg_contig_spaces_list = get_average_length_of_whitespace_per_line(text)
    num_lines = len(avg_contig_spaces_list)
    base_audio_freq = abs(base_freq - num_lines * 20)
    base_wave = generate_sine_wave(base_audio_freq, 1)

    print(avg_contig_spaces_list)

    for avg_spaces in avg_contig_spaces_list:
        secondary_freq = base_audio_freq - avg_spaces
        secondary_wave = generate_sine_wave(secondary_freq, 1)
        constructive_wave = base_wave + secondary_wave
        samples = np.hstack((samples, constructive_wave))
    return samples


# beat = generate_sine_wave(440, 5) + generate_sine_wave(442, 5)
# x = [i for i in range(len(beat))]

text = "                     Wanna be a                   fish.\n" \
       "             Have a slick fish head.             Spread\n" \
       "      Fish jam on my fish bread. All's      good 'round\n" \
       "  My bowl today. Don't like it? I'll swim away. Bubbles\n" \
       "For my friends. Swim loops without end. Shiny treasure\n" \
       "  Chest. A castle of my own. Plastic kelp fully grown.\n" \
       "      If I was a fish, I'd be the best,not   copper,not\n" \
       "              Bronze, not silver.              I'd be a\n" \
       "                      Gold                         Fish."

text2= "Bridge\n" \
      "We hike up to the creek\n" \
      "but we cannot get across.\n" \
      "We listen as it laughs at us.\n" \
      "We linger on moist moss.\n" \
      "\n" \
      "We take the dare\n" \
      "to build a bridge.\n" \
      "Rock-by-rock\n" \
      "                we\n" \
      "                      steady\n" \
      "stones\n" \
      "      for\n" \
      "         sneaker-stepping.\n" \
      "In time\n" \
      "our bridge is ready.\n" \
      "\n" \
      "We giggle with the water\n" \
      "in its creek bed cool and wide\n" \
      "proud we worked together\n" \
      "to reach the other side.\n"

beat = text_shape_to_sound(text)

music = _audio_samples_to_wav_base64(beat, 44100)

wav_file = open("temp.wav", "wb")
decode_string = base64.b64decode(music)
wav_file.write(decode_string)
wav_file.close()
