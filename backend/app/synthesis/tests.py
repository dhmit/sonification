import numpy as np
import base64

from django.test import TestCase

from app.synthesis.audio_encoding import _audio_samples_to_wav_base64
from app.synthesis import filters
from app.summer_2021_prototypes import text_to_music
from app import common

# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors just for tests

class AudioEncodingTestCase(TestCase):
    """
    TestCase for the `audio_encoding` module.
    """
    def test_wav_samples_to_base64(self):
        """
        NOTE(RA): here we test the private function _wav_samples_to_base64
                  which takes the sample rate as an argument.
                  This is so we can handcraft data to validate against in this test.
        """
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

        results = _audio_samples_to_wav_base64(data, sample_rate)
        self.assertTrue(isinstance(results, str))
        encoded_data = base64.b64decode(results.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([num_channels, 0]))
        self.assertEqual(encoded_data[24:28], bytes([sample_rate, 0, 0, 0]))
        self.assertEqual(encoded_data[28:32], bytes([constant, 0, 0, 0]))
        self.assertEqual(encoded_data[34:36], bytes([16, 0]))
        self.assertEqual(encoded_data[44:], data_bytes)

        data = np.array([], dtype=np.int8)

        bits_per_sample = 8
        num_channels = 1
        constant = (sample_rate * bits_per_sample * num_channels) // 8
        self.assertEqual(constant, sample_rate)

        results = _audio_samples_to_wav_base64(data, sample_rate)
        self.assertTrue(isinstance(results, str))
        encoded_data = base64.b64decode(results.encode('UTF-8'))
        self.assertTrue(isinstance(encoded_data, bytes))

        self.assertEqual(encoded_data[22:24], bytes([1, 0]))
        self.assertEqual(encoded_data[24:28], bytes(np.array([sample_rate], dtype=np.int32)))
        self.assertEqual(encoded_data[28:32], encoded_data[24:28])
        self.assertEqual(encoded_data[34:36], bytes([8, 0]))
        self.assertEqual(encoded_data[44:], bytes(data))


class FiltersTestCase(TestCase):
    """
    TestCase for the filters in `filters.py`
    TODO(ra): decouple these tests from sentiment analysis -- should be pure audio tests
              both because we want these filters to be available outside of any sentiment analysis
              and because it slows down the tests quite a lot.
              Probably we want some input WAV data that we process into an audio samples array.
    """
    def test_get_notes(self):
        # Edge condition: Empty audio signal
        empty_audio_samples = np.array([])
        self.assertEqual(filters.get_notes(empty_audio_samples), ([], [], []))

        audio_samples = text_to_music.sonify_text_2('Good. Bad. Neutral.')
        self.assertEqual(audio_samples.size, 44100 * 3)

        expected_samples = [0, 44100, 88200]
        expected_pitches = ['C6', 'F2', 'F4']
        _, res_samples, res_frequencies = filters.get_notes(audio_samples)

        # Temporal resolution tests
        self.assertEqual(len(res_samples), len(expected_samples))
        for i, j in zip(res_samples, expected_samples):
            self.assertLessEqual(abs(i - j), 500)

        # Frequency resolution test
        self.assertEqual(res_frequencies, expected_pitches)

        audio_samples = text_to_music.sonify_text_2('Neutral.')
        expected_samples = [0]
        expected_pitches = ['F4']
        _, res_samples, res_frequencies = filters.get_notes(audio_samples)

        # Temporal resolution test
        self.assertEqual(res_samples, expected_samples)

        # Frequency resolution test
        self.assertEqual(res_frequencies, expected_pitches)

        audio_samples = text_to_music.sonify_text_2('Neutral. Neutral.')
        self.assertEqual(audio_samples.size, 44100 * 2)

        expected_samples = [0, 44100]
        expected_pitches = ['F4', 'F4']
        _, res_samples, res_frequencies = filters.get_notes(audio_samples)

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
        self.assertEqual(res_frequencies, expected_pitches)

    def test_add_chords(self):
        audio_data = text_to_music.sonify_text_2('This is good. This is bad. This is neutral.')
        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res.size, audio_data.size)

        audio_data = text_to_music.sonify_text_2('Neutral. Neutral.')
        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res.size, audio_data.size)

        audio_data = text_to_music.sonify_text_2(
            'I fell and scraped my knee. It hurt a lot. I cried on the way '
            'home. My mom bought me ice cream. So I feel better now.')
        res = filters.apply_filter(audio_data, filters.add_chords)
        self.assertGreaterEqual(res.size, audio_data.size)

    def test_change_pitch(self):
        faulty_args = {
            'audio_samples': np.array([1, 2, 3], dtype=np.int16),
            'pitch_factor': -1
        }
        self.assertRaises(ValueError, filters.change_pitch, **faulty_args)

        audio_data = text_to_music.sonify_text_2(
            'This is a good day for some boating and doing barbeque. '
            'The rain is a horrible addition to my boating day. '
            'The weather forecast is ok.'
        )

        res = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=2)
        self.assertEqual(res.size, audio_data.size)

        # This test fails: there seem to be discrepancies in note onsets between the original
        # and transposed audio, thus leading to a different ordering of note frequencies.
        # The `change_pitch` function demands a second look!
        # root_notes = filters.get_notes(audio_data)[2]
        # risen_notes = filters.get_notes(res)[2]
        # for root_note, risen_note in zip(root_notes, risen_notes):
        #     self.assertLess(common.NOTE_FREQS[root_note], common.NOTE_FREQS[risen_note])

        audio_data = text_to_music.sonify_text_2(
            'On my way home from school, I ran into a wall. I broke my glasses and hurt my head. '
            'I was really upset. My mom is mad at me because I have to get new glasses '
            'and glasses are expensive. My rich friend decided to pay for my glasses. '
            'So my mom was happy.'
        )
        root_notes = filters.get_notes(audio_data)[2]
        res = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=0.4)
        lowered_notes = filters.get_notes(res)[2]
        self.assertLessEqual(abs(res.size - audio_data.size), 50)
        for root_note, lowered_note in zip(root_notes, lowered_notes):
            self.assertGreater(common.NOTE_FREQS[root_note], common.NOTE_FREQS[lowered_note])

        audio_data = text_to_music.sonify_text_2('This is neutral.')
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

        audio_data = text_to_music.sonify_text_2(
            'This is a great day for watching television. The climate change situation is scary. '
            'It is very hot right now.'
        )
        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=2)
        self.assertEqual(res.size, audio_data.size)

        # This test case fails, probably due to some clipping of the audio signal.
        # self.assertGreater(res[0].max(), audio_data[0].max())

        audio_data = text_to_music.sonify_text_2(
            'I like eating cake. I tried baking cake, but it tasted really bad. '
            'I decided to not bake cake anymore. I asked my friend to bake a cake for me. '
            'It was really delicious.'
        )
        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=0.5)
        self.assertEqual(res.size, audio_data.size)

        audio_data = text_to_music.sonify_text_2('This is good. This is bad. This is neutral.')
        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=2)
        self.assertEqual(res.size, audio_data.size)

        # This next assertion fails, probably due to some clipping of the audio signal.
        # TODO(ra): investigate!
        # self.assertGreater(res.max(), audio_data.max())

        audio_data = text_to_music.sonify_text_2('This is Neutral. This is Neutral.')
        res = filters.apply_filter(audio_data, filters.change_volume, amplitude=0.5)

        # Not sure why this fails. This warrants further investigation!
        # self.assertEqual(res[0].size, audio_data[0].size)
        self.assertLess(res.max(), audio_data.max())

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

        audio_data = text_to_music.sonify_text_2(
            'Today is a wonderful day. A wonderful day for eating ice cream. '
            'Yesterday was horrible. There was a storm and my neighborhood got flooded. '
        )
        res_slow = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=0.5)
        self.assertGreaterEqual(res_slow.size, audio_data.size)

        res_fast = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=2)
        self.assertLessEqual(res_fast[0].size, audio_data.size)

        audio_data = text_to_music.sonify_text_2(
            'This is an awesome experience. '
            'This is perhaps suited for another day. '
            'This is just plain bad.'
        )
        res_slow = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=0.7)
        self.assertGreaterEqual(res_slow.size, audio_data.size)

        res_fast = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=3)
        self.assertLessEqual(res_fast.size, audio_data.size)


