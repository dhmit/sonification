# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors just for tests
import base64
import cv2 as cv
import io
import numpy as np
from pathlib import Path

from PIL import Image
from django.test import TestCase
from django.conf import settings
from rest_framework.test import APITestCase
from rest_framework import status

from app.summer_2021_prototypes import text_to_music
from app.summer_2021_prototypes import image_to_music
from app.common import TEST_DATA_DIR

class ImageToMusicTestCase(TestCase):
    """
    Test cases for the brightness, dominant color recognition, and tempo finding private functions
    """
    def test_white_brightness(self):
        image_path = TEST_DATA_DIR / 'white.jpg'
        image = cv.imread(str(image_path))
        note_freq = image_to_music.brightness_to_freq(image_to_music.get_histogram_avg(image))
        self.assertEqual(note_freq, 992.5)

    def test_dark_brightness(self):
        image_path = TEST_DATA_DIR / 'black.jpg'
        image = cv.imread(str(image_path))
        note_freq = image_to_music.brightness_to_freq(image_to_music.get_histogram_avg(image))
        self.assertEqual(note_freq, 100)

    def test_dominant_color_recognition(self):
        red_image_path = TEST_DATA_DIR / 'red.jpg'
        green_image_path = TEST_DATA_DIR / 'green.jpg'
        blue_image_path = TEST_DATA_DIR / 'blue.jpg'
        self.assertEqual(image_to_music.get_instrument(str(red_image_path)),
                         image_to_music.CELLO_OVERTONES)
        self.assertEqual(image_to_music.get_instrument(str(green_image_path)),
                         image_to_music.CLARINET_OVERTONES)
        self.assertEqual(image_to_music.get_instrument(str(blue_image_path)),
                         image_to_music.TROMBONE_OVERTONES)

    def test_tempo_for_image(self):
        # The right side of the image is more busy than the rest
        # so the tempo of that piece should be quicker
        image_path = TEST_DATA_DIR / 'tempo.jpg'
        image = cv.imread(str(image_path))
        tempos = image_to_music.get_tempo_for_image(image, 5)
        self.assertTrue(tempos[-1] > tempos[0])


class TextToMusicTestCase(TestCase):
    """
    Test cases for text_to_music.py
    """
    def test_get_note_frequency_for_sentiment(self):
        pos_score = 0.3
        neu_score = 0.5
        neg_score = 0.2
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        frequency = 452.5
        result = text_to_music.get_note_frequency_for_sentiment(sentiment, frequency)
        self.assertTrue(isinstance(result, float))

    def test_get_ratios_from_sentiment(self):
        """
        Tests the function get_ratios_from_sentiment from synthesizers.py
        """
        pos_score = 0.8
        neu_score = 0.1
        neg_score = 0.1
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(text_to_music.get_ratios_from_sentiment(sentiment),
                         text_to_music.CONSONANT_RATIOS)
        pos_score = 0.2
        neu_score = 0.7
        neg_score = 0.1
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(text_to_music.get_ratios_from_sentiment(sentiment),
                         text_to_music.NEUTRAL_RATIOS)
        pos_score = 0.2
        neu_score = 0.2
        neg_score = 0.6
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(text_to_music.get_ratios_from_sentiment(sentiment),
                         text_to_music.DISSONANT_RATIOS)

    def test_sonify_text_2(self):
        text = 'This is good. This is bad.'
        audio_samples = text_to_music.sonify_text_2(text)
        self.assertEqual(len(audio_samples), 88200)
        self.assertEqual(type(audio_samples), np.ndarray)

    @staticmethod
    def _get_test_image():
        file = io.BytesIO()
        image_path = TEST_DATA_DIR / 'test_image.jpg'
        image = Image.open(str(image_path))
        image.save(file, 'jpeg')
        file.name = 'test.jpeg'
        file.seek(0)
        return file

    def test_API_status(self):
        img = self._get_test_image()
        response = self.client.post('/api/image_to_music/', {'image': img}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # pylint: disable=invalid-name
    def test_API_result(self):
        img = self._get_test_image()
        response = self.client.post('/api/image_to_music/', {'image': img}, format='multipart')
        self.assertTrue(isinstance(response.data['sound'], str))
        encoded_data = base64.b64decode(response.data['sound'].encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))


class SentimentAnalysisAPITests(APITestCase):
    """
    TestCase for the API endpoint use to send a `.wav` file
    from `sentiment_analysis` to the frontend.
    """
    def test_API_status(self):
        response = self.client.get('/api/get_sentiment_analysis/?text=good%20morning%20america')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
