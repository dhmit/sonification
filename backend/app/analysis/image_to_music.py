"""
Methods for taking an image and returning music
"""

import numpy as np
import cv2 as cv

from app.common import WAV_SAMPLE_RATE, wav_samples_to_base64, normalize_audio_to_16_bit_range
from app.analysis import encoders as encode
from app.analysis import synthesizers as synths


def image_to_note(image):
    """
    :param image:
    :return audio: audio samples
        base64 encoding of a sound based on how negative or positive the text is
    """
    note_freq = encode.brightness_to_freq(encode.get_histogram_avg(image))

    # get time steps for the sample
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * WAV_SAMPLE_RATE, False)

    # generate sine wave notes
    audio = np.sin(note_freq * time_steps * 2 * np.pi)

    return normalize_audio_to_16_bit_range(audio)


def analyze_image(img):
    """
    :param img: .jpg image to be analyzed
    :return sound: sound created from this im
    """
    length_slice = 1 / 60  # in minutes
    num_slices = 5
    opencv_im = cv.imdecode(np.frombuffer(img.read(), np.uint8), cv.IMREAD_UNCHANGED)
    instrument = synths.get_instrument(img)
    brightness = encode.get_histogram_avg(opencv_im)
    frequency = encode.brightness_to_freq(brightness)
    tempos = encode.get_tempo_for_image(opencv_im, num_slices)
    beats_and_durations = [(max(1, round(tempo * length_slice)),
                            length_slice * 60 / round(tempo * length_slice)) for tempo in tempos]

    full_audio = []
    for audio_slice in beats_and_durations:
        for _ in range(audio_slice[0]):
            notes = synths.generate_note(frequency, audio_slice[1])
            for harmonic in instrument:
                notes += synths.generate_note(frequency * harmonic, audio_slice[1])

            full_audio += notes.tolist()

    # normalize and base64 encode
    return wav_samples_to_base64(normalize_audio_to_16_bit_range(full_audio))
