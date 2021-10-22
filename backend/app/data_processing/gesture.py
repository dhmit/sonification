import math
from app.synthesis.synthesizers import generate_sine_wave_with_envelope

# factor by which we compress coordinates
FACTOR = 10


def compress_coordinates(gestures):
    """
    :param gestures: list of list of coordinates (each coordinate a dictionary) received from user
    input via
    frontend
    :return: (in the same format as input), shorter list of coordinates, each representing a
    compressed coordinate, compressed by taking averages of groups of coordinates
    """
    result = []
    for gesture in gestures:
        current_result = []
        x_sum = 0
        y_sum = 0
        for i in range(0, len(gesture)):
            x_sum += gesture[i]["x"]
            y_sum += gesture[i]["y"]
            if i+1 % FACTOR == 0 or i == len(gesture-1):
                compressed_coord = {
                    "x": x_sum/FACTOR,
                    "y": y_sum/FACTOR
                }
                current_result.append(compressed_coord)
                x_sum = 0
                y_sum = 0
        result.append(current_result)
    return result


def get_sound(gestures):
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
            pitch = get_pitch(x)
            duration = get_duration(y)
            result.append((pitch, duration))
    return result


def get_pitch(x, low=440, high=880):
    """
    Given x coordinate, convert to pitch.
    """
    number_of_octaves = math.log((high/low), 2)
    x_pitch = low*(2**(x*number_of_octaves/500))

    # LINEAR FUNCTION
    # pitch_range = high - low
    # x_pitch = (x/500)*pitch_range + low

    return x_pitch


def get_duration(y, low=0.1, high=2):
    """
    Given y coordinate, convert to duration.
    """
    duration_range = high - low
    y_duration = low + (y/500)*duration_range
    return y_duration


def convert_gesture_to_audio(gesture):
    """
    :param gesture: list of coordinates received from user input via frontend
    :return: sine waves of sound
    """
    compressed_gesture = compress_coordinates(gesture)
    sonified_gesture = get_sound(compressed_gesture)
    audio_samples = []
    for pair in sonified_gesture:
        audio_samples.extend(generate_sine_wave_with_envelope(pair[0], pair[1]))
    return audio_samples
