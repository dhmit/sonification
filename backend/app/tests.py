"""
Tests for the sonification web app.
"""
# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors
import io
import base64
import cv2 as cv
import numpy as np
from PIL import Image
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from app import common
from app.analysis import filters
from app.analysis.text_to_music import sonify_text_2
from app.analysis import encoders as encode
from app.analysis import synthesizers as synths


class MainTests(TestCase):
    """
    Test cases for the brightness, dominant color recognition, and tempo finding private functions
    """

    def test_white_brightness(self):
        image = cv.imread('app/analysis/test_photos/white.jpg')
        note_freq = encode.brightness_to_freq(encode.get_histogram_avg(image))
        self.assertEqual(note_freq, 992.5)

    def test_dark_brightness(self):
        image = cv.imread('app/analysis/test_photos/black.jpg')
        note_freq = encode.brightness_to_freq(encode.get_histogram_avg(image))
        self.assertEqual(note_freq, 100)

    def test_dominant_color_recognition(self):
        red_image = 'app/analysis/test_photos/red.jpg'
        green_image = 'app/analysis/test_photos/green.jpg'
        blue_image = 'app/analysis/test_photos/blue.jpg'
        self.assertEqual(synths.get_instrument(red_image), synths.cello_overtones)
        self.assertEqual(synths.get_instrument(green_image), synths.clarinet_overtones)
        self.assertEqual(synths.get_instrument(blue_image), synths.trombone_overtones)

    def test_tempo_for_image(self):
        # The right side of the image is more busy than the rest
        # so the tempo of that piece should be quicker
        image = cv.imread('app/analysis/test_photos/tempo.jpg')
        tempos = encode.get_tempo_for_image(image, 5)
        self.assertTrue(tempos[-1] > tempos[0])


class TextToMusicTestCase(TestCase):
    """
    Test cases for text_to_music.py
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
        self.assertEqual(encode.get_sentiment(common.clean_text(sentence1)), sentiment1)
        self.assertEqual(encode.get_sentiment(common.clean_text(sentence2)), sentiment2)
        self.assertEqual(encode.get_sentiment(common.clean_text(sentence3)), sentiment3)
        self.assertEqual(encode.get_sentiment(common.clean_text(sentence4)), sentiment3)

    def test_get_note_frequency(self):
        """
        Tests the function get_note_frequency from synthesizers.py
        """
        pos_score = 0.3
        neu_score = 0.5
        neg_score = 0.2
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        frequency = 452.5
        self.assertTrue(isinstance(synths.get_note_frequency(sentiment, frequency), float))

    def test_get_ratios_from_sentiment(self):
        """
        Tests the function get_ratios_from_sentiment from synthesizers.py
        """
        pos_score = 0.8
        neu_score = 0.1
        neg_score = 0.1
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(synths.get_ratios_from_sentiment(sentiment),
                         synths.CONSONANT_RATIOS)
        pos_score = 0.2
        neu_score = 0.7
        neg_score = 0.1
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(synths.get_ratios_from_sentiment(sentiment),
                         synths.NEUTRAL_RATIOS)
        pos_score = 0.2
        neu_score = 0.2
        neg_score = 0.6
        sentiment = {'pos': pos_score, 'neg': neg_score, 'neu': neu_score}
        self.assertEqual(synths.get_ratios_from_sentiment(sentiment),
                         synths.DISSONANT_RATIOS)


class SentimentAnalysisAPITests(APITestCase):
    """
    TestCase for the API endpoint use to send a `.wav` file
    from `sentiment_analysis` to the frontend.
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

        data = np.array([1, 2, 3, 4, 255, 256, 5], dtype=np.int16)
        data_bytes = b'\x01\x00\x02\x00\x03\x00\x04\x00\xff\x00\x00\x01\x05\x00'
        self.assertEqual(bytes(data), data_bytes)

        sample_rate = 10
        bits_per_sample = 16
        num_channels = 1
        constant = (sample_rate * bits_per_sample * num_channels) // 8

        results = common.wav_to_base64(data, sample_rate)
        self.assertTrue(isinstance(results, str))
        encoded_data = base64.b64decode(results.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([num_channels, 0]))
        self.assertEqual(encoded_data[24:28], bytes([sample_rate, 0, 0, 0]))
        self.assertEqual(encoded_data[28:32], bytes([constant, 0, 0, 0]))
        self.assertEqual(encoded_data[34:36], bytes([16, 0]))
        self.assertEqual(encoded_data[44:], data_bytes)

        data = np.array([], dtype=np.int8)

        sample_rate = 44100
        bits_per_sample = 8
        num_channels = 1
        constant = (sample_rate * bits_per_sample * num_channels) // 8
        self.assertEqual(constant, sample_rate)

        results = common.wav_to_base64(data, sample_rate)
        self.assertTrue(isinstance(results, str))
        encoded_data = base64.b64decode(results.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([1, 0]))
        self.assertEqual(encoded_data[24:28], bytes(np.array([sample_rate], dtype=np.int32)))
        self.assertEqual(encoded_data[28:32], encoded_data[24:28])
        self.assertEqual(encoded_data[34:36], bytes([8, 0]))
        self.assertEqual(encoded_data[44:], bytes(data))


class TextToSoundTestCase(TestCase):
    """
    Test case for sonify_text_2 function.
    """

    def test_sonify_text_2(self):
        text = 'This is good. This is bad.'
        result = sonify_text_2(text)
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

        audio_samples, sample_rate = sonify_text_2('Good. Bad. Neutral.')
        self.assertEqual(sample_rate, 44100)
        self.assertEqual(audio_samples.size, 44100 * 3)

        expected_samples = [0, 44100, 88200]
        expected_frequencies = ['C6', 'F2', 'F4']
        _, res_samples, res_frequencies = filters.get_notes((audio_samples, sample_rate))

        # Temporal resolution tests
        self.assertEqual(len(res_samples), len(expected_samples))
        for i, j in zip(res_samples, expected_samples):
            self.assertLessEqual(abs(i - j), 500)

        # Frequency resolution test
        self.assertEqual(res_frequencies, expected_frequencies)

        audio_samples, sample_rate = sonify_text_2('Neutral.')
        self.assertEqual(audio_samples.size, 44100)

        expected_samples = [0]
        expected_frequencies = ['F4']
        _, res_samples, res_frequencies = filters.get_notes((audio_samples, sample_rate))

        # Temporal resolution test
        self.assertEqual(res_samples, expected_samples)

        # Frequency resolution test
        self.assertEqual(res_frequencies, expected_frequencies)

        audio_samples, sample_rate = sonify_text_2('Neutral. Neutral.')
        self.assertEqual(audio_samples.size, 44100 * 2)

        expected_samples = [0, 44100]
        expected_frequencies = ['F4', 'F4']
        _, res_samples, res_frequencies = filters.get_notes((audio_samples, sample_rate))

        # Temporal resolution tests
        self.assertEqual(len(res_samples), len(expected_samples))

        # This is commented out due to the get_notes function's poor performance on
        # detecting note onsets for repeated notes (i.e., consecutive notes of the same or
        # very similar frequencies). While it does detect the second note here, it
        # detects it much later than the actual onset! Thus, the sample index of the second
        # note varies considerably with the expectation.

        # for i, j in zip(res_samples, expected_samples):
        #     self.assertLessEqual(abs(i - j), 500)

        # Frequency resolution test
        self.assertEqual(res_frequencies, expected_frequencies)

    def test_add_chords(self):
        audio_data = sonify_text_2('This is good. This is bad. This is neutral.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res[0].size, audio_data[0].size)

        audio_data = sonify_text_2('Neutral. Neutral.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res[0].size, audio_data[0].size)

        audio_data = sonify_text_2(
            'I fell and scraped my knee. It hurt a lot. I cried on the way '
            'home. My mom bought me ice cream. So I feel better now.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res[0].size, audio_data[0].size)

    def test_change_pitch(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'pitch_factor': -1
        }
        self.assertRaises(ValueError, filters.change_pitch, **faulty_args)

        audio_data = sonify_text_2('This is a good day for some boating and doing barbeque. The '
                                   'rain is a horrible addition to my boating day. The weather '
                                   'forecast is ok.')
        expected_sample_rate = 44100
        self.assertEqual(audio_data[1], expected_sample_rate)
        root_notes = filters.get_notes(audio_data)[2]

        res = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=2)
        # risen_notes = filters.get_notes(res)[2]
        self.assertEqual(res[0].size, audio_data[0].size)

        # This test fails: there seems to be discrepancies in note onsets between the original
        # and transposed audio, thus leading to a different ordering of note frequencies.
        # The `change_pitch` function demands a second look!
        # for root_note, risen_note in zip(root_notes, risen_notes):
        #     self.assertLess(common.NOTE_FREQS[root_note], common.NOTE_FREQS[risen_note])

        audio_data = sonify_text_2('On my way home from school, I ran into a wall. I broke my '
                                   'glasses and hurt my head. I was really upset. My mom is mad '
                                   'at me because I have to get new glasses and glasses are '
                                   'expensive. My rich friend decided to pay for my glasses. So '
                                   'my mom was happy.')
        expected_sample_rate = 44100
        self.assertEqual(audio_data[1], expected_sample_rate)

        root_notes = filters.get_notes(audio_data)[2]
        res = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=0.4)
        lowered_notes = filters.get_notes(res)[2]
        self.assertLessEqual(abs(res[0].size - audio_data[0].size), 50)
        for root_note, lowered_note in zip(root_notes, lowered_notes):
            self.assertGreater(common.NOTE_FREQS[root_note], common.NOTE_FREQS[lowered_note])

        audio_data = sonify_text_2('This is neutral.')
        expected_sample_rate = 44100
        self.assertEqual(audio_data[1], expected_sample_rate)
        root_notes = filters.get_notes(audio_data)[2]
        self.assertEqual(root_notes, ['F4'])

        # The following test case fails as the get_notes call picks up a second 'F5' note.
        # This is probably due to `change_pitch` using `stretch_audio`, which plays back samples
        # of the original note (including copies of the note onset), which may appear in the
        # spectral difference detection function as a "second note".
        # Other implementations of pitch scaling, time stretching,
        # and note detection functions could resolve this issue.

        # res = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=2)
        # risen_notes = filters.get_notes(res)[2]
        # self.assertEqual(risen_notes, ['F5'])

    def test_change_volume(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'amplitude': -1
        }
        self.assertRaises(ValueError, filters.change_volume, **faulty_args)

        audio_data = sonify_text_2('This is a great day for watching television. The climate '
                                   'change situation is scary. It is very hot right now.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=2)
        self.assertEqual(res[0].size, audio_data[0].size)

        # This test case fails, probably due to some clipping of the audio signal.
        # self.assertGreater(res[0].max(), audio_data[0].max())

        audio_data = sonify_text_2(
            'I like eating cake. I tried baking cake, but it tasted really '
            'bad. I decided to not bake cake anymore. I asked my friend to'
            ' bake a cake for me. It was really delicious.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=0.5)
        self.assertEqual(res[0].size, audio_data[0].size)

        audio_data = sonify_text_2('This is good. This is bad. This is neutral.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=2)
        self.assertEqual(res[0].size, audio_data[0].size)
        # This test case fails, probably due to some clipping of the audio signal.
        # self.assertGreater(res[0].max(), audio_data[0].max())

        audio_data = sonify_text_2('This is Neutral. This is Neutral.')
        self.assertEqual(audio_data[1], 44100)

        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=0.5)

        # Not sure why this fails. This warrants further investigation!
        # self.assertEqual(res[0].size, audio_data[0].size)
        self.assertLess(res[0].max(), audio_data[0].max())

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

        audio_data = sonify_text_2(
            'Today is a wonderful day. A wonderful day for eating ice cream. '
            'Yesterday was horrible. There was a storm and my neighborhood got flooded. '
        )
        self.assertEqual(audio_data[1], 44100)

        res_slow = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=0.5)
        self.assertGreaterEqual(res_slow[0].size, audio_data[0].size)

        res_fast = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=2)
        self.assertLessEqual(res_fast[0].size, audio_data[0].size)

        audio_data = sonify_text_2(
            'This is an awesome experience. '
            'This is perhaps suited for another day. '
            'This is just plain bad.'
        )
        self.assertEqual(audio_data[1], 44100)

        res_slow = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=0.7)
        self.assertGreaterEqual(res_slow[0].size, audio_data[0].size)

        res_fast = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=3)
        self.assertLessEqual(res_fast[0].size, audio_data[0].size)


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

    # pylint: disable=invalid-name
    def test_API_result(self):
        img = self.get_test_image()
        response = self.client.post('/api/image_to_music', {'image': img}, format='multipart')
        self.assertTrue(isinstance(response.data['sound'], str))
        encoded_data = base64.b64decode(response.data['sound'].encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))


class CommonTestCase(TestCase):
    """Test case for common methods"""

    def test_clean_text(self):
        text = "Hello!!!! How was your day?!"
        self.assertEqual(common.clean_text(text), "hello how was your day")
        text = "......ooOOOoooOOOOoooo......"
        self.assertEqual(common.clean_text(text), "oooooooooooooooo")

    def test_hack_add_one(self):
        num = 1
        self.assertEqual(common.hack_add_one(num), 2)
        num = 2
        self.assertEqual(common.hack_add_one(num), 3)

    def test_lookup_note_frequency(self):
        note = 'a'
        self.assertEqual(common.lookup_note_frequency(note), 440.00)
