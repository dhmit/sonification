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
        notes: A list of 3-element tuples (freq, duration, score) for each note's frequency (Hz) and duration (s)
            in the audio, as well as the score used to acquire that note

    """
    A4 = 440
    sample_rate = 44100
    duration = 1
    t = np.linspace(0, duration, duration * sample_rate, False)

    nltk_analyzer = SentimentIntensityAnalyzer()
    all_sentences = nltk.sent_tokenize(user_text)

    sin_waves = []
    all_notes = []

    for each_sentence in all_sentences:
        # the compound score ranges from -1 to 1, this shifts the score so that there is no negative score
        # multiplying by 44 and rounding the score gives us a range of keys from 0 to 88
        score = round((nltk_analyzer.polarity_scores(each_sentence)['compound'] + 1) * 44)
        # formula calculates the frequency of a musical note using A4 as the base note
        # the score is the nth key starting from key 0 being A0
        frequency = A4 * (2 ** ((score + 1 - 49) / 12))
        sin_waves.append(np.sin(2 * np.pi * frequency * t))
        all_notes.append((frequency, duration, score))

    audio = np.hstack(sin_waves)
    audio *= 32767 / np.max(np.abs(audio))
    audio = audio.astype(np.int16)

    audio_metadata = {
        'audio_samples': audio,
        'sample_rate': sample_rate,
        'notes': all_notes
    }

    return audio_metadata
