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


def get_average_length_of_whitespace_per_line(text):
    """
    Get an array containing average lengths of contiguous whitespaces per line in given text.
    :param text: String of text
    :return: Array of floats, where the ith entry represents the average length of contiguous
    spaces in the ith line.
    """

    # Initial processing of text
    cleaned_text = clean_text(text)
    cleaned_text_lines = cleaned_text.split('\n')

    # Store the average length of contiguous blocks of whitespace per line in text
    average_length_of_whitespace_per_line = []

    for line in cleaned_text_lines:
        # Count number of whitespaces in a line, with tabs being equivalent to four spaces
        num_whitespaces = line.count(' ') + 4 * line.count('\t')

        # Count number of whitespace blocks, making sure to count leading/trailing whitespaces
        num_whitespace_blocks = len(line.split()) - 1 + \
                                int(line != line.rstrip()) + \
                                int(line != line.lstrip())

        # Calculate average length of whitespace and store in output
        average_length_of_whitespace = num_whitespaces / num_whitespace_blocks;
        average_length_of_whitespace_per_line.append(average_length_of_whitespace);

    return average_length_of_whitespace_per_line
