import math
from app.synthesis.synthesizers import generate_sine_wave_with_envelope


def compress_coordinates(gestures, factor):
    """
    :param gestures: list of list of coordinates (each coordinate a dictionary) received from user
    input via frontend
    :param factor: factor by which the coordinates are compressed
    :return: (in the same format as input), shorter list of coordinates, each representing a
    compressed coordinate, compressed by taking averages of groups of coordinates
    """
    result = []
    for gesture in gestures:
        current_result = []
        for i in range(0, len(gesture), factor):
            coords_list = [gesture[j] for j in range(i, min(i+factor, len(gesture)))]
            sum_x = sum(coord["x"] for coord in coords_list)
            sum_y = sum(coord["y"] for coord in coords_list)
            sum_t = sum(coord["t"] for coord in coords_list)
            num_coords = min(i + factor, len(gesture)) - i + 1
            compressed_coord = {
                "x": sum_x/num_coords,
                "y": sum_y/num_coords,
                "t": sum_t/num_coords,
            }
            current_result.append(compressed_coord)
        result.append(current_result)
    return result


def get_sound(gestures, pitch_range, duration_range):
    """
    Given a list of list of dictionaries {"x": x_val, "y": y_val}, each representing a coordinate
    from a single gesture received from user input via frontend, return a list of (pitch,
    duration) tuples representing the gesture converted to sound
    """
    result = []
    for gesture in gestures:
        for coordinate in gesture:
            x = coordinate["x"]
            y = coordinate["y"]
            pitch = get_pitch(x, pitch_range["low"], pitch_range["high"])
            duration = get_duration(y, duration_range["low"], duration_range["high"])
            result.append((pitch, duration))
    return result


def get_pitch(x, low, high):
    """
    Given x coordinate, convert to pitch.
    """
    number_of_octaves = math.log((high/low), 2)
    x_pitch = low*(2**(x*number_of_octaves/500))

    # LINEAR FUNCTION
    # pitch_range = high - low
    # x_pitch = (x/500)*pitch_range + low

    return x_pitch


def get_duration(y, low, high):
    """
    Given y coordinate, convert to duration.
    """
    duration_range = high - low
    y_duration = low + (y/500)*duration_range
    return y_duration


def convert_gesture_to_audio(gesture, gesture_param):
    """
    :param gesture: list of coordinates received from user input via frontend
    :param gesture_param: dictionary storing the high and low bounds of pitch in Hz,
        the high and low bounds of duration in seconds, and the factor to compress notes by
    :return: sine waves of sound
    """
    compressed_gesture = compress_coordinates(gesture, gesture_param['compression'])
    sonified_gesture = get_sound(compressed_gesture, gesture_param['pitch'], gesture_param[
        'duration'])
    audio_samples = []
    for pair in sonified_gesture:
        audio_samples.extend(generate_sine_wave_with_envelope(pair[0], pair[1]))
    return audio_samples


def get_instrument_sliders(gestures, gesture_param):
    # commit #1 on 11/12/2021
    """
    :param gestures: list of coordinates received from user input via frontend
    :param gesture_param: dictionary storing the high and low bounds of pitch in Hz,
        the high and low bounds of duration in seconds, and the factor to compress notes by
    :return: a list of sums of the coordinates in each compressed gesture
    """
    compressed_gestures = compress_coordinates(gestures, gesture_param['compression'])
    result = []
    for gesture in compressed_gestures:
        coordinates_sum = 0
        for coordinate in gesture:
            coordinates_sum += coordinate['x'] + coordinate['y']
        result.append(coordinates_sum)
    return result
