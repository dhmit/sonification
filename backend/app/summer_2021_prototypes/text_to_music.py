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

# Dictionary copied from the table in this web page: <https://pages.mtu.edu/~suits/notefreqs.html>
NOTE_FREQS = {
    'C0': 16.35,
    'C#0/Db0': 17.32,
    'D0': 18.35,
    'D#0/Eb0': 19.45,
    'E0': 20.60,
    'F0': 21.83,
    'F#0/Gb0': 23.12,
    'G0': 24.50,
    'G#0/Ab0': 25.96,
    'A0': 27.50,
    'A#0/Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.70,
    'C#1/Db1': 34.65,
    'D1': 36.71,
    'D#1/Eb1': 38.89,
    'E1': 41.20,
    'F1': 43.65,
    'F#1/Gb1': 46.25,
    'G1': 49.00,
    'G#1/Ab1': 51.91,
    'A1': 55.00,
    'A#1/Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'C#2/Db2': 69.30,
    'D2': 73.42,
    'D#2/Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'F#2/Gb2': 92.50,
    'G2': 98.00,
    'G#2/Ab2': 103.83,
    'A2': 110.00,
    'A#2/Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3/Db3': 138.59,
    'D3': 146.83,
    'D#3/Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3/Gb3': 185.00,
    'G3': 196.00,
    'G#3/Ab3': 207.65,
    'A3': 220.00,
    'A#3/Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4/Db4': 277.18,
    'D4': 293.66,
    'D#4/Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4/Gb4': 369.99,
    'G4': 392.00,
    'G#4/Ab4': 415.30,
    'A4': 440.00,
    'A#4/Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5/Db5': 554.37,
    'D5': 587.33,
    'D#5/Eb5': 622.25,
    'E5': 659.25,
    'F5': 698.46,
    'F#5/Gb5': 739.99,
    'G5': 783.99,
    'G#5/Ab5': 830.61,
    'A5': 880.00,
    'A#5/Bb5': 932.33,
    'B5': 987.77,
    'C6': 1046.50,
    'C#6/Db6': 1108.73,
    'D6': 1174.66,
    'D#6/Eb6': 1244.51,
    'E6': 1318.51,
    'F6': 1396.91,
    'F#6/Gb6': 1479.98,
    'G6': 1567.98,
    'G#6/Ab6': 1661.22,
    'A6': 1760.00,
    'B6': 1975.53,
    'C7': 2093.00,
    'C#7/Db7': 2217.46,
    'D7': 2349.32,
    'D#7/Eb7': 2489.02,
    'E7': 2637.02,
    'F7': 2793.83,
    'F#7/Gb7': 2959.96,
    'G7': 3135.96,
    'G#7/Ab7': 3322.44,
    'A7': 3520.00,
    'A#7/Bb7': 3729.31,
    'B7': 3951.07,
    'C8': 4186.01,
    'C#8/Db8': 4434.92,
    'D8': 4698.63,
    'D#8/Eb8': 4978.03,
    'E8': 5724.04,
    'F8': 5587.65,
    'F#8/Gb8': 5919.91,
    'G8': 6271.93,
    'G#8/Ab8': 6644.88,
    'A8': 7040.00,
    'A#8/Bb8': 7458.62,
    'B8': 7902.13
}


# a simplified dict using our above complex dictionary
NOTE_FREQ_SIMPLE = {
    'a': NOTE_FREQS['A4'],
    'b': NOTE_FREQS['B4'],
    'c': NOTE_FREQS['C5'],
    'd': NOTE_FREQS['D5'],
    'e': NOTE_FREQS['E4'],
    'f': NOTE_FREQS['F4'],
    'g': NOTE_FREQS['G4']
}


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

    note_frequency = synths.calculate_note_frequency(base_frequency,
                                                     rounding_frequency, pos_diff,
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
    sentiment scores from nltk's sentiment analyzer range from -1 to 1.
    This method shifts the number so that there is no negative, multiplies by 44,
     and rounds to an int from 0 to 88 (keys on a piano)
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


def lookup_note_frequency(note):
    """
    :param note: letter (a-g)
    :return: float
    """
    if note in NOTE_FREQ_SIMPLE:
        return NOTE_FREQ_SIMPLE[note]
    else:
        raise Exception(f"Error: {note} not found in note dict")


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
