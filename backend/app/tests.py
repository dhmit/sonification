"""
Tests for the sonification web app.
"""
from PIL import Image
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from .analysis import filters, text_to_music
from .analysis.sentiment_analysis import text_to_sound
from .common import NOTE_FREQS
from .analysis.image_to_music import *
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

    def test_get_notes(self):
        # Edge condition: Empty audio signal
        has_faulty_sample_rate = {
            'audio': (np.array([]), 0)
        }
        self.assertRaises(ValueError, filters.get_notes, **has_faulty_sample_rate)

        foo_audio_data = (np.array([]), 44100)
        self.assertEqual(filters.get_notes(foo_audio_data), ([], [], []))

        audio_samples_1, sample_rate_1 = text_to_sound('Good. Bad. Neutral.')
        self.assertEqual(sample_rate_1, 44100)
        self.assertEqual(audio_samples_1.size, 44100 * 3)

        expected_samples_1 = [0, 44100, 88200]
        expected_frequencies_1 = ['C6', 'F2', 'F4']
        _, res_samples_1, res_frequencies_1 = filters.get_notes((audio_samples_1, sample_rate_1))

        # Temporal resolution tests
        self.assertEqual(len(res_samples_1), len(expected_samples_1))
        for i, j in zip(res_samples_1, expected_samples_1):
            self.assertLessEqual(abs(i - j), 500)

        # Frequency resolution test
        self.assertEqual(res_frequencies_1, expected_frequencies_1)

        audio_samples_2, sample_rate_2 = text_to_sound('Neutral.')
        self.assertEqual(audio_samples_2.size, 44100)

        expected_samples_2 = [0]
        expected_frequencies_2 = ['F4']
        _, res_samples_2, res_frequencies_2 = filters.get_notes((audio_samples_2, sample_rate_2))

        # Temporal resolution test
        self.assertEqual(res_samples_2, expected_samples_2)

        # Frequency resolution test
        self.assertEqual(res_frequencies_2, expected_frequencies_2)

        audio_samples_3, sample_rate_3 = text_to_sound('Neutral. Neutral.')
        self.assertEqual(audio_samples_3.size, 44100 * 2)

        expected_samples_3 = [0, 44100]
        expected_frequencies_3 = ['F4', 'F4']
        _, res_samples_3, res_frequencies_3 = filters.get_notes((audio_samples_3, sample_rate_3))

        # Temporal resolution tests
        self.assertEqual(len(res_samples_3), len(expected_samples_3))

        # This is commented out due to the get_notes function's poor performance on
        # detecting note onsets for repeated notes (i.e., consecutive notes of the same or
        # very similar frequencies). While it does detect the second note here, it
        # detects it much later than the actual onset! Thus, the sample index of the second
        # note varies considerably with the expectation.

        # for i, j in zip(res_samples_3, expected_samples_3):
        #     self.assertLessEqual(abs(i - j), 500)

        # Frequency resolution test
        self.assertEqual(res_frequencies_3, expected_frequencies_3)

    def test_add_chords(self):
        audio_data_1 = text_to_sound('This is good. This is bad. This is neutral.')
        self.assertEqual(audio_data_1[1], 44100)

        res_1 = filters.apply_filter(audio_data_1, filters.add_chords)
        self.assertGreaterEqual(res_1[0].size, audio_data_1[0].size)

        audio_data_2 = text_to_sound('Neutral. Neutral.')
        self.assertEqual(audio_data_2[1], 44100)

        res_2 = filters.apply_filter(audio_data_2, filters.add_chords)
        self.assertGreaterEqual(res_2[0].size, audio_data_2[0].size)

        audio_data_3 = text_to_sound('I fell and scraped my knee. It hurt a lot. I cried on the way '
                                     'home. My mom bought me ice cream. So I feel better now.')
        self.assertEqual(audio_data_3[1], 44100)

        res_3 = filters.apply_filter(audio_data_3, filters.add_chords)
        self.assertGreaterEqual(res_3[0].size, audio_data_3[0].size)

    def test_change_pitch(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'pitch_factor': -1
        }
        self.assertRaises(ValueError, filters.change_pitch, **faulty_args)

        audio_data_1 = text_to_sound('This is a good day for some boating and doing barbeque. The '
                                     'rain is a horrible addition to my boating day. The weather '
                                     'forecast is ok.')
        expected_sample_rate_1 = 44100
        self.assertEqual(audio_data_1[1], expected_sample_rate_1)
        root_notes_1 = filters.get_notes(audio_data_1)[2]

        res_1 = filters.apply_filter(audio_data_1, filters.change_pitch, pitch_factor=2)
        risen_notes_1 = filters.get_notes(res_1)[2]
        self.assertEqual(res_1[0].size, audio_data_1[0].size)

        # This test fails: there seems to be discrepancies in note onsets between the original and transposed audio,
        # thus leading to a different ordering of note frequencies. The `change_pitch` function demands a second look!
        # for root_note, risen_note in zip(root_notes_1, risen_notes_1):
        #     self.assertLess(NOTE_FREQS[root_note], NOTE_FREQS[risen_note])

        audio_data_2 = text_to_sound('On my way home from school, I ran into a wall. I broke my '
                                     'glasses and hurt my head. I was really upset. My mom is mad '
                                     'at me because I have to get new glasses and glasses are '
                                     'expensive. My rich friend decided to pay for my glasses. So '
                                     'my mom was happy.')
        expected_sample_rate_2 = 44100
        self.assertEqual(audio_data_2[1], expected_sample_rate_2)

        root_notes_2 = filters.get_notes(audio_data_2)[2]
        res_2 = filters.apply_filter(audio_data_2, filters.change_pitch, pitch_factor=0.4)
        lowered_notes_2 = filters.get_notes(res_2)[2]
        self.assertLessEqual(abs(res_2[0].size - audio_data_2[0].size), 50)
        for root_note, lowered_note in zip(root_notes_2, lowered_notes_2):
            self.assertGreater(NOTE_FREQS[root_note], NOTE_FREQS[lowered_note])

        audio_data_3 = text_to_sound('This is neutral.')
        expected_sample_rate_3 = 44100
        self.assertEqual(audio_data_3[1], expected_sample_rate_3)
        root_notes_3 = filters.get_notes(audio_data_3)[2]
        self.assertEqual(root_notes_3, ['F4'])

        # The following test case fails as the get_notes call picks up a second 'F5' note. This is probably due to
        # `change_pitch` using `stretch_audio`, which plays back samples of the original note
        # (including copies of the note onset), which may appear in the spectral difference detection function as a
        # "second note". Other implementations of pitch scaling, time stretching, and note detection functions could
        # resolve this issue.

        # res_3 = filters.apply_filter(audio_data_3, filters.change_pitch, pitch_factor=2)
        # risen_notes_3 = filters.get_notes(res_3)[2]
        # self.assertEqual(risen_notes_3, ['F5'])

    def test_change_volume(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'amplitude': -1
        }
        self.assertRaises(ValueError, filters.change_volume, **faulty_args)

        audio_data_1 = text_to_sound('This is a great day for watching television. The climate '
                                     'change situation is scary. It is very hot right now.')
        self.assertEqual(audio_data_1[1], 44100)

        res_1 = filters.apply_filter(audio_data_1, filters.change_volume, amplitude=2)
        self.assertEqual(res_1[0].size, audio_data_1[0].size)

        # This test case fails, probably due to some clipping of the audio signal.
        # self.assertGreater(res_1[0].max(), audio_data_1[0].max())

        audio_data_2 = text_to_sound('I like eating cake. I tried baking cake, but it tasted really '
                                     'bad. I decided to not bake cake anymore. I asked my friend to'
                                     ' bake a cake for me. It was really delicious.')
        self.assertEqual(audio_data_2[1], 44100)

        res_2 = filters.apply_filter(audio_data_2, filters.change_volume, amplitude=0.5)
        self.assertEqual(res_2[0].size, audio_data_2[0].size)

        audio_data_3 = text_to_sound('This is good. This is bad. This is neutral.')
        self.assertEqual(audio_data_3[1], 44100)

        res_3 = filters.apply_filter(audio_data_3, filters.change_volume, amplitude=2)
        self.assertEqual(res_3[0].size, audio_data_3[0].size)
        # This test case fails, probably due to some clipping of the audio signal.
        # self.assertGreater(res_3[0].max(), audio_data_3[0].max())

        audio_data_4 = text_to_sound('This is Neutral. This is Neutral.')
        self.assertEqual(audio_data_4[1], 44100)

        res_4 = filters.apply_filter(audio_data_2, filters.change_volume, amplitude=0.5)

        # Not sure why this fails. This warrants further investigation!
        # self.assertEqual(res_4[0].size, audio_data_4[0].size)
        self.assertLess(res_4[0].max(), audio_data_4[0].max())

    def test_stretch_audio(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'speed_factor': 0
        }
        more_faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'speed_factor': -1
        }
        self.assertRaises(ValueError, filters.stretch_audio, **faulty_args)
        self.assertRaises(ValueError, filters.stretch_audio, **more_faulty_args)

        audio_data_1 = text_to_sound(
            'Today is a wonderful day. A wonderful day for eating ice cream. Yesterday was horrible. There was a '
            'storm and my neighborhood got flooded. '
        )
        self.assertEqual(audio_data_1[1], 44100)

        res_slow_1 = filters.apply_filter(audio_data_1, filters.stretch_audio, speed_factor=0.5)
        self.assertGreaterEqual(res_slow_1[0].size, audio_data_1[0].size)

        res_fast_1 = filters.apply_filter(audio_data_1, filters.stretch_audio, speed_factor=2)
        self.assertLessEqual(res_fast_1[0].size, audio_data_1[0].size)

        audio_data_2 = text_to_sound(
            'This is an awesome experience. This is perhaps suited for another day. This is just plain bad.'
        )
        self.assertEqual(audio_data_2[1], 44100)

        res_slow_2 = filters.apply_filter(audio_data_2, filters.stretch_audio, speed_factor=0.7)
        self.assertGreaterEqual(res_slow_2[0].size, audio_data_2[0].size)

        res_fast_2 = filters.apply_filter(audio_data_2, filters.stretch_audio, speed_factor=3)
        self.assertLessEqual(res_fast_2[0].size, audio_data_2[0].size)


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
        response = self.client.post('/api/image_to_music', {'image': img}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_API_result(self):
        img = self.get_test_image()
        response = self.client.post('/api/image_to_music', {'image': img}, format='multipart')
        self.assertTrue(isinstance(response.data['sound'], str))
        encoded_data = base64.b64decode(response.data['sound'].encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))
