"""
Various filtering functions to apply to audio represented as a 1D NumPy array with a sample_rate

All filters assume mono tracks (vs stereo) for audio input.
"""
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import stft, spectrogram
from scipy.stats import mode


# helper functions:
# to apply the filter (pass in a filter(function), a sin wave, and maybe a **kwargs dictionary?, return sin wave)
# to find the notes/chords in a wave (pass in a wave, output something that helps us take the right slices of audio)
# each filter: input a note(tuple), output a new note (maybe with some extra kwargs)

def apply_filter(audio, filter_function, **kwargs):
    """
    Apply a filter to each note in an audio signal and return the filtered audio.

    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz).
    :param filter_function: A function that takes in a 1D NumPy array and extra **kwargs.

    :return: A new NumPy array and the sample rate representing the filtered audio.
    """
    samples, sample_rate = audio

    window_indices, sample_indices, note_frequencies = get_notes(audio)

    if filter_function == overlap_notes:
        new_samples = overlap_notes((samples, sample_indices), **kwargs)
    else:
        new_samples = np.array([], dtype=samples.dtype)

        for i in range(len(sample_indices) - 1):
            note = samples[sample_indices[i]:sample_indices[i + 1]]
            new_note = filter_function(note, **kwargs)
            new_samples = np.append(new_samples, new_note)

    return new_samples, sample_rate


def get_notes(audio):
    """
    Find the window and sample indices that represent note onsets. This method was inspired from lab 9 of MIT's 6.003
    as taught in the spring 2021 semester: <https://sigproc.mit.edu/spring21/psets/09/resynthesis>.

    Convention: The sample indices are computed from the beginning of each window in which a note onset is detected.

    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz).

    :return: A tuple of two lists, one of window indices and one of sample indices, both of which correspond to
        note onsets.
    """
    audio_samples, sample_rate = audio

    # Default arguments for stft function:
    # window = 'hann'
    # nperseg = 256
    # noverlap = nperseg // 2

    # Code to plot the audio samples:
    # plt.figure()
    # plt.plot(audio_samples)
    # plt.xlabel('Sample index')
    # plt.ylabel('Value')
    # plt.title(f'Audio signal ($f_s={sample_rate}$ Hz)')
    # plt.show()

    nperseg = 1024
    noverlap = 32

    samp_freqs, samp_times, stft_signal = stft(
        audio_samples,
        sample_rate,
        window='hann',
        nperseg=nperseg,
        noverlap=noverlap,
        return_onesided=False
    )
    window_size, num_windows = stft_signal.shape

    # Code to create a spectrogram, the squared magnitude of the STFT (for plotting):
    # With the exception of return_onesided, the parameters in the stft and spectrogram functions should match up!
    samp_freqs_spec, samp_times_spec, spec = spectrogram(
        audio_samples,
        sample_rate,
        window='hann',
        nperseg=nperseg,
        noverlap=noverlap
    )

    # Code to plot the spectrogram:
    plt.figure()
    plt.pcolormesh(samp_times_spec, samp_freqs_spec, spec, shading='gouraud')
    plt.ylabel('Frequency [Hz]')
    plt.xlabel('Time [sec]')
    plt.show()

    sd_values = _spectral_difference(stft_signal)

    # Code to plot the spectral difference:
    plt.figure()
    plt.stem(sd_values)
    plt.xlabel('Window index')
    plt.ylabel('Spectral difference')
    plt.show()

    # An alternative to the spectral difference--see the function's docstring.
    # mean_abs_phase_deviation = _phase_deviation(stft_signal)

    # Code to plot the mean absolute phase deviation:
    # plt.figure()
    # plt.plot(mean_abs_phase_deviation)
    # plt.xlabel('Window index')
    # plt.ylabel('Mean absolute phase deviation')
    # plt.show()

    threshold = np.percentile(sd_values, 97)
    min_spacing = num_windows // 10
    window_indices = _find_peaks(sd_values.tolist(), threshold, min_spacing)
    breakpoint()

    sample_indices = []
    for i in window_indices:
        sample_indices.append(i * (nperseg - noverlap))

    note_frequencies = []
    for i in range(len(window_indices) - 1):
        n_start = window_indices[i]
        n_end = window_indices[i + 1]

        fundamental_freq = _freq_for_note(stft_signal, sample_rate, n_start, n_end)
        note_frequencies.append(fundamental_freq)

    note_frequencies.append(_freq_for_note(stft_signal, sample_rate, window_indices[-1], num_windows))

    return window_indices, sample_indices, note_frequencies


def _spectral_difference(X):
    """
    A detection function meant to reduce the input audio signal to a version more suitable for detecting note onsets.
    Uses the principle that the spectral content of an audio signal increases in amplitude and varies drastically with
    the onset of a new note. Works best when there is some "musical envelope" of a note, such as
    attack-sustain-decay-release (ASDR). Approach outlined in part III, section A2 of this paper:
    https://drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg

    :param X: A 2D NumPy array representing the STFT of some 1D signal.

    :return: A 1D NumPy array of spectral difference values, one for each STFT window.
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
                sd += H(np.absolute(X[k, n])) ** 2
            else:
                sd += H(np.absolute(X[k, n]) - np.absolute(X[k, n - 1])) ** 2

        all_sd_values = np.append(all_sd_values, sd)

    return all_sd_values


def _phase_deviation(X):
    """
    A detection function meant to reduce the input audio signal to a version more suitable for detecting note onsets.
    Uses the principle that the phase between two audio waves changes drastically between notes (even if the same note
    if played repeatedly). Approach outlined in part III, section A3 of this paper:
    <https://drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg>.

    This function presents an alternative to the _spectral_difference function that looks at the phase instead of
    magnitude of each complex coefficient in the STFT. The results here do vary drastically at each note onset but in
    a very different way (see graph). Such a difference requires its own "peak-finding" function! See the paper
    attached in the docstring for other approaches (including some probabilistic methods!).

    :param X: A 2D NumPy array representing the STFT of some 1D signal.

    :return: A 1D NumPy array representing the mean absolute phase deviation of a signal.
    """

    # unwrapped phase (in radians) of each coefficient in the STFT 2D list/array
    phase = np.angle(X, deg=False)

    def phi(k, n):
        """
        Compute the second difference of the phase of some STFT coefficient by window (time index).
        Return the phase itself if n == 0.

        :param k: An int representing the frequency bin of the STFT.
        :param n: And int representing the window (time) index of the STFT.
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


def _find_peaks(sd, threshold, min_spacing):
    """
    Helper function for detecting peak values in a list of samples to help detect note onsets.
    This peak-finding function was designed for use with the spectral difference detection function; the phase deviation
    function likely needs a completely different "peak-finding" function (see plots of both to see the difference!).

    :param sd: A 1D Python list of floats representing the spectral difference of some audio signal.
    :param threshold: A float representing the threshold value for what we define to be a "peak".
    :param min_spacing: A float representing the minimum distance in samples between peaks.

    :return: A Python list of ints representing the indices of peak values in sd
        (these should represent the windows in the original audio signal that contain note onsets).
    """
    all_peaks_indices = []
    input_sd = sd[:]
    len_sd = len(input_sd)

    while True:
        max_sd = max(input_sd)
        if max_sd <= threshold:
            return sorted(all_peaks_indices)

        max_index = input_sd.index(max_sd)
        all_peaks_indices.append(max_index)

        start = max(0, max_index - min_spacing)
        end = min(max_index + min_spacing + 1, len_sd)
        for i in range(start, end):
            input_sd[i] = 0


def _freq_for_note(X, sample_rate, n_start, n_stop):
    """
    Find the fundamental frequency of a given note

    :param X: A 2D NumPy array representing the STFT of some 1D signal
    :param sample_rate: An int representing the sampling rate corresponding to the STFT, recorded in Hz
    :param n_start: An int representing the starting window index for a particular note
    :param n_stop: A float representing the ending window index (exclusive) for a particular note
    :return: An float representing the fundamental frequency of the note in Hz
    """
    window_size = X.shape[0]
    freq_resolution = sample_rate / window_size

    k_candidates = np.array([])

    for n in range(n_start, n_stop):
        k_candidates = np.append(k_candidates, _k_at_window(X, n))

    k_winners, _ = mode(k_candidates)

    freq_bin = k_winners[0]

    breakpoint()
    assert 0 <= freq_bin < window_size, f'Window size is {window_size}, but k={freq_bin}!'

    return freq_resolution * freq_bin


def _k_at_window(X, n):
    """
    Determine the value of k that has the most energy at a given window index n

    :param X: A 2D NumPy array representing the STFT of some 1D signal
    :param n: An int representing a window (time) index

    :return: An int representing the frequency bin k that has the most energy in a particular window of the STFT
    """

    window_size = X.shape[0]

    all_k_values = np.array([])

    for ik in range(window_size):
        all_k_values = np.append(all_k_values, np.absolute(X[ik, n]) ** 2)

    max_energy = np.amax(all_k_values)
    max_k_index = all_k_values.tolist().index(max_energy)

    return max_k_index


def change_volume(audio_samples, amplitude):
    """
    A filter designed to modify the amplitude of a note.
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers.

    :param audio_samples: A 1D NumPy array representing a single note.
    :param amplitude: An int representing the factor increase or decrease in volume.

    :return: A new 1D NumPy array reflecting the change in amplitude.
    """

    return amplitude * audio_samples


def change_speed(audio_samples, speed_factor):
    """
    A filter designed to change the speed/tempo of a note.

    :param audio_samples: A 1D NumPy array representing a single note.
    :param speed_factor: A positive float representing the new speed of playback for the output audio, relative to the
        original (e.g., pass a speed_factor of `2` to obtain audio that plays twice as fast, pass a speed_factor of `.5`
        to obtain audio that plays half as fast, etc).

    :return: A new 1D NumPy array reflecting the change in speed.
    """
    if speed_factor <= 0:
        raise ValueError("Speed factor must be greater than zero.")

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
    A filter designed to change the pitch of a note.

    :param audio_samples: A 1D NumPy array representing a single note.
    :param pitch_factor: An unsigned float representing the factor increase or decrease in a note's frequency.

    :return: A new 1D NumPy array reflecting the change in pitch.
    """

    pitch_factor = abs(pitch_factor)
    _, _, frequencies = get_notes(audio_samples)
    new_audio_samples = np.array([], dtype=audio_samples.dtype)

    # for a singular note...
    # ...

    #  for the entire audio...
    #  Go through each fundamental frequency for each note
    # for each_f in original_audio_frequencies:
    #     new_freq = each_f * pitch_factor
    #
    #     # change each old freq to new frequency and update a samples array to return

    return new_audio_samples

    # OLD

    # audio = audio_metadata["audio_samples"]
    # sample_rate = audio_metadata["sample_rate"]
    # new_audio = np.array([], dtype=audio.dtype)

    # notes = []
    # is_chord = False
    # for note_frequency, note_duration, note_score in audio_metadata["notes"]:
    #
    #     if type(note_frequency) == tuple:
    #         is_chord = True
    #         new_frequency = note_frequency[0] * pitch_factor
    #     else:
    #         new_frequency = note_frequency * pitch_factor
    #
    #     notes.append((new_frequency, note_duration, note_score))
    #
    #     t = np.linspace(0, note_duration, note_duration * sample_rate)
    #
    #     sin_wave = np.sin(2 * np.pi * new_frequency * t)
    #     sin_wave = np.array(sin_wave)
    #     sin_wave *= 32767 / np.max(np.abs(sin_wave))
    #     sin_wave = sin_wave.astype(np.int16)
    #
    #     new_audio = np.append(new_audio, sin_wave)
    #
    # new_audio_metadata = {
    #     "audio_samples": new_audio,
    #     "sample_rate": sample_rate,
    #     "notes": notes
    # }
    #
    # if is_chord:
    #     return add_chords(new_audio_metadata)
    #
    # return new_audio_metadata


def add_chords(audio_samples):
    """
    A filter designed to build a chord upon a note, treated as the root of the chord. Chords are either major or minor
    triads depending on the fundamental frequency of the note (the cutoff frequency is F4).

    :param audio_samples: A 1D NumPy array representing a single note

    :return: A new NumPy array reflecting the constructed chord.
    """
    A4 = 440
    F4 = A4 * (2 ** (-4 / 12))
    new_audio_samples = audio_samples.copy()

    _, _, fund_freq = get_notes(audio_samples)
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
    A filter designed to overlap notes within an audio signal.

    :param audio: A tuple containing a 1D NumPy array (of samples) and a Python list of sample indices
    :param overlap_factor: A float between 0 and 1 representing the percentage of overlap between notes in the audio,
        relative to the duration of each note (e.g., pass an overlap_factor of `.25` to overlap the last
        25% of each note's duration with the subsequent note (??)

    :return: A new NumPy array reflecting audio with overlapping notes.
    """
    return np.array([])
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
