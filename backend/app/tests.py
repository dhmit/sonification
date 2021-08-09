"""
Tests for the sonification web app.
"""

import base64
import numpy as np
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from scipy.io import wavfile

from .common import wav_to_base64
from .analysis.sentiment_analysis import text_to_sound
from .analysis import filters


class MainTests(TestCase):
    """
    Backend TestCase
    """

    # def setUp(self):
    #     super().setUp()
    #     do any setup here

    def test_sample(self):
        """
        Remove me once we have real tests here.
        """
        two = 2
        another_two = 2
        self.assertEqual(two + another_two, 4)


class SentimentAnalysisAPITests(APITestCase):
    """
    TestCase for the API endpoint use to send a `.wav` file from `sentiment_analysis` to the frontend.
    """

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


class FiltersTestCase(TestCase):
    """
    TestCase for the filters in `filters.py`
    """

    def test_get_notes(self):
        audio_samples, sample_rate = text_to_sound('Good. Bad. Neutral.')
        self.assertEqual(sample_rate, 44100)
        self.assertEqual(audio_samples.size, 44100*3)
        expected = [0, 44100, 88200]
        self.assertEqual(filters.get_notes((audio_samples, sample_rate)), expected)
