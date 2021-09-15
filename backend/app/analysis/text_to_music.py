"""
Transform text to sound
"""
import numpy as np
from nltk.tokenize import sent_tokenize

from app.common import WAV_SAMPLE_RATE, clean_text, normalize_audio_to_16_bit_range
from app.analysis import encoders as encode
from app.analysis import synthesizers as synths


def text_to_note(text):
    """
    Sonify a text into a note.
    :param text: Takes in a String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    cleaned_text = clean_text(text)
    sentiment = encode.get_sentiment(cleaned_text)

    pos_diff = encode.get_pos_diff_from_sentiment(sentiment)
    updated_neutral = sentiment["neu"] + 1
    base_frequency = 400
    rounding_frequency = 350

    note_frequency = synths.calculate_note_frequency(base_frequency,
                                                     rounding_frequency, pos_diff,
                                                     updated_neutral)

    # get time steps for the sample
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * WAV_SAMPLE_RATE, False)

    # generate sine wave notes
    audio = np.sin(note_frequency * time_steps * 2 * np.pi)
    return normalize_audio_to_16_bit_range(audio)


def sonify_text(text):
    """
    An alternative method for turning text into sound based on note intervals.

    :param text: String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    full_audio = []
    sentences = sent_tokenize(text)
    for sentence in sentences:
        notes = synths.get_notes_from_text(sentence)
        durations = encode.get_durations_of_notes(notes)
        sentiment = encode.get_sentiment(text)

        full_audio += synths.sonify(notes, durations, sentiment)

    return normalize_audio_to_16_bit_range(full_audio)


def sonify_text_2(text):
    """
    Takes text, runs NLTK's sentiment analyzer, and then returns a sound object.
    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param text: A str representing some input text
    :return: A tuple of audio data containing an int16 NumPy array of samples
    and a sample rate in Hz (int).
    """
    sentences = encode.get_tokenized_sentences(text)
    sin_waves_list = []
    for sentence in sentences:
        sentiment = encode.get_sentiment(sentence)
        piano_key = encode.convert_sentiment_to_piano_key_num(sentiment['compound'])
        sin_wave = synths.convert_piano_key_num_to_sin_wave(piano_key)
        sin_waves_list.append(sin_wave)

    audio = synths.convert_sin_waves_to_audio(sin_waves_list)
    return audio
