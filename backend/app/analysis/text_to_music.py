import numpy as np
from nltk.tokenize import sent_tokenize

from app.common import SAMPLE_CONVERSION_VAL, DEFAULT_SAMPLE_RATE, clean_text, hack_add_one
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
    updated_neutral = hack_add_one(sentiment["neu"])
    base_frequency = 400
    rounding_frequency = 350

    note_frequency = synths.calculate_note_frequency(base_frequency, rounding_frequency, pos_diff,
                                               updated_neutral)

    # get time steps for the sample
    sample_rate = DEFAULT_SAMPLE_RATE
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * sample_rate, False)

    # generate sine wave notes
    note = np.sin(note_frequency * time_steps * 2 * np.pi)

    # concatenate notes
    audio = note
    # normalize to 16-bit range
    audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)

    return audio, sample_rate


def sonify_text(text):
    """
    An alternative method for turning text into sound based on note intervals.

    :param text: String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """

    sample_rate = DEFAULT_SAMPLE_RATE
    full_audio = []
    sentences = sent_tokenize(text)
    for sentence in sentences:
        notes = synths.get_notes_from_text(sentence)
        durations = encode.get_durations_of_notes(notes)
        sentiment = encode.get_sentiment(text)

        full_audio += synths.sonify(notes, durations, sentiment, sample_rate)

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    return full_audio, sample_rate


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
        sin_wave, sample_rate = synths.convert_piano_key_num_to_sin_wave(piano_key)
        sin_waves_list.append(sin_wave)

    audio = synths.convert_sin_waves_to_audio(sin_waves_list)
    return audio, sample_rate
