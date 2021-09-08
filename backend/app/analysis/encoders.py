import random
import cv2 as cv

from app.common import SHORT_NOTE_DURATION, LONG_NOTE_DURATION, DEFAULT_SAMPLE_RATE, \
    NUM_OF_PIANO_KEYS
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import numpy as np

nltk.download('punkt')
nltk.download('vader_lexicon')


def hist_weighted_average(array):
    """
    :param array: an array of arrays/bins
        that contains the number of pixels that are a certain brightness:
    :return: the average brightness
    """
    total = 0
    for single_bin in array:
        total += single_bin[0]

    w_average = 0
    for idx, single_bin in enumerate(array):
        w_average += idx * (single_bin[0] / total)

    return w_average


def get_histogram_avg(img):
    """
    :param img: the loaded image
    :return:
    """
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    gray_hist = cv.calcHist([gray], [0], None, [256], [0, 256])
    return hist_weighted_average(gray_hist)


def get_tempo_for_image_slice(image_slice):
    """
    :param image_slice: a slice of the image
    :return: tempo in beats per minute
    """
    canny = cv.Canny(image_slice, 125, 175)
    total = image_slice.shape[0] * image_slice.shape[1]
    contours, _ = cv.findContours(canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    tempo = 40 + 10000 * (len(contours) / total)
    return tempo


def get_tempo_for_image(img_array, num_slices):
    num_rows = img_array.shape[0]
    num_cols = img_array.shape[1]
    if num_slices > num_cols:
        num_slices = num_cols
    slice_width = num_cols // num_slices
    remainder = num_cols - (slice_width * num_slices)

    tempo = []  # keeping track of the output from the get_tempo_for_image_slice function
    start_index = 0
    count = 1
    while start_index < num_cols - slice_width + 1:
        if remainder == 0:
            end_index = start_index + slice_width
        else:
            end_index = start_index + slice_width + 1
            remainder -= 1
        count += 1
        tempo.append(get_tempo_for_image_slice(img_array[0:num_rows, start_index:end_index]))
        start_index = end_index
    return tempo


def brightness_to_freq(brightness):
    note_freq = 100 + brightness * 3.5
    return note_freq


def get_sentiment(text):
    """
    Using sentiment analysis from NLTK's "VADER" model:
     https://www.programcreek.com/python/example/100005/nltk.sentiment.vader.SentimentIntensityAnalyzer
    :param text: String of text
    :return score: Dict, sentiment analysis of the text.
        {'neg': 0.0, 'neu': 0.448, 'pos': 0.552, 'compound': 0.5719}
    """
    return SentimentIntensityAnalyzer().polarity_scores(text)


def get_note_freq_from_sentiment(sentiment):
    """
    :param sentiment: Dict of negative, positive, neutral, and compound values
    :return: Float, frequency for a note
    """
    base_frequency = 400
    rounding_frequency = 350
    base_percentage = 1
    positivity_differential = sentiment["pos"] - sentiment["neg"]
    rounded_neutral_score = base_percentage + sentiment["neu"]
    return base_frequency + positivity_differential * rounding_frequency * rounded_neutral_score


def get_durations_of_notes(notes):
    """
    :param notes: List of notes
    :return List with corresponding randomly chosen durations for each note in notes
    """
    return [random.uniform(SHORT_NOTE_DURATION, LONG_NOTE_DURATION) for _ in notes]


def get_tokenized_sentences(user_text):
    """
    Tokenize sentences using nltk's tokenizer
    """
    return nltk.sent_tokenize(user_text)


def convert_sentiment_to_piano_key_num(sentiment_value):
    """
    sentiment scores from nltk's sentiment analyzer range from -1 to 1.
    This method shifts the number so that there is no negative, multiplies by 44,
     and rounds to an int from 0 to 88 (keys on a piano)
    :param sentiment_value: a value from -1 to 1
    :return: a number from 0 to 88
    """
    return round((sentiment_value + 1) * NUM_OF_PIANO_KEYS / 2)
