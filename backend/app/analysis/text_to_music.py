import nltk
import simpleaudio as sa
import string
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import numpy as np


def analyse_sentiment(text):
    """
    :param text: a string of text
    :return: analysis of the text
    """
    # Convert text to lowercase
    lower_case = text.lower()
    # Removing punctuations
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(text)
    return score


def text_to_note(text):
    """
    :param text: Takes in a string of text
    :return: A sound based on how negative or positive the text is.
    """
    score = analyse_sentiment(text)
    Note_freq = 400 + (score["pos"] - score["neg"]) * 350 * (1 + score["neu"])

    # get timesteps for the sample, T is note duration in seconds
    sample_rate = 44100
    T = 1
    t = np.linspace(0, T, T * sample_rate, False)

    # generate sine wave notes
    Note = np.sin(Note_freq * t * 2 * np.pi)

    # concatenate notes
    audio = Note
    # normalize to 16-bit range
    audio *= 32767 / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)

    return audio, sample_rate