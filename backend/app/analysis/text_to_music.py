import numpy as np
from nltk.tokenize import sent_tokenize

from app.common import SAMPLE_CONVERSION_VAL, DEFAULT_SAMPLE_RATE, clean_text
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
    note_freq = encode.get_note_freq_from_sentiment(sentiment)

    # get time steps for the sample
    sample_rate = DEFAULT_SAMPLE_RATE
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * sample_rate, False)

    # generate sine wave notes
    note = np.sin(note_freq * time_steps * 2 * np.pi)

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
