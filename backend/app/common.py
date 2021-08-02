"""
Miscellaneous utility functions useful throughout the system
"""
import base64
import io
from scipy.io import wavfile
from textwrap import dedent


def wav_to_base64(byte_array, sample_rate):
    """
    Encode the WAV byte array with base64
    :param byte_array: int16 numpy array
    :param sample_rate: integer, the sampling rate
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
