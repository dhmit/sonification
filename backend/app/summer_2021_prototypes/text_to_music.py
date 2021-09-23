"""
Transform text to sound
"""
import random

import numpy as np
from nltk.tokenize import sent_tokenize

from app.data_processing import text as text_processing
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE
from app.synthesis import synthesizers as synths


# Constants used only in this module
SHORT_NOTE_DURATION = 0.2
LONG_NOTE_DURATION = 0.8
NUM_OF_PIANO_KEYS = 88
MUSICAL_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# Ratios found from Wikipedia https://tinyurl.com/56cj5rh5 (wiki link that's too long)
DISSONANT_RATIOS = [(5, 6), (4, 7), (5, 8), (5, 7), (6, 7)]
NEUTRAL_RATIOS = [(3, 4), (3, 5), (4, 5)]
CONSONANT_RATIOS = [(1, 2), (2, 3)]

def get_ratios_from_sentiment(sentiment):
    """
    Returns a list of neutral ratios if the score is mostly neutral, consonant ratios
    if the score is more positive, and dissonant ratios otherwise
    :param sentiment: Dict of negative, positive, neutral, and compound values
    :return ratios: List containing neutral, consonant, or dissonant ratios
    """
    if sentiment["neu"] > sentiment["pos"] and sentiment["neu"] > sentiment["neg"]:
        return NEUTRAL_RATIOS
    elif sentiment["pos"] > sentiment["neg"]:
        return CONSONANT_RATIOS
    else:
        return DISSONANT_RATIOS


def apply_ratio_to_frequency(ratio, frequency):
    """
    :param ratio: tuple
    :param frequency: float
    :return: new frequency
    """
    return frequency * ratio[0] / ratio[1]


def get_note_frequency(sentiment, frequency):
    """
    :param sentiment: Either None or dict of negative, positive, neutral, and compound values
    :param frequency: a float
    :return return a new frequency modified by a ratio (which is based on sentiment)
    """
    ratios = get_ratios_from_sentiment(sentiment)

    ratio = random.choices(ratios)[0]
    new_frequency = apply_ratio_to_frequency(ratio, frequency)
    return new_frequency


def calculate_note_frequency_from_sentiment_differential(
    base_frequency,
    rounding_frequency,
    positivity_differential,
    neutral_score
):
    """
    TODO: define function string
    :param base_frequency:
    :param rounding_frequency:
    :param positivity_differential:
    :param neutral_score:
    :return:
    """
    return base_frequency + positivity_differential * rounding_frequency * neutral_score


def text_to_note(text):
    """
    Sonify a text into a note.
    :param text: Takes in a String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    cleaned_text = text_processing.clean_text(text)
    sentiment = text_processing.get_sentiment(cleaned_text)

    pos_diff = text_processing.get_pos_diff_from_sentiment(sentiment)
    updated_neutral = sentiment["neu"] + 1
    base_frequency = 400
    rounding_frequency = 350

    note_frequency = calculate_note_frequency_from_sentiment_differential(base_frequency,
                                                                          rounding_frequency,
                                                                          pos_diff,
                                                                          updated_neutral)

    # get time steps for the sample
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * WAV_SAMPLE_RATE, False)

    # generate sine wave notes
    audio = np.sin(note_frequency * time_steps * 2 * np.pi)
    return audio


def get_durations_of_notes(notes):
    """
    :param notes: List of notes
    :return List with corresponding randomly chosen durations for each note in notes
    """
    return [random.uniform(SHORT_NOTE_DURATION, LONG_NOTE_DURATION) for _ in notes]


def convert_sentiment_to_piano_key_num(sentiment_value):
    """
    Sentiment scores from nltk's sentiment analyzer range from -1 to 1.

    This method shifts the number so that there is no negative, multiplies by 44,
    and rounds to an int from 0 to 88 (the number of keys on a piano)

    Since the score is the nth key starting from key 0 being A0 (hence the extra +1)
    the exact middle of the piano is between key 43 (E4) and 44 (F4) if A0 is the zeroth note

    :param sentiment_value: a value from -1 to 1
    :return: a number from 0 to 88
    """
    return round((sentiment_value + 1) * NUM_OF_PIANO_KEYS / 2)


def get_notes_from_text(text):
    """
    :param text: String of input text
    :return notes: String of notes chosen randomly from musical characters in text
    """
    notes = ""

    # TODO: explain the following
    output_length = 4 if (len(text) > 30) else 2

    lower_case = text.lower()
    stripped_text = [char for char in lower_case if char in MUSICAL_CHARS]

    if len(stripped_text) == 0:
        notes = notes.join(random.choices(MUSICAL_CHARS, k=output_length))
    elif len(stripped_text) < output_length:
        notes = (
            notes.join(random.choices(MUSICAL_CHARS, k=output_length - len(stripped_text)))
            + "".join(stripped_text)
        )
    else:
        start = random.randint(0, len(stripped_text) - output_length)
        notes = notes.join(stripped_text[start:start + output_length])

    return notes


def sonify_sentiment(notes, durations, sentiment):
    """
    Takes in list of notes, durations, and sentiment, and returns audio
    :param notes: List of floats
    :param durations: Corresponding list of durations for notes
    :param sentiment: Dict of sentiment values
    :return audio: List of samples for collection of notes
    """
    quieter_note_loudness = 0.6
    audio = []

    for index, _ in enumerate(notes):
        duration = durations[index]
        louder_note_freq = lookup_note_frequency(notes[index])
        quieter_note_freq = get_note_frequency(sentiment, louder_note_freq)

        time_steps = np.linspace(0, duration, int(duration * WAV_SAMPLE_RATE), False)
        louder_note = np.sin(louder_note_freq * time_steps * 2 * np.pi).tolist()
        quieter_note = np.sin(quieter_note_freq * time_steps * 2 * np.pi).tolist()

        audio += [louder_note[ind] + quieter_note_loudness * quieter_note[ind] for ind in
                  range(len(time_steps))]

    return audio


def sonify_text(text):
    """
    An alternative method for turning text into sound based on note intervals.

    :param text: String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    full_audio = []
    sentences = sent_tokenize(text)
    for sentence in sentences:
        notes = get_notes_from_text(sentence)
        durations = get_durations_of_notes(notes)
        sentiment = text_processing.get_sentiment(text)

        full_audio += sonify_sentiment(notes, durations, sentiment)

    return full_audio


def sonify_text_2(text):
    """
    Takes text, runs NLTK's sentiment analyzer, and then returns a sound object.
    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param text: A str representing some input text
    :return: A tuple of audio data containing an int16 NumPy array of samples
    and a sample rate in Hz (int).
    """
    sentences = text_processing.get_tokenized_sentences(text)
    sin_waves_list = []

    for sentence in sentences:
        sentiment = text_processing.get_sentiment(sentence)
        piano_key = convert_sentiment_to_piano_key_num(sentiment['compound'])
        sin_wave = synths.convert_piano_key_num_to_sin_wave(piano_key)
        sin_waves_list.append(sin_wave)

    audio = np.hstack(sin_waves_list)
    return audio
