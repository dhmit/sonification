import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import numpy as np

nltk.download('punkt')
nltk.download('vader_lexicon')


def text_to_sound(user_text):
    """
    Takes text, runs NLTK's sentiment analyzer, and then returns a sound object.
    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param user_text: A str representing some input text
    :return: A tuple of audio data containing an int16 NumPy array of samples
    and a sample rate in Hz (int).
    """
    A4 = 440
    sample_rate = 44100
    duration = 1
    t = np.linspace(0, duration, duration * sample_rate, False)

    nltk_analyzer = SentimentIntensityAnalyzer()
    all_sentences = nltk.sent_tokenize(user_text)

    sin_waves = []

    for each_sentence in all_sentences:
        # the compound score ranges from -1 to 1, this shifts the score
        # so that there is no negative score multiplying by 44 and rounding the score gives us
        # a range of keys from 0 to 88
        score = round((nltk_analyzer.polarity_scores(each_sentence)['compound'] + 1) * 44)

        # formula calculates the frequency of a musical note using A4 as the base note
        # the score is the nth key starting from key 0 being A0 (hence the extra +1)
        # the exact middle of the piano is between key 43 (E4) and 44 (F4) if A0 is the zeroth note
        # thus, a neutral score should generate an F4 note
        frequency = A4 * (2 ** ((score + 1 - 49) / 12))
        sin_waves.append(np.sin(2 * np.pi * frequency * t))

    audio = np.hstack(sin_waves)
    audio *= 32767 / np.max(np.abs(audio))
    audio = audio.astype(np.int16)

    return audio, sample_rate
