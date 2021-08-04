import string
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import numpy as np
from scipy.io import wavfile
import io
import base64
from nltk.tokenize import sent_tokenize
import random

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
    :param text: a string of text
    :return score: sentiment analysis of the text
    """
    # Convert text to lowercase
    lower_case = text.lower()
    # Removing punctuations
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(cleaned_text)
    return score


def _generate_note_frequency(score_positive, score_negative, score_neutral):
    base_frequency = 400
    rounding_frequency = 350
    base_percentage = 1
    positivity_differential = score_positive - score_negative
    rounded_neutral_score = base_percentage + score_neutral
    return base_frequency + positivity_differential * rounding_frequency * rounded_neutral_score


def text_to_note(text):
    """
    :param text: Takes in a string of text
    :return _wav_to_base64(audio, sample_rate): base64 encoding of a sound based on how negative or positive the text is
    """
    score = _analyse_sentiment(text)
    note_freq = _generate_note_frequency(score["pos"], score["neg"], score["neu"])

    # get time steps for the sample
    sample_rate = 44100
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * sample_rate, False)

    # generate sine wave notes
    note = np.sin(note_freq * time_steps * 2 * np.pi)

    # concatenate notes
    audio = note
    # normalize to 16-bit range
    audio *= 32767 / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)

    return _wav_to_base64(audio, sample_rate)


def _get_other_freq(positive_score, neutral_score, negative_score, current_freq):
    """
    :param positive_score: positivity score of a sentence
    :param neutral_score: neutrality score of a sentence
    :param negative_score: negativity score of a sentence
    :param current_freq: the frequency of a given note
    :return other_freq: frequency for another note found from current_freq and a randomized ratio
    """
    if neutral_score > positive_score and neutral_score > negative_score:
        ratios = neutral_ratios
    elif positive_score > negative_score:
        ratios = consonant_ratios
    else:
        ratios = dissonant_ratios

    ratio = random.choices(ratios)[0]
    other_freq = current_freq * ratio[0] / ratio[1]
    return other_freq


def _get_notes(text):
    """
    :param text: a string of input text
    :return notes: a string of notes chosen randomly from musical characters in text
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
    :param notes: a list of notes
    :return output: a list with corresponding durations for each note in notes
    """
    output = [random.uniform(0.2, 0.8) for _ in notes]
    return output


def _sonify_sentence(text, sample_rate):
    """
    :param text: string of a sentence
    :param sample_rate: integer, the sampling rate
    :return audio: list of samples for this sentence
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


def text_to_sound(text):
    """
    :param text: a string of text
    :return _wav_to_base64(full_audio, sample_rate): base64 encoding of a sonification of text
    """

    sample_rate = 44100
    full_audio = []
    sentences = sent_tokenize(text)
    for sentence in sentences:
        full_audio += _sonify_sentence(sentence, sample_rate)

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= 32767 / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    return _wav_to_base64(full_audio, sample_rate)


def _wav_to_base64(byte_array, sample_rate):
    """
    Encode the WAV byte array with base64
    :param byte_array: int16 numpy array
    :param sample_rate: integer, the sampling rate
    :return audio_data: base64 encoding of the given array
    """
    byte_io = io.BytesIO(bytes())
    wavfile.write(byte_io, sample_rate, byte_array)
    wav_bytes = byte_io.read()
    audio_data = base64.b64encode(wav_bytes).decode('UTF-8')
    return audio_data
