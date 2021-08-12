"""
Tests for the sonification web app.
"""

import base64
import numpy as np
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

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

        sample_rate_1 = 10
        bits_per_sample_1 = 16
        num_channels_1 = 1
        constant_1 = (sample_rate_1 * bits_per_sample_1 * num_channels_1) // 8

        results_1 = wav_to_base64(data_1, sample_rate_1)
        self.assertTrue(isinstance(results_1, str))
        encoded_data = base64.b64decode(results_1.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([num_channels_1, 0]))
        self.assertEqual(encoded_data[24:28], bytes([sample_rate_1, 0, 0, 0]))
        self.assertEqual(encoded_data[28:32], bytes([constant_1, 0, 0, 0]))
        self.assertEqual(encoded_data[34:36], bytes([16, 0]))
        self.assertEqual(encoded_data[44:], data_bytes)

        data_2 = np.array([], dtype=np.int8)

        sample_rate_2 = 44100
        bits_per_sample_2 = 8
        num_channels_2 = 1
        constant_2 = (sample_rate_2 * bits_per_sample_2 * num_channels_2) // 8
        self.assertEqual(constant_2, sample_rate_2)

        results_2 = wav_to_base64(data_2, sample_rate_2)
        self.assertTrue(isinstance(results_2, str))
        encoded_data_2 = base64.b64decode(results_2.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data_2, bytes))

        self.assertEqual(encoded_data_2[22:24], bytes([1, 0]))
        self.assertEqual(encoded_data_2[24:28], bytes(np.array([sample_rate_2], dtype=np.int32)))
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
        audio_samples, sample_rate = result
        self.assertEqual(type(result), tuple)
        self.assertEqual(len(audio_samples), 88200)
        self.assertEqual(type(audio_samples), np.ndarray)
        self.assertEqual(audio_samples.dtype, 'int16')
        self.assertEqual(sample_rate, 44100)


class FiltersTestCase(TestCase):
    """
    TestCase for the filters in `filters.py`
    """
    def setUp(self):
        # Note frequencies are calculated from the formula used in the text_to_sound function.
        # See the following table for a fuller list of note frequencies: <https://pages.mtu.edu/~suits/notefreqs.html>
        self.F3 = 174.614
        self.F4 = 349.228
        self.C5 = 523.251

    def test_get_notes(self):
        audio_samples_1, sample_rate_1 = text_to_sound('Good. Bad. Neutral.')
        # encoded = wav_to_base64(audio_samples, sample_rate)
        self.assertEqual(sample_rate_1, 44100)
        self.assertEqual(audio_samples_1.size, 44100 * 3)

        expected_samples_1 = [0, 44100, 88200]
        expected_frequencies_1 = [self.C5, self.F3, self.F4]
        _, res_samples_1, res_frequencies_1 = filters.get_notes((audio_samples_1, sample_rate_1))

        # Temporal resolution tests
        # self.assertEqual(len(res_samples_1), len(expected_samples_1))
        # for i, j in zip(res_samples_1, expected_samples_1):
        #     self.assertLessEqual(abs(i - j), 100)

        # Frequency resolution tests
        # self.assertEqual(len(res_frequencies_1), len(expected_frequencies_1))
        # # should fail -- want to see how off the frequencies are
        # self.assertEqual(res_frequencies_1, expected_frequencies_1)

        audio_samples_2, sample_rate_2 = text_to_sound('Neutral.')
        self.assertEqual(audio_samples_2.size, 44100)

        expected_samples_2 = [0]
        expected_frequencies_2 = [self.F4]
        _, res_samples_2, res_frequencies_2 = filters.get_notes((audio_samples_2, sample_rate_2))

        # # Temporal resolution test
        # self.assertEqual(res_samples_2, expected_samples_2)
        #
        # # Frequency resolution test
        # # should fail
        # self.assertEqual(res_frequencies_2, expected_frequencies_2)

        audio_samples_3, sample_rate_3 = text_to_sound('Neutral. Neutral.')
        self.assertEqual(audio_samples_3.size, 44100 * 2)

        expected_samples_3 = [0, 44100]
        expected_frequencies_3 = [self.F4, self.F4]
        _, res_samples_3, res_frequencies_3 = filters.get_notes((audio_samples_3, sample_rate_3))
        self.assertEqual(len(res_samples_3), len(expected_samples_3))

        for i, j in zip(res_samples_3, expected_samples_3):
            self.assertLessEqual(abs(i - j), 100)

        self.assertEqual(len(res_frequencies_3), len(expected_frequencies_3))
        # should also fail
        self.assertEqual(res_frequencies_3, expected_frequencies_3)

    def test_stretch_audio(self):
        audio_samples_1, sample_rate_1 = text_to_sound(
            'Today is a wonderful day. A wonderful day for eating ice cream. Yesterday was horrible. There was a storm and my neighborhood got flooded.'
        )
        self.assertEqual(sample_rate_1, 44100)

        res_slow = filters.stretch_audio(audio_samples_1, 0.5)
        self.assertGreaterEqual(res_slow.size, audio_samples_1.size)

        res_fast = filters.stretch_audio(audio_samples_1, 2)
        self.assertLessEqual(res_fast.size, audio_samples_1.size)

        audio_samples_2, sample_rate_2 = text_to_sound(
            'This is an awesome experience. This is perhaps suited for another day. This is just plain bad.'
        )
        self.assertEqual(sample_rate_2, 44100)

        res_slow_1 = filters.stretch_audio(audio_samples_2, 0.7)
        self.assertGreaterEqual(res_slow_1.size, audio_samples_2.size)

        res_fast_1 = filters.stretch_audio(audio_samples_2, 3)
        self.assertLessEqual(res_fast_1.size, audio_samples_2.size)

    def test_add_chords(self):
        audio_samples_1, sample_rate_1 = text_to_sound('This is marvelous day to get some sleep. The start of the new semester brings a dark cloud. It is August.')
        self.assertEqual(sample_rate_1, 44100)

        res_1 = filters.add_chords(audio_samples_1,sample_rate_1)
        self.assertGreaterEqual(res_1.size, audio_samples_1.size)


        audio_samples_2, sample_rate_2 = text_to_sound('I fell and scraped my knee. It hurt a lot. I cried on the way home. My mom bought me ice cream. So I feel better now.')
        self.assertEqual(sample_rate_2, 44100)

        res_2 = filters.add_chords(audio_samples_2, sample_rate_2)
        self.assertGreaterEqual(res_2.size, audio_samples_2.size)

    def test_change_volume(self):
        audio_samples_1, sample_rate_1 = text_to_sound('This is a great day for watching television. The climate change situation is scary. It is very hot right now.')
        self.assertEqual(sample_rate_1, 44100)

        res_1 = filters.change_volume(audio_samples_1, 2)
        self.assertEqual(res_1.size, audio_samples_1.size)


        audio_samples_2, sample_rate_2 = text_to_sound('I like eating cake. I tried baking cake, but it tasted really bad. I decided to not bake cake anymore. I asked my friend to bake a cake for me. It was really delicious.')
        self.assertEqual(sample_rate_2, 44100)

        res_2 = filters.change_volume(audio_samples_2, 0.5)
        self.assertEqual(res_2.size, audio_samples_2.size)

    def test_change_pitch(self):
        audio_samples_1, sample_rate_1 = text_to_sound('This is a good day for some boating and doing barbeque. The rain is a horrible addition to my boating day. The weather forecase is ok.')
        expected_sample_rate_1 = 44100
        self.assertEqual(sample_rate_1, expected_sample_rate_1)

        res_1 = filters.change_pitch(audio_samples_1, 2)
        self.assertEqual(res_1.size, audio_samples_1.size)

        audio_samples_2, sample_rate_2 = text_to_sound('On my way home from school, I ran into a wall. I broke my glasses and hurt my head. I was really upset. My mom is mad at me because I have to get new glasses and glasses are expensive. My rich friend decided to pay for my glasses. So my mo' )
        expected_sample_rate_2 = 44100
        self.assertEqual(sample_rate_2, expected_sample_rate_2)

        res_2 = filters.change_pitch(audio_samples_2, 0.3)
        self.assertEqual(res_2.size, audio_samples_2.size)

        audio_samples_3, sample_rate_3 = text_to_sound('This is neutral.')
        expected_sample_rate_3 = 44100
        self.assertEqual(sample_rate_3, expected_sample_rate_3)

        res_3 = filters.change_pitch(audio_samples_3, 2)
        _, _, fund_freq = filters.get_notes((res_3, sample_rate_3))
        self.assertLessEqual(abs(fund_freq[0] - 2*self.F4), 50)






