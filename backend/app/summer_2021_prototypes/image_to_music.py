"""
Methods for taking an image and returning music
"""

import numpy as np
import cv2 as cv
from colorthief import ColorThief

from app.synthesis.audio_encoding import WAV_SAMPLE_RATE
from app.synthesis.synthesizers import generate_note

# Found from https://www.vobarian.com/celloanly/
CELLO_OVERTONES = {
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
CLARINET_OVERTONES = {
    3: 1,
    5: 0.5,
    7: 0.25,
}

# Found from http://hyperphysics.phy-astr.gsu.edu/hbase/Music/tromw.html
TROMBONE_OVERTONES = {
    2: 0.6,
    3: 1.37,
    4: .37,
    5: .33
}


def get_tempo_for_image_slice(image_slice):
    """
    :param image_slice: a slice of the image
    :return: tempo in beats per minute
    """
    canny = cv.Canny(image_slice, 125, 175)
    total = image_slice.shape[0] * image_slice.shape[1]
    contours, _ = cv.findContours(canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    tempo = 40 + 10000 * (len(contours) / total)
    return tempo


def get_tempo_for_image(img_array, num_slices):
    """
    :param img_array:
    :param num_slices:
    :return:
    """
    num_rows = img_array.shape[0]
    num_cols = img_array.shape[1]
    num_slices = min(num_slices, num_cols)
    slice_width = num_cols // num_slices
    remainder = num_cols - (slice_width * num_slices)

    tempo = []  # keeping track of the output from the get_tempo_for_image_slice function
    start_index = 0
    count = 1
    while start_index < num_cols - slice_width + 1:
        if remainder == 0:
            end_index = start_index + slice_width
        else:
            end_index = start_index + slice_width + 1
            remainder -= 1
        count += 1
        tempo.append(get_tempo_for_image_slice(img_array[0:num_rows, start_index:end_index]))
        start_index = end_index
    return tempo


def brightness_to_freq(brightness):
    note_freq = 100 + brightness * 3.5
    return note_freq


def hist_weighted_average(array):
    """
    :param array: an array of arrays/bins
        that contains the number of pixels that are a certain brightness:
    :return: the average brightness
    """
    total = 0
    for single_bin in array:
        total += single_bin[0]

    w_average = 0
    for idx, single_bin in enumerate(array):
        w_average += idx * (single_bin[0] / total)

    return w_average


def get_histogram_avg(img):
    """
    :param img: the loaded image
    :return:
    """
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    gray_hist = cv.calcHist([gray], [0], None, [256], [0, 256])
    return hist_weighted_average(gray_hist)


def image_to_note(image):
    """
    :param image:
    :return audio: audio samples
        base64 encoding of a sound based on how negative or positive the text is
    """
    note_freq = brightness_to_freq(get_histogram_avg(image))

    # get time steps for the sample
    note_duration = 1
    time_steps = np.linspace(0, note_duration, note_duration * WAV_SAMPLE_RATE, False)

    # generate sine wave notes
    audio = np.sin(note_freq * time_steps * 2 * np.pi)

    return audio


def get_instrument(img):
    """
    Chooses an instrument to synthesize based off of the dominant color in the image
    :param img: image object
    :return: Dict instance that contains harmonics and relative amplitudes
    """
    color_thief_obj = ColorThief(img)
    rgb_tuple = color_thief_obj.get_color(quality=2)

    if max(rgb_tuple) == rgb_tuple[0]:
        return CELLO_OVERTONES
    elif max(rgb_tuple) == rgb_tuple[1]:
        return CLARINET_OVERTONES
    else:
        return TROMBONE_OVERTONES


def analyze_image(img):
    """
    :param img: .jpg image to be analyzed
    :return sound: sound created from this im
    """
    length_slice = 1 / 60  # in minutes
    num_slices = 5
    opencv_im = cv.imdecode(np.frombuffer(img.read(), np.uint8), cv.IMREAD_UNCHANGED)
    instrument = get_instrument(img)
    brightness = get_histogram_avg(opencv_im)
    frequency = brightness_to_freq(brightness)
    tempos = get_tempo_for_image(opencv_im, num_slices)
    beats_and_durations = [(max(1, round(tempo * length_slice)),
                            length_slice * 60 / round(tempo * length_slice)) for tempo in tempos]

    full_audio = []
    for audio_slice in beats_and_durations:
        for _ in range(audio_slice[0]):
            notes = generate_note(frequency, audio_slice[1])
            for harmonic in instrument:
                notes += generate_note(frequency * harmonic, audio_slice[1])

            full_audio += notes.tolist()

    return full_audio
