import numpy as np
import cv2 as cv



def hist_weighted_average(array):
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


def get_histogram_avg(img):
    """
    :param img: the loaded image
    :return:
    """
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    gray_hist = cv.calcHist([gray], [0], None, [256], [0, 256])
    return hist_weighted_average(gray_hist)


def get_tempo_for_slice(image_slice):
    """
    :param image_slice: a slice of the image
    :return: tempo in beats per minute
    """
    canny = cv.Canny(image_slice, 125, 175)
    total = image_slice.shape[0] * image_slice.shape[1]
    contours, hierarchies = cv.findContours(canny, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    tempo = 40 + 10000 * (len(contours) / total)
    return tempo


def get_tempo_for_image(im, num_slices):
    im_array = im
    num_rows = im_array.shape[0]
    num_cols = im_array.shape[1]
    if num_slices > num_cols:
        num_slices = num_cols
    slice_width = num_cols // num_slices
    remainder = num_cols - (slice_width * num_slices)

    tempo = []  # keeping track of the output from the get_tempo_for_slice function
    start_index = 0
    count = 1
    while start_index < num_cols - slice_width + 1:
        if remainder == 0:
            end_index = start_index + slice_width
        else:
            end_index = start_index + slice_width + 1
            remainder -= 1
        count += 1
        tempo.append(get_tempo_for_slice(im_array[0:num_rows, start_index:end_index]))
        start_index = end_index
    return tempo


def brightness_to_freq(brightness):
    note_freq = 100 + brightness * 3.5
    return note_freq
