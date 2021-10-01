factor = 5


def compress_coordinates(gesture, factor):
    """
    :param gesture: list of coordinates received from user input via frontend
    :param factor: factor by which we compress coordinates
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

