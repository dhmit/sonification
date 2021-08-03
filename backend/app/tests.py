"""
Tests for the gender analysis web app.
"""

import numpy as np
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from .common import wav_to_base64


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

    def test_API_status(self):
        response = self.client.get('/api/get_sentiment_analysis?text=good%20morning%20america')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class WavToBase64TestCase(TestCase):

    def test_wav_to_base64(self):
        data = np.array([1, 2, 3, 4, 255, 256, 5], dtype=np.int16)
        sample_rate = 10
        encoded_data = wav_to_base64(data, sample_rate)
