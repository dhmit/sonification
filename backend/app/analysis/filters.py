"""
Various filtering functions to apply to audio represented as a 1D NumPy array with a sample_rate

All filters assume mono tracks (vs stereo) for audio input.
"""
import numpy as np
from scipy.signal import stft


# helper functions:
# to apply the filter (pass in a filter(function), a sin wave, and maybe a **kwargs dictionary?, return sin wave)
# to find the notes/chords in a wave (pass in a wave, output something that helps us take the right slices of audio)
# each filter: input a note(tuple), output a new note (maybe with some extra kwargs)

def apply_filter(audio, filter_function, **kwargs):
    """
    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz)
    :param filter_function: A function that takes in a 1D NumPy array and extra **kwargs
    :return: A new NumPy array and the sample rate
    """
    samples, sample_rate = audio

    note_indices = get_notes(audio)
    new_samples = np.array([], dtype=samples.dtype)

    for i in range(len(note_indices) - 1):
        note = samples[note_indices[i]:note_indices[i + 1]]
        new_note = filter_function(note, **kwargs)
        new_samples = np.append(new_samples, new_note)

    return new_samples, sample_rate


def _spectral_difference(X):
    """
    Helper function to compute the spectral difference between windows of an STFT.
    :param X: A 2D NumPy array representing the STFT of some 1D signal
    :return: a list of spectral difference values, one for each STFT window
    """
    # [fft[0], fft[1], fft[2]]
    # length-N signal -> length-N fft (another signal)
    all_sd_values = []

    breakpoint()

    H = lambda x: (x + abs(x)) / 2

    for i in range(len(X)):
        sd = 0
        for k in range(len(X[0])):
            if i == 0:
                try:
                    sd += H(abs(X[i][k])) ** 2
                except TypeError:
                    breakpoint()
                    raise
            else:
                sd += H(abs(X[i][k]) - abs(X[i - 1][k])) ** 2

        all_sd_values.append(sd)
    print("all good in sd func...")

    return all_sd_values


def _find_peaks(x, threshold, min_spacing):
    """
    Helper function for detecting peak values in a list of samples to help detect note onsets
    :param x: A 1D list of floats representing the spectral difference of some audio signal
    :param threshold: A float (we'll only consider values to be peaks if they are above this value)
    :param min_spacing: A float (we'll only consider peaks to be separate if they are at least this many discrete time
        values apart)
    :return: A list of ints representing the indices of peak values in x
        (these should represent the windows in the original audio signal that contain note onsets)
    """
    all_peaks_indices = []
    input_x = x[:]

    while True:
        try:
            max_x = max(input_x)
        except ValueError:
            breakpoint()
            raise
        max_index = input_x.index(max_x)
        if max_x <= threshold:
            return sorted(all_peaks_indices)

        start = max(0, max_index - min_spacing)
        end = min(max_index + min_spacing + 1, len(input_x))
        for i in range(start, end):
            input_x[i] = 0
        print("all good in peaks func...")

        all_peaks_indices.append(max_index)


def get_notes(audio):
    """
    Find the sample indices that represent note onsets. This method was inspired from lab 9 of MIT's 6.003 as taught
    in the spring 2021 semester: https://sigproc.mit.edu/spring21/psets/09/resynthesis
    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz)
    :return: A list of sample indices that correspond to note onsets
    """
    audio_samples, sample_rate = audio

    # Default arguments for stft function:
    # window = 'hann'
    nperseg = 256
    noverlap = nperseg // 2

    # nperseg = 128
    # noverlap = nperseg // 4

    breakpoint()

    samp_freqs, samp_times, stft_signal = stft(
        audio_samples,
        sample_rate,
        window='boxcar',
    )
    sd_values = _spectral_difference(stft_signal)
    window_indices = _find_peaks(sd_values, 5, 4)

    sample_indices = []

    for i in window_indices:
        sample_indices.append(i * (nperseg - noverlap))

    return sample_indices

def k_at_time(X, m):
    pass

def k_for_note(X, m_start, m_stop):
    pass

def _get_frequency(audio_samples):
    """
    Given some audio that represents a note, return the fundamental frequency of that note.
    :param audio_samples: A 1D NumPy array
    :return: a positive float representing the frequency of the note in Hz
    """
    raise NotImplementedError


def change_volume(audio_samples, amplitude):
    """
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers.

    :param audio_samples: A 1D NumPy array of audio samples
    :param amplitude: An int representing the factor increase or decrease in volume

    :return: A modified NumPy array based on the amplitude parameter
    """

    return amplitude * audio_samples


def change_speed(audio_samples, speed_factor):
    """
    :param audio_samples: A 1D NumPy array of audio_samples representing a single note
    :param speed_factor: A positive float representing the new relative speed of playback for the output audio
        (e.g., an output audio that plays twice as fast would require an input of `2`)

    :return: A new NumPy array
    """
    if speed_factor < 0:
        raise ValueError("Speed Factor cannot be negative.")

    new_audio_samples = np.array([], dtype=audio_samples.dtype)
    fraction = 1 / speed_factor
    len_audio = len(audio_samples)

    num_desired_samples = int(len_audio * fraction)

    if fraction <= 1:
        return audio_samples[:num_desired_samples]

    num_copies = num_desired_samples // len_audio
    num_remaining_samples = num_desired_samples % len_audio

    for _ in range(num_copies):
        new_audio_samples = np.append(new_audio_samples, audio_samples.copy())

    return np.append(new_audio_samples, audio_samples[:num_remaining_samples])


def change_pitch(audio_samples, pitch_factor):
    """
    :param audio_samples: A 1D NumPy array representing a single note
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


def add_chords(audio_samples):
    """
    :param audio_samples: A 1D NumPy array representing a single note

    :return: A new NumPy array
    """
    new_audio_samples = audio_samples.copy()

    fund_freq = _get_frequency(audio_samples)
    if fund_freq < 440:
        # minor chord
        # ratio of third note from fundamental frequency divided by fundamental frequency
        second_freq_factor = 1.19
    else:
        # major chord
        # ratio of fourth note from fundamental frequency divided by fundamental frequency
        second_freq_factor = 1.26
    # ratio of seventh note from fundamental frequency divided by fundamental frequency
    third_freq_factor = 1.5

    # generate notes to stack on top of first note
    second_note = change_pitch(audio_samples, second_freq_factor)
    third_note = change_pitch(audio_samples, third_freq_factor)

    # concatenate notes via element-wise addition -- these must all have the same number of samples!
    new_audio_samples += second_note
    new_audio_samples += third_note

    return new_audio_samples


def overlap_notes(audio, overlap_factor):
    """
    :param audio: A 1D NumPy array
    :param overlap_factor: A float between 0 and 1 representing the percentage of overlap between notes in the audio

    :return: A new NumPy array
    """
    pass
    # if not (0 <= overlap_factor <= 1):
    #     raise ValueError("Invalid overlap factor. Please choose number in the interval [0, 1].")
    # if overlap_factor == 0:
    #     return audio_samples.copy()
    #
    # def overlap():
    #     pass
    #
    # new_audio = np.array([], dtype=audio.dtype)
    #
    # for n in range(len(notes) - 1, -1, -1):
    #     new_audio = np.append(new_audio, overlap())
    # # start = 0
    # # length_of_note (in samples) = note_duration * sample_rate
    # # num_samples_before_overlap = int(length_note * (1 - overlap_factor))
    # # new_audio = np.append(new_audio, audio[start: start + length_of_note]
    # # normally, saying li[a:b] on Py list returns new list: we want the slice of the original list so we can change it
    # #   does NumPy have separate methods for these two kinds of slicing?
    # # assuming we have the slice from the original:
    #
    # # new_audio[start + num_samples_before_overlap: start + length_of_note] += audio[start + length_of_note + 1: length of the new audio slice[
    # # keep going: redefine start, but start would be different for the new audio and audio?
    #
    # # notes = []
    # start_index = 0
    # for index, (note_frequency, note_duration, note_score) in enumerate(notes):
    #     full_num_of_note_samples = int(note_duration * sample_rate)
    #     unchanged_factor = 1 - overlap_factor
    #
    #     unchanged_num_of_note_samples = unchanged_factor * full_num_of_note_samples
    #     # the entire audio (or the first half/group for this note's samples?)?
    #     original_audio_for_this_note = audio[start_index: start_index + full_num_of_note_samples]
    #
    #     # adding entire original audio before changing slices of it later on?
    #     new_audio = np.append(new_audio, original_audio_for_this_note)
    #
    #     # second half/group of this note's full samples (the group of samples that need to be 'reassigned'?)
    #     changed_slice_starting_index = start_index + unchanged_num_of_note_samples
    #     changed_slice_ending_index = start_index + full_num_of_note_samples
    #     changed_slice_new_audio = new_audio[changed_slice_starting_index:changed_slice_ending_index]
    #
    #     # the originally second half/group of samples are now reassigned to...
    #     changed_slice_new_audio = something
    #
    #     # move on to the next note's group of full samples
    #     start_index += unchanged_num_of_note_samples
    #
    # return {"audio_samples": audio_metadata["audio_samples"], "sample_rate": sample_rate,
    #         "notes": notes}
    #
    # new_audio = np.array([], dtype=np.int16)
    #
    # def overlapped(slice_start, slice_end, note_index):
    #     audio_slice = audio[slice_start: slice_end]
    #
    #     if len(audio_slice) < (slice_end - slice_start):  # base case: end of audio
    #         return audio_slice
    #
    #     return np.append(new_audio, overlapped(next_audio_slice, note_index + 1))
    #
    # return overlapped(0, int(notes[0][1] * sample_rate) + 1, 0)
