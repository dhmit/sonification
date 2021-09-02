import numpy as np
import cv2 as cv
from ..common import SAMPLE_CONVERSION_VAL, DEFAULT_SAMPLE_RATE, wav_to_base64
from ..analysis import encoders as encode
from ..analysis import synthesizers as synths


def image_to_note(image):
    """
    :param image:
    :return _wav_to_base64(audio, sample_rate): base64 encoding of a sound based on how negative or positive the text is
    """
    note_freq = encode.brightness_to_freq(encode.get_histogram_avg(image))

    # get time steps for the sample
    sample_rate = DEFAULT_SAMPLE_RATE
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * sample_rate, False)

    # generate sine wave notes
    note = np.sin(note_freq * time_steps * 2 * np.pi)

    # concatenate notes
    audio = note
    # normalize to 16-bit range
    audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)
    return audio


def analyze_image(im):
    """
    :param im: .jpg image to be analyzed
    :return sound: sound created from this im
    """
    length_slice = 1 / 60  # in minutes
    num_slices = 5
    sample_rate = DEFAULT_SAMPLE_RATE
    opencv_im = cv.imdecode(np.frombuffer(im.read(), np.uint8), cv.IMREAD_UNCHANGED)
    instrument = synths.get_instrument(im)
    brightness = encode.get_histogram_avg(opencv_im)
    frequency = encode.brightness_to_freq(brightness)
    tempos = encode.get_tempo_for_image(opencv_im, num_slices)
    beats_and_durations = [(max(1, round(tempo * length_slice)), length_slice * 60 / round(tempo * length_slice)) for
                           tempo in tempos]

    full_audio = []
    for audio_slice in beats_and_durations:
        for _ in range(audio_slice[0]):
            notes = synths.generate_note(frequency, audio_slice[1], sample_rate)
            for harmonic in instrument.keys():
                notes += synths.generate_note(frequency * harmonic, audio_slice[1], sample_rate)

            full_audio += notes.tolist()

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    return wav_to_base64(full_audio, sample_rate)
