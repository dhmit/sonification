import string

import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

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



