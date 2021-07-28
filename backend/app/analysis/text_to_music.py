import nltk
import simpleaudio as sa
import string
from nltk.sentiment.vader import SentimentIntensityAnalyzer
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


def get_notes(text):
    """
    :param text: a string of input text
    :return notes: a string of notes
    """
    notes = ""
    output_length = 4 if (len(text) > 125) else 2

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
    output = [random.uniform(0.25, 1.0) for _ in notes]
    return output


def text_to_sound(text):
    """
    :param text: a string of text
    :return output: a sonification of text as a sound object
    """
    score = analyse_sentiment(text)
    notes = get_notes(text)
    durations = get_durations(notes)

    sample_rate = 44100
    audio = []

    for index in range(len(notes)):
        duration = durations[index]
        note_freq = note_freqs[notes[index]]

        t = np.linspace(0, 1, int(duration * sample_rate), False)
        audio += np.sin(note_freq * t * 2 * np.pi).tolist()

    # normalize to 16-bit range
    audio = np.array(audio)
    audio *= 32767 / np.max(np.abs(audio))

    # convert to 16-bit data
    audio = audio.astype(np.int16)

    # start playback
    play_obj = sa.play_buffer(audio, 1, 2, sample_rate)

    # wait for playback to finish before exiting
    play_obj.wait_done()


def text_to_note(text):
    """
    :param text: Takes in a string of text
    :return : A sound based on how negative or positive the text is.
    """
    score = analyse_sentiment(text)
    print(score)
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

    # start playback
    play_obj = sa.play_buffer(audio, 1, 2, sample_rate)

    # wait for playback to finish before exiting
    play_obj.wait_done()
