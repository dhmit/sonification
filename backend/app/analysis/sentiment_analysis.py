import wave
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import numpy as np
import simpleaudio as sa

def text_to_sound(user_text):
    """
    Takes text, runs NLTK's sentiment analyzer, and then returns a sound object
    """

    nltk_analyzer = SentimentIntensityAnalyzer()
    all_sentences = nltk.sent_tokenize(user_text)

    all_scores = []
    for each_sentence in all_sentences:
        all_scores.append(nltk_analyzer.polarity_scores(each_sentence)["compound"]*15)

    all_frequencies = []
    for each_score in all_scores:
        frequency = 440*(2**(each_score/12))
        all_frequencies.append(frequency)

    sample_rate = 44100
    T = 1
    t = np.linspace(0, T, T * sample_rate, False)

    all_notes = []
    for each_freq in all_frequencies:
        all_notes.append(np.sin(each_freq * t * 2 * np.pi))

    audio = np.hstack(all_notes)
    audio *= 32767 / np.max(np.abs(audio))
    audio = audio.astype(np.int16)
    wave_obj = sa.WaveObject(audio, 1, 2, 44100)

    obj = wave.open("sentiment_analysis.wav", 'w')
    obj.setnchannels(1)
    obj.setframerate(sample_rate)
    obj.setsampwidth(2)
    obj.writeframes(audio)
    obj.close()

    return wave_obj

text_to_sound("This is awesome. This is good. This is bad. This is an atom.")

