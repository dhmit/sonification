import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import numpy as np


def text_to_sound(user_text):
    """
    Takes text, runs NLTK's sentiment analyzer, and then returns a sound object

    :param user_text: A str representing some input text
    :return: A dictionary of audio metadata with the following keys:
        audio_samples: An int16 Numpy array
        sample_rate: An int, recorded in Hz
        notes: A list of 2-element tuples (freq, duration) for each note's frequency (Hz) and duration (s) in the audio

    """
    A4 = 440
    sample_rate = 44100
    T = 1
    t = np.linspace(0, T, T * sample_rate, False)

    nltk_analyzer = SentimentIntensityAnalyzer()
    all_sentences = nltk.sent_tokenize(user_text)

    sin_waves = []
    all_notes = []

    for each_sentence in all_sentences:
        score = round((nltk_analyzer.polarity_scores(each_sentence)['compound'] + 1) * 44)
        frequency = A4 * (2 ** ((score + 1 - 49) / 12))
        sin_waves.append(np.sin(2 * np.pi * frequency * t))
        all_notes.append((score, frequency, T))

    audio = np.hstack(sin_waves)
    audio *= 32767 / np.max(np.abs(audio))
    audio = audio.astype(np.int16)

    audio_metadata = {
        'audio_samples': audio,
        'sample_rate': sample_rate,
        'notes': all_notes
    }

    return audio_metadata
