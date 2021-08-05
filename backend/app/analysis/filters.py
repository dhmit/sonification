"""
Various filtering functions to apply to audio objects (represented as dict containing a 16 bit numpy samples
array, sample rate, and notes array)

NOTE: At the moment, these filters only work under a narrow set of assumptions. These assume the incoming audio array
contain 16-bit integers, where each note consists of a pure sine wave (which may or may not be periodic in the duration
of the note). While these may serve as examples or models to start, these filters definitely need to accommodate more
general cases (e.g., other data types, more complicated waveforms, chords, speech, etc).
"""
from copy import deepcopy
import numpy as np


def change_volume(audio_metadata, amplitude):
    """
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers.

    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param amplitude: An int representing the factor increase or decrease in volume

    :return: A Dict instance containing audio samples list with modified amplitudes, sample rate, and notes array
    """

    audio = audio_metadata["audio_samples"]
    new_audio = amplitude * audio

    return {"audio_samples": new_audio.astype(audio.dtype), "sample_rate": audio_metadata["sample_rate"],
            "notes": audio_metadata["notes"][:]}


def change_speed(audio_metadata, speed_factor):
    """
    :param audio_metadata: A dict instance containing:
     audio_samples: An int16 Numpy array,
     sample_rate: An int recorded in Hz,
     notes: A list of 3-element tuples, containing:
        the frequency(ies) of a note/chord (int or tuple),


    :param speed_factor: An int representing the new relative speed of playback for the output audio
        (e.g., an output audio that plays twice as fast would require an input of `2`)

    :return: A Dict instance containing audio samples list, sample rate, and notes array with duration modifications
    """
    notes = []
    audio = audio_metadata["audio_samples"]
    sample_rate = audio_metadata["sample_rate"]
    new_audio = np.array([], dtype=audio.dtype)
    fraction = 1 / speed_factor

    start_index = 0
    for note_frequency, note_duration, note_score in audio_metadata["notes"]:
        notes.append((note_frequency, note_duration * fraction, note_score))

        num_samples = note_duration * sample_rate
        assert abs(num_samples - int(num_samples)) <= 1e-7, "Check reasoning and creation of original audio!"

        num_desired_samples = int(num_samples * fraction)

        if speed_factor >= 1:
            end_index = start_index + num_desired_samples + 1
            new_audio = np.append(new_audio, audio[start_index: end_index])
            start_index += num_samples + 1

        else:
            end_index = start_index + num_samples + 1
            new_audio = np.append(new_audio, audio[start_index: end_index])

            num_extra_samples = int(note_duration * sample_rate * (fraction - 1))
            t = np.linspace(note_duration, note_duration * fraction, num_extra_samples, True)
            sin_wave = np.sin(2 * np.pi * note_frequency * t)

            sin_wave = np.array(sin_wave)
            sin_wave *= 32767 / np.max(np.abs(sin_wave))
            sin_wave = sin_wave.astype(np.int16)

            new_audio = np.append(new_audio, sin_wave)

    assert new_audio.dtype == audio.dtype, "Check array concatenation!"

    return {
        "audio_samples": new_audio,
        "sample_rate": sample_rate,
        "notes": notes
    }


def change_pitch(audio_metadata, pitch_factor):
    """
    :param audio_metadata: A dict containing audio samples list, sample rate, and notes array
    :param pitch_factor: An unsigned float representing the factor increase or decrease in a note's frequency

    :return: A dict instance containing audio samples list, sample rate, and notes array with frequency modifications
    """
    pitch_factor = abs(pitch_factor)
    audio = audio_metadata["audio_samples"]
    sample_rate = audio_metadata["sample_rate"]
    new_audio = np.array([], dtype=audio.dtype)

    notes = []
    is_chord = False
    for note_frequency, note_duration, note_score in audio_metadata["notes"]:

        if type(note_frequency) == tuple:
            is_chord = True
            new_frequency = note_frequency[0] * pitch_factor
        else:
            new_frequency = note_frequency * pitch_factor

        notes.append((new_frequency, note_duration, note_score))

        t = np.linspace(0, note_duration, note_duration * sample_rate)

        sin_wave = np.sin(2 * np.pi * new_frequency * t)
        sin_wave = np.array(sin_wave)
        sin_wave *= 32767 / np.max(np.abs(sin_wave))
        sin_wave = sin_wave.astype(np.int16)

        new_audio = np.append(new_audio, sin_wave)

    new_audio_metadata = {
        "audio_samples": new_audio,
        "sample_rate": sample_rate,
        "notes": notes
    }

    if is_chord:
        return add_chords(new_audio_metadata)

    return new_audio_metadata


def add_chords(audio_metadata):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array

    :return: A Dict instance containing audio sample with added chords, sample rate, and notes array
    """
    notes = audio_metadata['notes']
    sample_rate = audio_metadata['sample_rate']
    chord_sin_waves = []
    new_notes = []

    for note_frequency, note_duration, note_score in notes:
        t = np.linspace(0, note_duration, note_duration * sample_rate, False)
        if note_score < 48:
            # minor chord
            first_freq = 2 ** ((note_score + 3 + 1 - 49) / 12) * 440
        else:
            # major chord
            first_freq = 2 ** ((note_score + 4 + 1 - 49) / 12) * 440
        second_freq = 2 ** ((note_score + 7 + 1 - 49) / 12) * 440
        sin_wave = np.sin(note_frequency * t * 2 * np.pi) + np.sin(first_freq * t * 2 * np.pi) + np.sin(
            second_freq * t * 2 * np.pi)
        chord_sin_waves.append(sin_wave)
        new_notes.append(((note_frequency, first_freq, second_freq), note_duration, note_score))

    # concatenate notes
    audio = np.hstack(chord_sin_waves)
    # normalize to 16-bit range
    audio *= 32767 / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)

    return {"audio_samples": audio, "sample_rate": sample_rate, "notes": new_notes}


def overlap_notes(audio_metadata, overlap_factor):
    """
    :param audio_metadata: A Dict instance containing audio samples list, sample rate, and notes array
    :param overlap_factor: A float between 0 and 1 representing the percentage of overlapped notes in the audio

    :return: A Dict instance containing modified audio samples list, sample rate, and notes array
    """
    assert 0 <= overlap_factor <= 1, "Invalid overlap factor. Please choose number in the interval [0, 1]."
    if overlap_factor == 0:
        return deepcopy(audio_metadata)

    audio = audio_metadata["audio_samples"]
    notes = audio_metadata["notes"]
    sample_rate = audio_metadata["sample_rate"]

    def overlap():
        pass

    new_audio = np.array([], dtype=audio.dtype)

    for n in range(len(notes) - 1, -1, -1):


        new_audio = np.append(new_audio,overlap())
    # start = 0
    # length_of_note (in samples) = note_duration * sample_rate
    # num_samples_before_overlap = int(length_note * (1 - overlap_factor))
    # new_audio = np.append(new_audio, audio[start: start + length_of_note]
    # normally, saying li[a:b] on Py list returns new list: we want the slice of the original list so we can change it
    #   does NumPy have separate methods for these two kinds of slicing?
    # assuming we have the slice from the original:

    # new_audio[start + num_samples_before_overlap: start + length_of_note] += audio[start + length_of_note + 1: length of the new audio slice[
    # keep going: redefine start, but start would be different for the new audio and audio?

    # notes = []
    start_index = 0
    for index, (note_frequency, note_duration, note_score) in enumerate(notes):
        full_num_of_note_samples = int(note_duration * sample_rate)
        unchanged_factor = 1 - overlap_factor

        unchanged_num_of_note_samples = unchanged_factor * full_num_of_note_samples
        # the entire audio (or the first half/group for this note's samples?)?
        original_audio_for_this_note = audio[start_index: start_index + full_num_of_note_samples]

        #adding entire original audio before changing slices of it later on?
        new_audio = np.append(new_audio, original_audio_for_this_note)

        #second half/group of this note's full samples (the group of samples that need to be 'reassigned'?)
        changed_slice_starting_index = start_index + unchanged_num_of_note_samples
        changed_slice_ending_index = start_index + full_num_of_note_samples
        changed_slice_new_audio = new_audio[changed_slice_starting_index:changed_slice_ending_index]

        # the originally second half/group of samples are now reassigned to...
        changed_slice_new_audio = something

        # move on to the next note's group of full samples
        start_index += unchanged_num_of_note_samples



    return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": sample_rate,
            "notes": notes}

    new_audio = np.array([], dtype=np.int16)
    def overlapped(slice_start, slice_end, note_index):
        audio_slice = audio[slice_start: slice_end]

        if len(audio_slice) < (slice_end - slice_start): # base case: end of audio
            return audio_slice


        return np.append(new_audio, overlapped(next_audio_slice, note_index + 1))

    return overlapped(0, int(notes[0][1] * sample_rate)+1, 0)




























