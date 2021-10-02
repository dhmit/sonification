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
    Extract information about whitespace in given text.
    :param text: String of text
    :return: whitespace_info: Array of tuples in form (n, c), where n is the number of
                              continuous characters c, such that c is either ' ' or '\n'.
    """
    cleaned_text = clean_text(text)
    whitespace_characters = {' ', '\n'}
    whitespace_info = []

    # Keep track of previous character and number of contiguous whitespace characters
    previous_char = None
    counter = 0

    for char in cleaned_text+'.': # Add period to cleaned_text to account for trailing whitespaces
        # If contiguous block of whitespace has ended, add info to output and reset counter
        if char != previous_char:
            if previous_char in whitespace_characters:
                whitespace_info.append((counter, previous_char))
            counter = 0

        previous_char = char
        counter += 1

    return whitespace_info


def get_average_contiguous_spaces_per_line(text):
    """
    Get an array containing average lengths of contiguous spaces per line in given text.
    :param text: String of text
    :return: Array of floats, where the ith entry represents the average length of contiguous
    spaces in the ith line.
    """

    contig_space_length_averages = []

    # Get whitespace data for easier calculation
    # Added newline tuple to account for final contiguous whitespace
    whitespace_info = extract_whitespace_info_from_text(text) + [(0, '\n')]

    # Keep track of the numbers of total spaces
    current_total_spaces = 0
    # Keep track of the number of contiguous space blocks
    current_num_contig_spaces = 0

    for whitespace in whitespace_info:

        # Get info about the contiguous whitespaces from whitespace tuple
        contig_whitespace_length = whitespace[0]
        whitespace_type = whitespace[1]

        # At start of new line, add previous line's average contiguous space length to output
        # and reset counter
        if whitespace_type == '\n':

            # Prevent 0 division error in average calculation for lines with no contiguous spaces
            if current_total_spaces == 0:
                current_num_contig_spaces = 1

            contig_space_length_averages.append(current_total_spaces / current_num_contig_spaces)

            # Reset counter for the next line
            current_total_spaces = 0
            current_num_contig_spaces = 0

        # Continue counting number of spaces and number of contiguous space blocks for current line
        else:
            current_total_spaces += contig_whitespace_length
            current_num_contig_spaces += 1

    return contig_space_length_averages
