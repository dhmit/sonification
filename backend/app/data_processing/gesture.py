from app.synthesis.synthesizers import *
# import pyaudio
import math
import numpy as np

# factor by which we compress coordinates
factor = 10
# duration of sonified pitch of each coordinate in gesture (seconds)
duration = 4


def compress_coordinates(gestures):
    """
    :param gestures: list of list of coordinates (each coordinate a dictionary) received from user
    input via
    frontend
    :return: (in the same format as input), shorter list of coordinates, each representing a
    compressed coordinate, compressed by taking averages of groups of coordinates
    """
    result = list()
    for gesture in gestures:
        current_result = list()
        for i in range(0, len(gesture)-factor, factor):
            compressed_coord = dict()
            compressed_coord["x"] = (gesture[i]["x"] + gesture[i+factor-1]["x"])/2
            compressed_coord["y"] = (gesture[i]["y"] + gesture[i+factor-1]["y"])/2
            current_result.append(compressed_coord)
        result.append(current_result)
    return result


def get_sound(gestures):
    """
    Given a list of list of dictionaries {"x": x_val, "y": y_val}, each representing a coordinate
    from a single gesture received from user input via frontend, return a list of (pitch,
    volume) tuples representing the gesture converted to sound
    """
    result = list()
    for gesture in gestures:
        for coordinate in gesture:
            x = coordinate["x"]
            y = coordinate["y"]
            pitch = get_pitch(x)
            volume = get_volume(y)
            result.append((pitch, volume))
    return result


def get_pitch(x, low=440, high=880):
    """
    Given x coordinate, convert to pitch.
    """
    number_of_octaves = math.log((high/low), 2)
    x_pitch = low*(2**(x*number_of_octaves/500))

    """
    LINEAR FUNCTION
    pitch_range = high - low
    x_pitch = (x/500)*pitch_range + low
    """

    return x_pitch


def get_volume(y, low=50, high=100):
    """
    Given y coordinate, convert to volume.
    """
    volume_range = high - low
    y_volume = low + (y/500)*volume_range
    return y_volume


def play_sound(gesture):
    """
    :param gesture: list of coordinates received from user input via frontend
    :return: sine waves of sound
    """
    compressed_gesture = compress_coordinates(gesture)
    sonified_gesture = get_sound(compressed_gesture)
    audio_samples = []
    for pair in sonified_gesture:
        audio_samples.extend(generate_sine_wave_with_envelope(pair[0], duration))
    return audio_samples


def test_sound():
    p = pyaudio.PyAudio()

    stream = p.open(format=pyaudio.paFloat32, channels=1, rate=44100, output=True)
    audio = play_sound([{"x": 0, "y": 10}, {"x":250, "y": 20}, {"x": 500, "y": 30}])

    for sample in audio:
        stream.write(sample)

    stream.stop_stream()
    stream.close()

    p.terminate()

# test_sound()
