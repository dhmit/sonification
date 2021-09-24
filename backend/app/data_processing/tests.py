from django.test import TestCase

from app.data_processing import text as text_processing


# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors just for tests

class TextProcessingTestCase(TestCase):
    """
    Test cases for text.py
    """
    def test_analyse_sentiment(self):
        """
        Tests the function get_sentiment from encoders.py
        """
        sentence1 = "This ice cream tastes delicious and I am happy."
        sentiment1 = {'neg': 0.0, 'neu': 0.448, 'pos': 0.552, 'compound': 0.8126}
        sentence2 = "This ice cream tastes fine and I am feeling okay."
        sentiment2 = {'neg': 0.0, 'neu': 0.536, 'pos': 0.464, 'compound': 0.4939}
        sentence3 = "This ice cream tastes bad and I am disappointed."
        sentiment3 = {'neg': 0.524, 'neu': 0.476, 'pos': 0.0, 'compound': -0.765}
        sentence4 = "This ice ;cream taSt,,es bad AN.d I am ,,,     disappointed."
        self.assertEqual(text_processing.get_sentiment(text_processing.clean_text(sentence1)),
                         sentiment1)
        self.assertEqual(text_processing.get_sentiment(text_processing.clean_text(sentence2)),
                         sentiment2)
        self.assertEqual(text_processing.get_sentiment(text_processing.clean_text(sentence3)),
                         sentiment3)
        self.assertEqual(text_processing.get_sentiment(text_processing.clean_text(sentence4)),
                         sentiment3)

    def test_clean_text(self):
        input_text = "Hello!!!! How was your day?!"
        self.assertEqual(text_processing.clean_text(input_text), "hello how was your day")
        input_text = "......ooOOOoooOOOOoooo......"
        self.assertEqual(text_processing.clean_text(input_text), "oooooooooooooooo")

