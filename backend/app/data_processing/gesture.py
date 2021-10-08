from app.synthesis.synthesizers import *
import pyaudio
import math
import numpy as np

# factor by which we compress coordinates
factor = 1
# duration of sonified pitch of each coordinate in gesture (seconds)
duration = 4


def compress_coordinates(gesture):
    """
    :param gesture: list of coordinates (each coordinate a dictionary) received from user input via
    frontend
    :return: (in the same format as input), shorter list of coordinates, each representing a
    compressed coordinate, compressed by taking averages of groups of coordinates
    """
    result = list()
    for i in range(0, len(gesture)-factor, factor):
        compressed_coord = dict()
        compressed_coord["x"] = (gesture[i]["x"] + gesture[i+factor-1]["x"])/2
        compressed_coord["y"] = (gesture[i]["y"] + gesture[i+factor-1]["y"])/2
        result.append(compressed_coord)
    return result


def get_sound(gesture):
    """
    Given a list of dictionaries {"x": x_val, "y": y_val}, each representing a coordinate
    from a single gesture received from user input via frontend, return a list of (pitch,
    volume) tuples representing the gesture converted to sound
    """
    result = list()
    for coordinate in gesture:
        x = coordinate["x"]
        y = coordinate["y"]
        pitch = get_pitch(x)
        volume = get_volume(y)
        result.append((pitch, volume))
    return result


def get_pitch(x, low = 65, high = 1065):
    """
    Given x coordinate, convert to pitch.
    """
    x_pitch = (high/math.log(500, 2) - low/math.log(500, 2))*math.log(x, 2) + low

    """
    LINEAR FUNCTION
    pitch_range = high - low
    x_pitch = (x/500)*pitch_range + low
    """

    return x_pitch


def get_volume(y, low = 50, high = 100):
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
    #compressed_gesture = compress_coordinates(gesture)
    sonified_gesture = get_sound(gesture)
    audio_samples = []
    for pair in sonified_gesture:
        audio_samples.append(generate_sine_wave(pair[0], duration))
    return audio_samples

def test_sound():
    p = pyaudio.PyAudio()

    stream = p.open(format=pyaudio.paFloat32, channels=1, rate=44100, output=True)
    audio = play_sound([{"x": 10, "y": 10}, {"x": 20, "y": 20}, {"x": 30, "y": 30}])

    for sample in audio:
        stream.write(sample)

    stream.stop_stream()
    stream.close()

    p.terminate()

test_sound()
