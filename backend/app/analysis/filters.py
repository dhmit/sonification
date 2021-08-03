""""
Various filtering functions to apply to audio waves (represented as int16 numpy arrays)
"""

import numpy as np


def change_volume(audio_metadata, amplitude):
    """
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers.

    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param amplitude: An int representing the factor increase or decrease in volume
    :return: A Dict instance containing audio samples list with modified amplitudes, sample rate, and notes array
    """

    audio = []
    for each_sample in audio_metadata["audio_samples"]:
        audio.append(each_sample * amplitude)

    return {"audio_samples": audio.astype(np.int16), "sample_rate": audio_metadata["sample_rate"], "notes": audio_metadata["notes"]}


def change_speed(audio_metadata, speed_factor):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param speed_factor: An int representing the factor increase or decrease in a note's duration

    :return: A Dict instance containing audio samples list, sample rate, and notes array with duration modifications

    """
    notes = []
    for note_frequency, note_duration in audio_metadata["notes"]:
        notes.append((note_frequency, note_duration * speed_factor))

    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": notes}



def add_chords(audio_metadata):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    """

    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": audio_metadata["notes"]}



def overlap_notes(audio_metadata):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    """

    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": audio_metadata["notes"]}

