
def get_sound(gesture):
    """
    Given a list of coordinates representing a single gesture received from user input via
    frontend, return a list of (pitch, volume) tuples representing the gesture converted to sound
    """
    result = list()
    for coordinate in gesture:
        x = coordinate[0]
        y = coordinate[1]
        pitch = get_pitch(x)
        volume = get_volume(y)
        result.append((pitch, volume))
    return result


def get_pitch(x):
    """
    Given x coordinate, convert to pitch.
    """
    raise NotImplementedError


def get_volume(y):
    """
    Given y coordinate, convert to volume.
    """
    raise NotImplementedError
