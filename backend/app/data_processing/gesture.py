from app.synthesis.synthesizers import *
import pyaudio
import numpy as np

# factor by which we compress coordinates
factor = 1
# duration of sonified pitch of each coordinate in gesture (seconds)
duration = 1


def compress_coordinates(gesture):
    """
    :param gesture: list of coordinates received from user input via frontend
    :return: list of tuples (x, y) each representing a compressed coordinate, compressed by
    taking averages of groups of coordinates
    """
    result = list()
    for i in range(0, len(gesture)-factor, factor):
        x_average = (gesture[i]["x"] + gesture[i+factor-1]["x"])/2
        y_average = (gesture[i]["y"] + gesture[i+factor-1]["y"])/2
        result.append((x_average, y_average))
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
    pitch_range = high - low
    compressed_square = 500/factor
    change_per_coordinate = pitch_range/compressed_square
    x_pitch = low + change_per_coordinate(x)
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
    compressed_gesture = compress_coordinates(gesture)
    sonified_gesture = get_sound(compressed_gesture)
    audio_samples = []
    for pair in sonified_gesture:
        audio_samples.append(generate_sine_wave(pair[0], duration))
    return audio_samples

p = pyaudio.PyAudio()

stream = p.open(format=pyaudio.paFloat32, channels=1, rate=fs, output=True)
audio = play_sound([{"x":10, "y":10}, {"x":20, "y":20}, {"x":30, "y":30}])
stream.write(audio)

stream.stop_stream()
stream.close()

p.terminate()
