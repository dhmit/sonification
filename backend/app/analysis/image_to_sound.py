import numpy as np
import simpleaudio as sa
from colorthief import ColorThief
import cv2 as cv
from scipy.io import wavfile
import io
import base64

# Found from https://www.vobarian.com/celloanly/
cello_overtones = {
    2: 0.5,
    3: 0.1,
    4: 0.4,
    5: 0.23,
    6: 0.3,
    7: 0.43,
    8: 0.4,
    9: 0.3,
    10: 0.12
}

# Found from http://hyperphysics.phy-astr.gsu.edu/hbase/Music/clarw.html
clarinet_overtones = {
    3: 1,
    5: 0.5,
    7: 0.25,
}

# Found from http://hyperphysics.phy-astr.gsu.edu/hbase/Music/tromw.html
trombone_overtones = {
    2: 0.6,
    3: 1.37,
    4: .37,
    5: .33
}


def _generate_note(frequency, duration, sample_rate):
    """
    Uses the ADSR (Attack, Decay, Sustain, Release) envelope to
    generate a note that fades in and out realistically
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param sample_rate: sampling rate
    :return note: list of samples for the note
    """
    a_percentage = 0.1
    d_percentage = 0.1
    s_percentage = 0.1
    r_percentage = 0.7
    peak_weight = 1
    sustain_weight = 0.7
    final_weight = 0

    total_length = duration * sample_rate
    len_a = int(a_percentage * total_length)
    len_d = int(d_percentage * total_length)
    len_s = int(s_percentage * total_length)
    len_r = int(r_percentage * total_length)

    a_weights = [peak_weight * (2 ** (x / len_a) - 1) for x in range(len_a)]
    d_weights = [sustain_weight + (peak_weight - sustain_weight) * (2 ** (1 - x / len_d) - 1) for x in range(len_d)]
    s_weights = [sustain_weight for _ in range(len_s)]
    r_weights = [final_weight + sustain_weight * (2 ** (1 - x / len_r) - 1) for x in range(len_r)]

    all_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    time_steps = np.linspace(0, duration, (len_a + len_d + len_s + len_r), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * all_weights
    # note *= 32767 / np.max(np.abs(note))

    return note


def _synthesize_instruments(frequency, duration, sample_rate, overtones):
    """
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param sample_rate: sampling rate
    :param overtones: Dict instance containing overtone multiplier and relative amplitudes
    :return note: list of samples for the note
    """

    fundamental = _generate_note(frequency, duration, sample_rate)
    for harmonic in overtones.keys():
        fundamental += _generate_note(frequency * harmonic, duration, sample_rate)

    # note = fundamental * 32767 / np.max(np.abs(fundamental))
    return fundamental.tolist()


def _get_instrument(im):
    """
    Chooses an instrument to synthesize based off of the dominant color in the image
    :param im: image object
    :return: Dict instance that contains harmonics and relative amplitudes
    """
    color_thief_obj = ColorThief(im)
    rgb_tuple = color_thief_obj.get_color(quality=2)
    if max(rgb_tuple) == rgb_tuple[0]:
        return cello_overtones
    elif max(rgb_tuple) == rgb_tuple[1]:
        return clarinet_overtones
    else:
        return trombone_overtones


def _hist_weighted_average(array):
    """
    :param an array of arrays/bins that contains the number of pixels that are a certain brightness:
    :return: the average brightness
    """
    total = 0
    for single_bin in array:
        total += single_bin[0]

    w_average = 0
    for idx, single_bin in enumerate(array):
        w_average += idx * (single_bin[0] / total)

    return w_average


def _get_histogram_avg(img):
    """
    :param img: the loaded image
    :return:
    """
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    gray_hist = cv.calcHist([gray], [0], None, [256], [0, 256])
    return _hist_weighted_average(gray_hist)


def _get_tempo_for_slice(image_slice):
    """
    :param image_slice: a slice of the image
    :return: tempo in beats per minute
    """
    canny = cv.Canny(image_slice, 125, 175)
    total = image_slice.shape[0] * image_slice.shape[1]
    contours, hierarchies = cv.findContours(canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    tempo = 40 + 10000 * (len(contours) / total)
    return tempo


def image_to_note(image):
    """
    :param image:
    :return _wav_to_base64(audio, sample_rate): base64 encoding of a sound based on how negative or positive the text is
    """
    note_freq = brightness_to_freq(_get_histogram_avg(image))

    # get time steps for the sample
    sample_rate = 44100
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * sample_rate, False)

    # generate sine wave notes
    note = np.sin(note_freq * time_steps * 2 * np.pi)

    # concatenate notes
    audio = note
    # normalize to 16-bit range
    audio *= 32767 / np.max(np.abs(audio))
    # convert to 16-bit data
    audio = audio.astype(np.int16)


def _get_tempo_for_image(im, num_slices):
    im_array = im
    num_rows = im_array.shape[0]
    num_cols = im_array.shape[1]
    if num_slices > num_cols:
        num_slices = num_cols
    slice_width = num_cols // num_slices
    remainder = num_cols - (slice_width * num_slices)

    tempo = []  # keeping track of the output from the _get_tempo_for_slice function
    start_index = 0
    count = 1
    while start_index < num_cols - slice_width + 1:
        if remainder == 0:
            end_index = start_index + slice_width
        else:
            end_index = start_index + slice_width + 1
            remainder -= 1
        count += 1
        tempo.append(_get_tempo_for_slice(im_array[0:num_rows, start_index:end_index]))
        start_index = end_index
    return tempo


def brightness_to_freq(brightness):
    note_freq = 100 + brightness * 3.5
    return note_freq


def analyze_image(im):
    """
    :param im: .jpg image to be analyzed
    :return sound: sound created from this im
    """
    length_slice = 1/60  # in minutes
    num_slices = 5
    sample_rate = 44100
    opencv_im = cv.imdecode(np.frombuffer(im.read(), np.uint8), cv.IMREAD_UNCHANGED)
    instrument = _get_instrument(im)
    brightness = _get_histogram_avg(opencv_im)
    frequency = brightness_to_freq(brightness)
    tempos = _get_tempo_for_image(opencv_im, num_slices)
    beats_and_durations = [(max(1, round(tempo*length_slice)), length_slice*60/round(tempo*length_slice)) for tempo in tempos]

    full_audio = []
    for audio_slice in beats_and_durations:
        for _ in range(audio_slice[0]):
            full_audio += _synthesize_instruments(frequency, audio_slice[1], sample_rate, instrument)

    # normalize to 16-bit range
    full_audio = np.array(full_audio)
    full_audio *= 32767 / np.max(np.abs(full_audio))

    # convert to 16-bit data
    full_audio = full_audio.astype(np.int16)

    return _wav_to_base64(full_audio, sample_rate)


def _wav_to_base64(byte_array, sample_rate):
    """
    Encode the WAV byte array with base64
    :param byte_array: int16 numpy array
    :param sample_rate: integer, the sampling rate
    :return audio_data: base64 encoding of the given array
    """
    byte_io = io.BytesIO(bytes())
    wavfile.write(byte_io, sample_rate, byte_array)
    wav_bytes = byte_io.read()
    audio_data = base64.b64encode(wav_bytes).decode('UTF-8')
    return audio_data
