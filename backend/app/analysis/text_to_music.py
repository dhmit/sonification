import random
import string
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import numpy as np
from nltk.tokenize import sent_tokenize

from ..common import SAMPLE_CONVERSION_VAL, DEFAULT_SAMPLE_RATE

musical_chars = {'a', 'b', 'c', 'd', 'e', 'f', 'g'}
mc_list = list(musical_chars)

# frequencies found from https://pages.mtu.edu/~suits/notefreqs.html
note_freqs = {
    'a': 440,
    'b': 494,
    'c': 523,
    'd': 587,
    'e': 330,
    'f': 349,
    'g': 392
}

# Ratios found from Wikipedia
# (https://en.wikipedia.org/wiki/Consonance_and_dissonance#/media/File:Dyadic_harmonic_entropy_graph_(optimized_for_low_resolution).png)
dissonant_ratios = [(5, 6), (4, 7), (5, 8), (5, 7), (6, 7)]
neutral_ratios = [(3, 4), (3, 5), (4, 5)]
consonant_ratios = [(1, 2), (2, 3)]


def _analyse_sentiment(text):
    """
    :param text: String of text
    :return score: Dict, sentiment analysis of the text
    """
    # Convert text to lowercase
    lower_case = text.lower()
    # Removing punctuations
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(cleaned_text)
    return score


def _generate_note_frequency(score_positive, score_negative, score_neutral):
    """
    :param score_positive: positivity score of a sentence
    :param score_negative: negativity score of a sentence
    :param score_neutral: neutrality score of a sentence
    :return: Float, frequency for a note
    """
    base_frequency = 400
    rounding_frequency = 350
    base_percentage = 1
    positivity_differential = score_positive - score_negative
    rounded_neutral_score = base_percentage + score_neutral
    return base_frequency + positivity_differential * rounding_frequency * rounded_neutral_score


def text_to_note(text):
    """
    Sonify a text into a note.
    :param text: Takes in a String of text
    :return: A tuple with a 1D NumPy array and a positive number representing a sonification of text
    """
    score = _analyse_sentiment(text)
    note_freq = _generate_note_frequency(score["pos"], score["neg"], score["neu"])

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
        ratios = neutral_ratios
    elif positive_score > negative_score:
        ratios = consonant_ratios
    else:
        ratios = dissonant_ratios

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


def _get_notes(text):
    """
    :param text: String of input text
    :return notes: String of notes chosen randomly from musical characters in text
    """
    notes = ""
    output_length = 4 if (len(text) > 30) else 2

    lower_case = text.lower()
    stripped_text = [char for char in lower_case if char in musical_chars]

    if len(stripped_text) == 0:
        notes = notes.join(random.choices(mc_list, k=output_length))
    elif len(stripped_text) < output_length:
        notes = notes.join(random.choices(mc_list, k=output_length - len(stripped_text))) + "".join(stripped_text)
    else:
        start = random.randint(0, len(stripped_text) - output_length)
        notes = notes.join(stripped_text[start:start + output_length])

    return notes


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
    notes = _get_notes(text)
    durations = _get_durations(notes)
    score = _analyse_sentiment(text)

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
