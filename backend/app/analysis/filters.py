"""" Various filtering functions to apply to audio objects (represented as Dict containing a 16 bit numpy samples
array, sample rate, and notes array) """

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
    for note_frequency, note_duration, note_score in audio_metadata["notes"]:
        notes.append((note_frequency, note_duration * speed_factor, note_score))

    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": notes}

def change_pitch(audio_metadata, pitch_factor):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param pitch_factor: An int representing the factor increase or decrease in a note's frequency

    :return: A Dict instance containing audio samples list, sample rate, and notes array with frequency modifications
    """

    notes = []
    for note_frequency, note_duration, note_score in audio_metadata["notes"]:
        notes.append((note_frequency * pitch_factor, note_duration, note_score))

    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": notes}


def add_chords(audio_metadata):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array

    :return: A Dict instance containing audio sample with added chords, sample rate, and notes array
    """
    notes = audio_metadata['notes']
    sample_rate = audio_metadata['sample_rate']
    chord_sin_waves = []

    for freq, T, n in notes:
        t = np.linspace(0, T, T * sample_rate, False)
        if n < 48:
            # minor chord
            first_freq = 2 ** ((n+3 + 1 - 49) / 12) * 440
        else:
            # major chord
            first_freq = 2 ** ((n+4 + 1 - 49) / 12) * 440
        second_freq = 2 ** ((n+7 + 1 - 49) / 12) * 440
        sin_wave = np.sin(freq * t * 2 * np.pi) + np.sin(first_freq * t * 2 * np.pi) + np.sin(second_freq * t * 2 * np.pi)
        chord_sin_waves.append(sin_wave)

    # concatenate notes
    audio = np.hstack(chord_sin_waves)
    # normalize to 16-bit range
    audio *= 32767 / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)

    return {"audio_samples": audio, "sample_rate": sample_rate, "notes": notes}



def overlap_notes(audio_metadata, first_note, second_note):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param first_note: A Tuple instance containing a note frequency, a note duration, and a note score
    :param second_note: A Tuple instance containing another note frequency, another note duration, and another note score

    :return: A Dict instance containing modified audio samples list, sample rate, and notes array
    """

    notes = []
    for note_frequency, note_duration, note_score in audio_metadata["notes"]:
        notes.append((note_frequency + first_note[0], note_duration + first_note[1], note_score + first_note[2]))
        notes.append((note_frequency + second_note[0], note_duration + second_note[1], note_score + second_note[2]))


    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": audio_metadata["sample_rate"], "notes": notes}

