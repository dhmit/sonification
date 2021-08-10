"""
Various filtering functions to apply to audio represented as a 1D NumPy array with a sample_rate

All filters assume mono tracks (vs stereo) for audio input.
"""
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import stft, spectrogram


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
    A detection function meant to reduce the input audio signal to a version more suitable for detecting note onsets.
    Uses the principle that the spectral content of an audio signal increases in amplitude and varies drastically with
    the onset of a new note. Works best when there is some "musical envelope" of a note, such as
    attack-sustain-decay-release (ASDR). Approach outlined in part III, section A2 of this paper:
    https://drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg

    :param X: A 2D (NumPy array / Python list) representing the STFT of some 1D signal
    :return: A 1D (NumPy array / Python list) of spectral difference values, one for each STFT window
    """
    # [fft[0], fft[1], fft[2]]
    # length-N signal -> length-N fft (another signal)
    all_sd_values = np.array([])

    H = lambda x: (x + np.absolute(x)) / 2

    window_size, num_windows = X.shape

    for n in range(num_windows):
        sd = 0
        for k in range(window_size):
            if n == 0:
                try:
                    # with/without H of ...
                    sd += H(np.absolute(X[k, n])) ** 2
                except TypeError:
                    breakpoint()
                    raise
            else:
                sd += H(np.absolute(X[k, n]) - np.absolute(X[k, n - 1])) ** 2

        all_sd_values = np.append(all_sd_values, sd)
    print("all good in sd func...")

    return all_sd_values


def _phase_deviation(X):
    """
    A detection function meant to reduce the input audio signal to a version more suitable for detecting note onsets.
    Uses the principle that the phase between two audio waves changes drastically between notes (even if the same note
    if played repeatedly). Approach outlined in part III, section A3 of this paper:
    https://drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg

    :param X: A 2D (NumPy array / Python list) representing the STFT of some 1D signal
    :return: A 1D (NumPy array / Python list) representing the mean absolute phase deviation of a signal
    """
    # complex number = Me**(j*omega*t), M=magnitude, omega*t = phase
    # a + bj, M = (a^2 + b^2)**.5 , phase = arctan(b/a), .real, .imag, math.arctan(x.imag / x.real)
    # equivalent 2D numpy array (or Python list) where phi[n][k] was the phase of STFT[n][k], we could use that

    # unwrapped phase (in radians) of each coefficient in the STFT 2D list/array
    phase = np.angle(X, deg=False)

    def phi(k, n):
        """
        Compute the second difference of the phase of some STFT coefficient by window (time index).
        Returns the first difference if n == 1, the phase itself if n == 0.

        :param k: The frequency bin of the STFT (int).
        :param n: The time/window index of the STFT (int).
        :return: A float representing the second difference of the phase.
        """
        if n == 0:
            return phase[k, n]
        if n == 1:
            return phase[k, n] - phase[k, n - 1]

        return phase[k, n] - 2 * phase[k, n - 1] + phase[k, n - 2]

    deviations = np.array([])

    window_size, num_windows = X.shape

    for n in range(num_windows):
        dev = 0
        for k in range(window_size):
            dev += np.absolute(phi(k, n))

        deviations = np.append(deviations, dev / window_size)

    return deviations


def _find_peaks(x, threshold, min_spacing):
    """
    Helper function for detecting peak values in a list of samples to help detect note onsets
    :param x: A 1D list of floats representing the spectral difference of some audio signal
    :param threshold: A float (we'll only consider values to be peaks if they are above this value)
    :param min_spacing: A float (we'll only consider peaks to be separate if they are at least this many discrete time
        values apart)
    :return: A list of ints representing the indices of peak values in x
        (these should represent the windows in the original audio signal that contain note onsets) ??
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

        all_peaks_indices.append(max_index)

        start = max(0, max_index - min_spacing)
        end = min(max_index + min_spacing + 1, len(input_x))
        for i in range(start, end):
            input_x[i] = 0
        print("all good in peaks func...")


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
    # nperseg = 256
    # noverlap = nperseg // 2

    plt.figure()
    plt.plot(audio_samples)
    plt.xlabel('Sample index')
    plt.ylabel('Value')
    plt.title(f'Audio signal ($f_s={sample_rate}$ Hz')
    plt.show()

    nperseg = 100
    noverlap = nperseg // 3

    samp_freqs, samp_times, stft_signal = stft(
        audio_samples,
        sample_rate,
        window='hann',
        nperseg=nperseg,
        noverlap=noverlap,
        return_onesided=False
    )
    samp_freqs_spec, samp_times_spec, spec = spectrogram(
        audio_samples,
        sample_rate,
        window='hann',
        nperseg=nperseg,
        noverlap=noverlap
    )

    # breakpoint()

    # Plot the spectrogram ( = |STFT|**2 )
    plt.figure()
    plt.pcolormesh(samp_times_spec, samp_freqs_spec, spec, shading='gouraud')
    plt.ylabel('Frequency [Hz]')
    plt.xlabel('Time [sec]')
    plt.show()

    sd_values = _spectral_difference(stft_signal)

    plt.figure()
    plt.plot(sd_values)
    plt.xlabel('Window index')
    plt.ylabel('Spectral difference')
    plt.show()

    mean_abs_phase_deviation = _phase_deviation(stft_signal)

    plt.figure()
    plt.plot(mean_abs_phase_deviation)
    plt.xlabel('Window index')
    plt.ylabel('Mean absolute phase deviation')
    plt.show()

    window_indices = _find_peaks(sd_values.tolist(), 5, 4)

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
        (e.g., an output audio that plays twice as fast would require an input of `2`, enter `.5` for half as fast, etc)

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
    A4 = 440
    F4 = A4 * (2 ** (-4 / 12))
    new_audio_samples = audio_samples.copy()

    fund_freq = _get_frequency(audio_samples)
    if fund_freq < F4:
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
