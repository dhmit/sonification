"""
Miscellaneous utility functions useful throughout the system
"""
import base64
import io
import string
from textwrap import dedent
from scipy.io import wavfile

# reference: https://wiki.hydrogenaud.io/index.php?title=Sampling_rate
SAMPLE_CONVERSION_VAL = 32767
DEFAULT_SAMPLE_RATE = 44100
MUSICAL_CHARS = {'a', 'b', 'c', 'd', 'e', 'f', 'g'}

# Ratios found from Wikipedia https://tinyurl.com/56cj5rh5 (wiki link that's too long)
DISSONANT_RATIOS = [(5, 6), (4, 7), (5, 8), (5, 7), (6, 7)]
NEUTRAL_RATIOS = [(3, 4), (3, 5), (4, 5)]
CONSONANT_RATIOS = [(1, 2), (2, 3)]

SHORT_NOTE_DURATION = 0.2
LONG_NOTE_DURATION = 0.8

NUM_OF_PIANO_KEYS = 88

# Dictionary copied from the table in this web page:
# <https://pages.mtu.edu/~suits/notefreqs.html>
NOTE_FREQS = {
    'C0': 16.35,
    'C#0/Db0': 17.32,
    'D0': 18.35,
    'D#0/Eb0': 19.45,
    'E0': 20.60,
    'F0': 21.83,
    'F#0/Gb0': 23.12,
    'G0': 24.50,
    'G#0/Ab0': 25.96,
    'A0': 27.50,
    'A#0/Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.70,
    'C#1/Db1': 34.65,
    'D1': 36.71,
    'D#1/Eb1': 38.89,
    'E1': 41.20,
    'F1': 43.65,
    'F#1/Gb1': 46.25,
    'G1': 49.00,
    'G#1/Ab1': 51.91,
    'A1': 55.00,
    'A#1/Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'C#2/Db2': 69.30,
    'D2': 73.42,
    'D#2/Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'F#2/Gb2': 92.50,
    'G2': 98.00,
    'G#2/Ab2': 103.83,
    'A2': 110.00,
    'A#2/Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3/Db3': 138.59,
    'D3': 146.83,
    'D#3/Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3/Gb3': 185.00,
    'G3': 196.00,
    'G#3/Ab3': 207.65,
    'A3': 220.00,
    'A#3/Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4/Db4': 277.18,
    'D4': 293.66,
    'D#4/Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4/Gb4': 369.99,
    'G4': 392.00,
    'G#4/Ab4': 415.30,
    'A4': 440.00,
    'A#4/Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5/Db5': 554.37,
    'D5': 587.33,
    'D#5/Eb5': 622.25,
    'E5': 659.25,
    'F5': 698.46,
    'F#5/Gb5': 739.99,
    'G5': 783.99,
    'G#5/Ab5': 830.61,
    'A5': 880.00,
    'A#5/Bb5': 932.33,
    'B5': 987.77,
    'C6': 1046.50,
    'C#6/Db6': 1108.73,
    'D6': 1174.66,
    'D#6/Eb6': 1244.51,
    'E6': 1318.51,
    'F6': 1396.91,
    'F#6/Gb6': 1479.98,
    'G6': 1567.98,
    'G#6/Ab6': 1661.22,
    'A6': 1760.00,
    'B6': 1975.53,
    'C7': 2093.00,
    'C#7/Db7': 2217.46,
    'D7': 2349.32,
    'D#7/Eb7': 2489.02,
    'E7': 2637.02,
    'F7': 2793.83,
    'F#7/Gb7': 2959.96,
    'G7': 3135.96,
    'G#7/Ab7': 3322.44,
    'A7': 3520.00,
    'A#7/Bb7': 3729.31,
    'B7': 3951.07,
    'C8': 4186.01,
    'C#8/Db8': 4434.92,
    'D8': 4698.63,
    'D#8/Eb8': 4978.03,
    'E8': 5724.04,
    'F8': 5587.65,
    'F#8/Gb8': 5919.91,
    'G8': 6271.93,
    'G#8/Ab8': 6644.88,
    'A8': 7040.00,
    'A#8/Bb8': 7458.62,
    'B8': 7902.13
}

# a simplified dict using our above complex dictionary
NOTE_FREQ_SIMPLE = {
    'a': NOTE_FREQS['A4'],
    'b': NOTE_FREQS['B4'],
    'c': NOTE_FREQS['C5'],
    'd': NOTE_FREQS['D5'],
    'e': NOTE_FREQS['E4'],
    'f': NOTE_FREQS['F4'],
    'g': NOTE_FREQS['G4']
}


def wav_to_base64(byte_array, sample_rate):
    """
    Encode the WAV byte array with base64
    :param byte_array: NumPy array representing the list of samples (usually int16: 2 bytes/sample)
    :param sample_rate: int, the sampling rate in Hz
    :return: base64 encoding of the given array as a str
    """
    byte_io = io.BytesIO(bytes())
    wavfile.write(byte_io, sample_rate, byte_array)
    wav_bytes = byte_io.read()
    audio_data = base64.b64encode(wav_bytes).decode('UTF-8')
    return audio_data


def print_header(header_str):
    """
    Print a header -- mostly for our command line tools.
    """
    print(dedent(f'''
        ################################################################################
        # {header_str}
        ################################################################################'''))


def clean_text(text):
    """Lowercase, remove punctuation"""
    lower_case = text.lower()
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    return cleaned_text


def hack_add_one(num):
    """
    Just add one.
    FIXME: is this necessary?
    """
    return num + 1


def lookup_note_frequency(note):
    """
    :param note: letter (a-g)
    :return: float
    """
    if note in NOTE_FREQ_SIMPLE:
        return NOTE_FREQ_SIMPLE[note]
    else:
        raise Exception(f"Error: {note} not found in note dict")
