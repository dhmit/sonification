import nltk
import simpleaudio as sa
import string
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize
import numpy as np
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


def analyse_sentiment(text):
    """
    :param text: a string of text
    :return score: polarity analysis of the text
    """
    # Convert text to lowercase
    lower_case = text.lower()
    # Removing punctuations
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(cleaned_text)
    return score


def get_other_freq(score, current_freq):
    """
    :param score: the sentiment analysis score of a sentence
    :param current_freq: the frequency of a note
    :return other_freq: frequency for another note found from current_freq and a randomized ratio
    """
    if score['neu'] > score['pos'] and score['neu'] > score['neg']:
        ratios = neutral_ratios
    elif score['pos'] > score['neg']:
        ratios = consonant_ratios
    else:
        ratios = dissonant_ratios

    ratio = random.choices(ratios)[0]
    print(ratio)
    other_freq = current_freq*ratio[0]/(ratio[1]) if random.random() > 0.5 else current_freq*ratio[1]/(ratio[0])
    return other_freq


def get_notes(text):
    """
    :param text: a string of input text
    :return notes: a string of notes
    """
    notes = ""
    output_length = 4 if (len(text) > 30) else 2

    lower_case = text.lower()
    stripped_text = [char for char in lower_case if char in musical_chars]

    if len(stripped_text) == 0:
        notes = notes.join(random.choices(mc_list, k=output_length))
    elif len(stripped_text) < output_length:
        notes = notes.join(random.choices(mc_list, k=output_length-len(stripped_text))) + "".join(stripped_text)
    else:
        start = random.randint(0, len(stripped_text)-output_length)
        notes = notes.join(stripped_text[start:start+output_length])

    return notes


def get_durations(notes):
    """
    :param notes: a list of notes
    :return output: a list with corresponding durations
    """
    output = [random.uniform(0.3, 0.7) for _ in notes]
    return output


def sonify_sentence(text, sample_rate):
    """
    :param text: string of a sentence
    :param sample_rate: integer, the sampling rate
    :return audio: list of samples for this sentence
    """
    score = analyse_sentiment(text)
    notes = get_notes(text)
    durations = get_durations(notes)

    audio = []

    for index in range(len(notes)):
        duration = durations[index]
        note_freq = note_freqs[notes[index]]
        other_freq = get_other_freq(score, note_freq)

        time_steps = np.linspace(0, duration, int(duration * sample_rate), False)
        louder_note = np.sin(note_freq * time_steps * 2 * np.pi).tolist()
        quieter_note = np.sin(other_freq * time_steps * 2 * np.pi).tolist()

        audio += [louder_note[ind] + 0.75 * quieter_note[ind] for ind in range(len(time_steps))]

    return audio


def text_to_sound(text):
    """
    :param text: a string of text
    :return (full_audio, sample_rate): list of a sonification of text and its sample_rate
    """

    sample_rate = 44100
    full_audio = []
    sentences = sent_tokenize(text)
    for sentence in sentences:
        print("hi??")
        full_audio += sonify_sentence(sentence, sample_rate)

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= 32767 / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    # start playback
    play_obj = sa.play_buffer(full_audio, 1, 2, sample_rate)

    # wait for playback to finish before exiting
    play_obj.wait_done()

    return full_audio.tolist(), sample_rate
