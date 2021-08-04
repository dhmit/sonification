"""
Tests for the sonification web app.
"""

from django.test import TestCase
from .analysis import text_to_music


class TextToMusicTestCase(TestCase):
    """
    Test cases for text_to_music.py
    """

    def test_analyse_sentiment(self):
        """
        Tests the function _analyse_sentiment from text_to_music.py
        """
        sentence1 = "This ice cream tastes delicious and I am happy."
        score1 = {'neg': 0.0, 'neu': 0.448, 'pos': 0.552, 'compound': 0.8126}
        sentence2 = "This ice cream tastes fine and I am feeling okay."
        score2 = {'neg': 0.0, 'neu': 0.536, 'pos': 0.464, 'compound': 0.4939}
        sentence3 = "This ice cream tastes bad and I am disappointed."
        score3 = {'neg': 0.524, 'neu': 0.476, 'pos': 0.0, 'compound': -0.765}
        self.assertEqual(text_to_music._analyse_sentiment(sentence1), score1)
        self.assertEqual(text_to_music._analyse_sentiment(sentence2), score2)
        self.assertEqual(text_to_music._analyse_sentiment(sentence3), score3)
