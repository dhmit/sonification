"""
Tests for the sonification web app.
"""
from PIL import Image
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from .analysis import text_to_music
from .analysis.sentiment_analysis import text_to_sound
from .analysis.image_to_sound import _brightness_to_freq, _get_histogram_avg, _get_instrument, _get_tempo_for_image
from .common import wav_to_base64
from .analysis.image_to_sound import *
import io
import base64
import numpy as np

class MainTests(TestCase):
    '''
    Test cases for the brightness, dominant color recognition, and tempo finding private functions
    '''

    def test_white_brightness(self):
        image = cv.imread('app/analysis/test_photos/white.jpg')
        note_freq = _brightness_to_freq(_get_histogram_avg(image))
        self.assertEqual(note_freq, 992.5)

    def test_dark_brightness(self):
        image = cv.imread('app/analysis/test_photos/black.jpg')
        note_freq = _brightness_to_freq(_get_histogram_avg(image))
        self.assertEqual(note_freq, 100)

    def test_dominant_color_recognition(self):
        red_image = 'app/analysis/test_photos/red.jpg'
        green_image = 'app/analysis/test_photos/green.jpg'
        blue_image = 'app/analysis/test_photos/blue.jpg'
        self.assertEqual(_get_instrument(red_image), cello_overtones)
        self.assertEqual(_get_instrument(green_image), clarinet_overtones)
        self.assertEqual(_get_instrument(blue_image), trombone_overtones)

    def test_tempo_for_image(self):
        # The right side of the image is more busy than the rest, so the tempo of that piece should be quicker
        image = cv.imread('app/analysis/test_photos/tempo.jpg')
        tempos = _get_tempo_for_image(image, 5)
        self.assertTrue(tempos[-1] > tempos[0])


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
        sentence4 = "This ice ;cream taSt,,es bad AN.d I am ,,,     disappointed."
        self.assertEqual(text_to_music._analyse_sentiment(sentence1), score1)
        self.assertEqual(text_to_music._analyse_sentiment(sentence2), score2)
        self.assertEqual(text_to_music._analyse_sentiment(sentence3), score3)
        self.assertEqual(text_to_music._analyse_sentiment(sentence4), score3)

    def test_generate_note_frequency(self):
        """
        Tests the function _generate_note_frequency from text_to_music.py
        """
        pos_score = 0.3
        neu_score = 0.5
        neg_score = 0.2
        frequency = 452.5
        self.assertEqual(text_to_music._generate_note_frequency(pos_score, neg_score, neu_score), frequency)

    def test_get_ratio(self):
        """
        Tests the function _get_ratio from text_to_music.py
        """
        pos_score_1 = 0.8
        neu_score_1 = 0.1
        neg_score_1 = 0.1
        self.assertEqual(text_to_music._get_ratio(pos_score_1, neu_score_1, neg_score_1),
                         text_to_music.consonant_ratios)
        pos_score_2 = 0.2
        neu_score_2 = 0.7
        neg_score_2 = 0.1
        self.assertEqual(text_to_music._get_ratio(pos_score_2, neu_score_2, neg_score_2),
                         text_to_music.neutral_ratios)
        pos_score_3 = 0.2
        neu_score_3 = 0.2
        neg_score_3 = 0.6
        self.assertEqual(text_to_music._get_ratio(pos_score_3, neu_score_3, neg_score_3),
                         text_to_music.dissonant_ratios)


class SentimentAnalysisAPITests(APITestCase):

    def test_API_status(self):
        response = self.client.get('/api/get_sentiment_analysis?text=good%20morning%20america')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class WavToBase64TestCase(TestCase):
    """
    TestCase for the `wav_to_base64` function. See
    https://docs.fileformat.com/audio/wav/#:~:text=audio%20file%20formats.-,WAV%20File%20Format,contains%20the%20actual%20sample%20data
    for the anatomy of a WAV file.
    """

    def test_wav_to_base64(self):

        one_byte_per_sample = np.array([0, 1, 15, 255], dtype=np.int8)
        self.assertEqual(bytes(one_byte_per_sample), b'\x00\x01\x0f\xff')
        self.assertEqual(bytes(np.array([256], dtype=np.int8)), bytes([0]))
        self.assertRaises(ValueError, bytes, [256])

        two_bytes_per_sample = np.array([0, 255, 256, 65535], dtype=np.int16)
        self.assertEqual(bytes(two_bytes_per_sample), b'\x00\x00\xff\x00\x00\x01\xff\xff')
        self.assertEqual(bytes(np.array([256], dtype=np.int16)), bytes([0, 1]))
        self.assertEqual(bytes(np.array([65536], dtype=np.int16)), bytes([0, 0]))
        self.assertRaises(ValueError, bytes, [256, 256])

        data_1 = np.array([1, 2, 3, 4, 255, 256, 5], dtype=np.int16)
        data_bytes = b'\x01\x00\x02\x00\x03\x00\x04\x00\xff\x00\x00\x01\x05\x00'
        self.assertEqual(bytes(data_1), data_bytes)

        sample_rate = 10
        bits_per_sample = 16
        num_channels = 1
        constant = (sample_rate * bits_per_sample * num_channels) // 8

        results_1 = wav_to_base64(data_1, sample_rate)
        self.assertTrue(isinstance(results_1, str))
        encoded_data = base64.b64decode(results_1.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([num_channels, 0]))
        self.assertEqual(encoded_data[24:28], bytes([sample_rate, 0, 0, 0]))
        self.assertEqual(encoded_data[28:32], bytes([constant, 0, 0, 0]))
        self.assertEqual(encoded_data[34:36], bytes([16, 0]))
        self.assertEqual(encoded_data[44:], data_bytes)

        data_2 = np.array([], dtype=np.int8)

        sample_rate = 44100
        bits_per_sample = 8
        constant = (sample_rate * bits_per_sample * num_channels) // 8

        results_2 = wav_to_base64(data_2, sample_rate)
        self.assertTrue(isinstance(results_2, str))
        encoded_data_2 = base64.b64decode(results_2.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data_2, bytes))

        self.assertEqual(encoded_data_2[22:24], bytes([1, 0]))
        self.assertEqual(encoded_data_2[24:28], bytes(np.array([sample_rate], dtype=np.int32)))
        self.assertEqual(encoded_data_2[28:32], encoded_data_2[24:28])
        self.assertEqual(encoded_data_2[34:36], bytes([8, 0]))
        self.assertEqual(encoded_data_2[44:], bytes(data_2))


class TextToSoundTestCase(TestCase):
    """
    Test case for text_to_sound function.
    """

    def test_text_to_sound(self):
        text = 'This is good. This is bad.'
        result = text_to_sound(text)
        audio_samples = result['audio_samples']
        self.assertEqual(type(result), dict)
        self.assertEqual(len(audio_samples), 88200)
        self.assertEqual(type(audio_samples), np.ndarray)
        self.assertEqual(audio_samples.dtype, 'int16')


class ImageAnalysisAPITests(APITestCase):
    """
    Test case for image analysis API endpoints
    """

    def get_test_image(self):
        file = io.BytesIO()
        image = Image.open('app/test_image.jpg')
        image.save(file, 'jpeg')
        file.name = 'test.jpeg'
        file.seek(0)
        return file

    def test_API_status(self):
        img = self.get_test_image()
        response = self.client.post('/api/image_to_sound', {'image': img}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_API_result(self):
        img = self.get_test_image()
        response = self.client.post('/api/image_to_sound', {'image': img}, format='multipart')
        self.assertTrue(isinstance(response.data['sound'], str))
        encoded_data = base64.b64decode(response.data['sound'].encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))
