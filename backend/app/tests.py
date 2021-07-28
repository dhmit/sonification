"""
Tests for the gender analysis web app.
"""

from collections import Counter
from django.test import TestCase
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.test import APITestCase
import numpy as np
import io
import soundfile
from scipy.io import wavfile


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

    def test_HttpResponse(self):
        response = self.client.get('/api/get_sentiment_analysis/testing')
        result = response.json()
        expected_samplerate, expected_data = wavfile.read('app/example.wav')
        self.assertEqual(expected_samplerate, result['rate'])
        self.assertEqual(expected_data.tolist(), result['data'])


