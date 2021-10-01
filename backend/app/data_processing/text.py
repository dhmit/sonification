"""

This module contains functions for transforming textual input data into quantities
that we can plug into the parameters of our synthesis modules.

"""

import string

import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

# These functions run when the system imports this module: i.e,. when you start the application
# by running the backend. Normally, don't put code that executes at import time into a module!
# This kind of setup code is the rare exception.
nltk.download('punkt')
nltk.download('vader_lexicon')


def get_sentiment(text):
    """
    Using sentiment analysis from NLTK's "VADER" model:
    https://www.programcreek.com/python/example/100005/nltk.sentiment.vader.SentimentIntensityAnalyzer
    :param text: String of text
    :return score: Dict, sentiment analysis of the text.
        {'neg': 0.0, 'neu': 0.448, 'pos': 0.552, 'compound': 0.5719}
    """
    return SentimentIntensityAnalyzer().polarity_scores(text)


def get_pos_diff_from_sentiment(sentiment):
    """
    :param sentiment: dict of negative, positive, neutral, and compound values
    :return: pos minus neg float
    """
    return sentiment["pos"] - sentiment["neg"]


def get_tokenized_sentences(text):
    """
    Tokenize sentences using nltk's tokenizer
    """
    return nltk.sent_tokenize(text)


def clean_text(text):
    """Lowercase, remove punctuation"""
    lower_case = text.lower()
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    return cleaned_text

def extract_whitespace_info_from_text(text):
    """
    :param text:
    :return: list of tuples in form (x, y), where x is
    the number of continuous y (' ' or '\n') characters.
    """
    cleaned_text=clean_text(text)
    counter=0
    white_space_info=[]
    previous_char=None
    for char in cleaned_text:
        if char!=previous_char:
            if previous_char in {'\n', ' '}:
                white_space_info.append((counter,previous_char))
            counter=0
        counter+=1
        previous_char = char
    if previous_char in {'\n', ' '}: #account for trailing whitespace
        white_space_info.append((counter, previous_char))
    return white_space_info


