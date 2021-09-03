import random
import numpy as np
from nltk.tokenize import sent_tokenize

from ..common import SAMPLE_CONVERSION_VAL, DEFAULT_SAMPLE_RATE, MUSICAL_CHARS, NOTE_FREQS, DISSONANT_RATIOS, \
    NEUTRAL_RATIOS, CONSONANT_RATIOS
from ..analysis import encoders as encode
from ..analysis import synthesizers as synths
from ..analysis import helpers

# frequencies found from https://pages.mtu.edu/~suits/notefreqs.html
# using our common dictionary
note_freqs = {
    'a': NOTE_FREQS['A4'],
    'b': NOTE_FREQS['B4'],
    'c': NOTE_FREQS['C5'],
    'd': NOTE_FREQS['D5'],
    'e': NOTE_FREQS['E4'],
    'f': NOTE_FREQS['F4'],
    'g': NOTE_FREQS['G4']
}


def text_to_note(text):
    """
    Sonify a text into a note.
    :param text: Takes in a String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    cleaned_text = helpers.clean_text(text)
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


def _get_ratio(positive_score, neutral_score, negative_score):
    """
    Returns a list of neutral ratios if the score is mostly neutral, consonant ratios
    if the score is more positive, and dissonant ratios otherwise
    :param positive_score: positivity score of a sentence
    :param neutral_score: neutrality score of a sentence
    :param negative_score: negativity score of a sentence
    :return ratios: List containing neutral, consonant, or dissonant ratios
    """
    if neutral_score > positive_score and neutral_score > negative_score:
        ratios = NEUTRAL_RATIOS
    elif positive_score > negative_score:
        ratios = CONSONANT_RATIOS
    else:
        ratios = DISSONANT_RATIOS

    return ratios


def _get_other_freq(positive_score, neutral_score, negative_score, current_freq):
    """
    :param positive_score: positivity score of a sentence
    :param neutral_score: neutrality score of a sentence
    :param negative_score: negativity score of a sentence
    :param current_freq: Float, frequency of a given note
    :return other_freq: Float, frequency for another note found from current_freq and a randomized ratio
    """
    ratios = _get_ratio(positive_score, neutral_score, negative_score)

    ratio = random.choices(ratios)[0]
    other_freq = current_freq * ratio[0] / ratio[1]
    return other_freq


def _get_durations(notes):
    """
    :param notes: List of notes
    :return output: List with corresponding durations for each note in notes
    """
    output = [random.uniform(0.2, 0.8) for _ in notes]
    return output


def _sonify_sentence(text, sample_rate):
    """
    :param text: String of a sentence
    :param sample_rate: Integer, the sampling rate
    :return audio: List of samples for this sentence
    """
    quieter_note_loudness = 0.6
    notes = synths.get_notes_from_text(text)
    durations = _get_durations(notes)
    score = encode.get_sentiment(text)

    audio = []
    for index in range(len(notes)):
        duration = durations[index]
        louder_note_freq = note_freqs[notes[index]]
        quieter_note_freq = _get_other_freq(score['pos'], score['neu'], score['neg'], louder_note_freq)

        time_steps = np.linspace(0, duration, int(duration * sample_rate), False)
        louder_note = np.sin(louder_note_freq * time_steps * 2 * np.pi).tolist()
        quieter_note = np.sin(quieter_note_freq * time_steps * 2 * np.pi).tolist()

        audio += [louder_note[ind] + quieter_note_loudness * quieter_note[ind] for ind in range(len(time_steps))]

    return audio


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
        full_audio += _sonify_sentence(sentence, sample_rate)

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    return full_audio, sample_rate
