"""
Various filtering functions to apply to audio represented as a 1D NumPy array with a sample_rate

All filters assume mono tracks (vs stereo) for audio input.
"""
import warnings

import numpy as np
from scipy.signal import stft
from scipy.stats import mode

from ..common import NOTE_FREQS


def apply_filter(audio, filter_function, **kwargs):
    """
    Apply a filter to each note in an audio signal and return the filtered audio.

    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz).
    :param filter_function: A function that takes in a 1D NumPy array and extra **kwargs.

    :return: A new NumPy array and the sample rate representing the filtered audio.
    """
    samples, sample_rate = audio

    window_indices, sample_indices, root_notes = get_notes(audio)

    # Uncomment to see detected notes in the terminal
    # print(f'Note slice indices: {sample_indices}', f'Corresponding root notes: {root_notes}', sep='\n')

    new_samples = np.array([], dtype=samples.dtype)

    for i in range(len(sample_indices)):
        if hasattr(filter_function, 'uses_freq') and filter_function.uses_freq:
            kwargs['root_note'] = root_notes[i]

        try:
            note = samples[sample_indices[i]:sample_indices[i + 1]]
        except IndexError:
            note = samples[sample_indices[i]:]
        new_note = filter_function(note, **kwargs)
        new_samples = np.append(new_samples, new_note)

    return new_samples, sample_rate


def get_notes(audio):
    """
    Find the window and sample indices that represent note onsets and the corresponding note names.
    This method was inspired from lab 9 of MIT's 6.003 as taught in the spring 2021 semester:
    <https://sigproc.mit.edu/spring21/psets/09/resynthesis>.

    Convention: The sample indices are computed from the beginning
    of each window in which a note onset is detected.

    :param audio: A tuple containing a 1D NumPy array (of samples) and a sample rate (in Hz).

    :return: A tuple of two lists, one of window indices and one of sample indices,
        both of which correspond to note onsets.
    """
    audio_samples, sample_rate = audio
    if sample_rate <= 0:
        raise ValueError(f'The sample rate of {sample_rate} Hz must be greater than 0.')

    if len(audio_samples) == 0:
        warnings.warn("This audio signal doesn\'t contain any samples!", stacklevel=2)
        return [], [], []

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

    nperseg = min(1024, len(audio_samples))
    hop_size = int(nperseg * .75)
    noverlap = nperseg - hop_size

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
    # With the exception of return_onesided, the parameters in the stft
    # and spectrogram functions should match up!
    # samp_freqs_spec, samp_times_spec, spec = spectrogram(
    #     audio_samples,
    #     sample_rate,
    #     window='hann',
    #     nperseg=nperseg,
    #     noverlap=noverlap
    # )

    # Code to plot the spectrogram:
    # plt.figure()
    # plt.pcolormesh(samp_times_spec, samp_freqs_spec, spec, shading='gouraud')
    # plt.ylabel('Frequency [Hz]')
    # plt.xlabel('Time [sec]')
    # plt.show()

    sd_values = _spectral_difference(stft_signal)

    # Code to plot the spectral difference:
    # plt.figure()
    # plt.stem(sd_values)
    # plt.xlabel('Window index')
    # plt.ylabel('Spectral difference')
    # plt.show()

    # An alternative to the spectral difference--see the function's docstring.
    # mean_abs_phase_deviation = _phase_deviation(stft_signal)

    # Code to plot the mean absolute phase deviation:
    # plt.figure()
    # plt.plot(mean_abs_phase_deviation)
    # plt.xlabel('Window index')
    # plt.ylabel('Mean absolute phase deviation')
    # plt.show()

    min_spacing = num_windows // 10
    window_indices = _find_peaks(sd_values.tolist(), min_spacing)

    sample_indices = []
    for i in window_indices:
        sample_indices.append(i * hop_size)

    root_notes = []
    for i in range(len(window_indices) - 1):
        n_start = window_indices[i]
        n_end = window_indices[i + 1]

        fund_freq = _freq_for_note(stft_signal, sample_rate, n_start, n_end)
        root_note = sorted(NOTE_FREQS.keys(), key=lambda note: abs(fund_freq - NOTE_FREQS[note]))[0]
        root_notes.append(root_note)

    fund_freq = _freq_for_note(stft_signal, sample_rate, window_indices[-1], num_windows)
    root_note = sorted(NOTE_FREQS.keys(), key=lambda note: abs(fund_freq - NOTE_FREQS[note]))[0]
    root_notes.append(root_note)

    return window_indices, sample_indices, root_notes


def _spectral_difference(X):
    """
    A detection function meant to reduce the input audio signal to a version more suitable
    for detecting note onsets. Uses the principle that the spectral content of an audio signal
    increases in amplitude and varies drastically with the onset of a new note. Works best when
    there is some "musical envelope" of a note, such as attack-sustain-decay-release (ASDR).
    Approach outlined in part III, section A2 of this paper:
    drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg
    :param X: A 2D NumPy array representing the STFT of some 1D signal.
    :return: A 1D NumPy array of spectral difference values, one for each STFT window.
    """
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
    drive.google.com/file/d/0B2SQvWn0_78BNHhaOGx1dmpxQlE/view?resourcekey=0-N4pDrco3dEPZzA6hJ1Giqg

    This function presents an alternative to the _spectral_difference function that looks
    at the phase instead of magnitude of each complex coefficient in the STFT. The results here
    do vary drastically at each note onset but in a very different way (see graph).
    Such a difference requires its own "peak-finding" function! See the paper attached in the
    docstring for other approaches (including some probabilistic methods!).

    :param X: A 2D NumPy array representing the STFT of some 1D signal.

    :return: A 1D NumPy array representing the mean absolute phase deviation of a signal.
    """

    # unwrapped phase (in radians) of each coefficient in the STFT 2D list/array
    phase = np.unwrap(
        np.angle(X, deg=False),
        axis=-1
    )

    def phi(k, n):
        """
        Compute the second difference of the phase of some STFT coefficient by window (time index).
        Return the phase itself if n == 0.

        :param k: An int representing the frequency bin of the STFT.
        :param n: And int representing the window (time) index of the STFT.
        :return: A float representing the second difference of the phase.
        """
        if n == 0:
            return np.absolute(phase[k, n])
        if n == 1:
            return np.absolute(phase[k, n] - phase[k, n - 1])

        return np.absolute(phase[k, n] - phase[k, n - 1]) - np.absolute(
            phase[k, n - 1] - phase[k, n - 2])

    deviations = np.array([])

    window_size, num_windows = X.shape

    for n in range(num_windows):
        dev = 0
        for k in range(window_size):
            dev += phi(k, n)

        deviations = np.append(deviations, dev / window_size)

    return deviations


def _find_peaks(sd, min_spacing):
    """
    A helper function for detecting peak values in a list of samples to help detect note onsets.
    This peak-finding function was designed for use with the spectral difference detection function;
    the phase deviation function likely needs a completely different "peak-finding" function
    (see plots of both to see the difference!).

    :param sd: A 1D Python list of floats representing the spectral difference of some audio signal.
    :param min_spacing: A float representing the minimum distance in samples between peaks.

    :return: A Python list of ints representing the indices of peak values in sd
        (these should represent the windows in the original audio signal that contain note onsets).
    """
    all_peaks_indices = []
    input_sd = sd[:]
    len_sd = len(input_sd)
    mean_weight = 1
    median_weight = 1
    m = 7
    peak_weight = 0.05
    highest_peak = 0

    for n in range(len_sd):
        if n == 0:
            threshold = 0
        else:
            threshold = (median_weight * np.median(sd[n - m:n]) +
                         mean_weight * np.mean(sd[n - m:n]) +
                         peak_weight * highest_peak)

        if input_sd[n] > threshold:
            all_peaks_indices.append(n)
            if input_sd[n] > highest_peak:
                highest_peak = input_sd[n]

            start = max(0, n - min_spacing)
            end = min(n + min_spacing + 1, len_sd)

            for i in range(start, end):
                input_sd[i] = 0

    return all_peaks_indices


def _freq_for_note(X, sample_rate, n_start, n_stop):
    """
    Find the frequency that most likely corresponds with a note by targeting its fundamental
    frequency.

    :param X: A 2D NumPy array representing the STFT of some 1D signal.
    :param sample_rate: An int representing the sampling rate corresponding to the STFT,
    recorded in Hz.
    :param n_start: An int representing the starting window index for a particular note.
    :param n_stop: A float representing the ending window index (exclusive) for a particular note.

    :return: An float representing the fundamental frequency of the note in Hz
    """
    window_size = X.shape[0]
    freq_resolution = sample_rate / window_size

    k_candidates = np.array([])

    for n in range(n_start, n_stop):
        k_candidates = np.append(k_candidates, _k_at_window(X, n))

    k_winners, _ = mode(k_candidates)

    freq_bin = k_winners[0]

    return freq_resolution * freq_bin


def _k_at_window(X, n):
    """
    Determine the frequency bin k of that has the most energy at a given window of an STFT.

    :param X: A 2D NumPy array representing the STFT of some 1D signal.
    :param n: An int representing a window (time) index.

    :return: An int representing the frequency bin k that has the most energy in a particular
    window of the STFT.
    """

    window_size = X.shape[0]

    all_k_values = np.array([])

    for ik in range(window_size):
        all_k_values = np.append(all_k_values, np.absolute(X[ik, n]) ** 2)

    max_energy = np.amax(all_k_values)
    max_k_index = all_k_values.tolist().index(max_energy)

    return max_k_index


def add_chords(audio_samples, root_note):
    """
    A filter designed to build a chord upon a note, treated as the root of the chord.
    Chords are either major or minor
    triads depending on the fundamental frequency of the note (the cutoff frequency is F4).

    :param audio_samples: A 1D NumPy array representing a single note.
    :param root_note: A str representing the root note of the audio sample (e.g., 'A4').

    :return: A new NumPy array reflecting the constructed chord.
    """
    F4 = NOTE_FREQS['F4']
    new_audio_samples = audio_samples.copy()

    fund_freq = NOTE_FREQS[root_note]

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

    second_note = change_pitch(audio_samples, second_freq_factor)
    third_note = change_pitch(audio_samples, third_freq_factor)

    new_audio_samples += second_note
    new_audio_samples += third_note

    return new_audio_samples


add_chords.uses_freq = True


def change_pitch(audio_samples, pitch_factor):
    """
    A filter designed to change the pitch of a note.

    :param audio_samples: A 1D NumPy array representing a single note.
    :param pitch_factor: A positive float representing the factor increase or decrease in a
    note's frequency.
    (e.g., pass a pitch_factor of `2` to obtain audio that is one pitch higher,
    pass a pitch_factor of `.5` to obtain audio that is one pitch lower, etc).

    :return: A new 1D NumPy array reflecting the change in pitch.
    """
    if pitch_factor <= 0:
        raise ValueError(f'Pitch factor \"{pitch_factor}\" should be greater than 0.')

    fraction = 1 / pitch_factor
    stretched = stretch_audio(audio_samples, fraction)

    return _change_speed(stretched.copy(), pitch_factor)


def _change_speed(audio_samples, speed_factor):
    """
    A private helper function that changes speed and pitch of a note.
    :param audio_samples: A 1D NumPy array representing a single note.
    :param speed_factor: A positive float representing the new speed of playback for the output
    audio, relative to the original (e.g., pass a speed_factor of `2` to obtain audio that plays
    twice as fast, pass a speed_factor of `.5` to obtain audio that plays half as fast, etc).

    :return: A new 1D NumPy array reflecting the change in speed and pitch of a note.
    """

    indices = np.arange(0, len(audio_samples), speed_factor)
    indices = indices[indices < len(audio_samples)].astype(int)

    return audio_samples[indices]


def change_volume(audio_samples, amplitude):
    """
    A filter designed to modify the amplitude of a note.
    NOTE: There is more to "loudness" to "amplitude" conversion than merely an amplitude factor.
    We still need to work out this relation to create a filter that's useful to users and developers

    :param audio_samples: A 1D NumPy array representing a single note.
    :param amplitude: A float representing the factor increase or decrease in volume.

    :return: A new 1D NumPy array reflecting the change in amplitude.
    """
    if amplitude < 0:
        raise ValueError(f'Amplitude \"{amplitude}\" must be a non-negative number.')

    return audio_samples * amplitude


def stretch_audio(audio_samples, speed_factor):
    """
    A filter designed to change the speed/tempo of a note.

    :param audio_samples: A 1D NumPy array representing a single note.
    :param speed_factor: A positive float representing the new speed of playback for the output
    audio, relative to the original (e.g., pass a speed_factor of `2` to obtain audio that plays
    twice as fast, pass a speed_factor of `.5` to obtain audio that plays half as fast, etc).

    :return: A new 1D NumPy array reflecting the change in speed.
    """

    if speed_factor <= 0:
        raise ValueError(f'Speed factor \"{speed_factor}\" must be greater than zero.')

    new_audio_samples = np.array([], dtype=audio_samples.dtype)
    fraction = 1 / speed_factor
    len_audio = len(audio_samples)
    if len_audio == 0:
        return audio_samples.copy()

    num_desired_samples = int(len_audio * fraction)

    if fraction <= 1:
        return audio_samples[:num_desired_samples]

    num_copies = num_desired_samples // len_audio
    num_remaining_samples = num_desired_samples % len_audio

    for _ in range(num_copies):
        new_audio_samples = np.append(new_audio_samples, audio_samples.copy())

    return np.append(new_audio_samples, audio_samples[:num_remaining_samples])


# TODO
def overlap_notes(audio, overlap_factor):
    """
    A filter designed to overlap notes within an audio signal.

    :param audio: A tuple containing a 1D NumPy array (of samples) & a Python list of sample indices
    :param overlap_factor:
    A float between 0 and 1 representing the percentage of overlap between notes in the audio,
        relative to the duration of each note (e.g., pass an overlap_factor of `.25` to overlap
        the last 25% of each note's duration with the subsequent note (??)

    :return: A new NumPy array reflecting audio with overlapping notes.
    """

    if not (0 <= overlap_factor <= 1):
        raise ValueError("Invalid overlap factor. Please choose number in the interval [0, 1].")

    return audio.copy()
