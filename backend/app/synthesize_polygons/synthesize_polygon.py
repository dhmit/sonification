import app.synthesis.synthesizers as synthesizers
import numpy as np

# hard-coded data
import math
import numpy as np

square = [(0, 0), (0, 1), (1, 1), (1, 0)]
base_frequency = 220  # base note in Hz


def angles_of_polygon(points):
    """
    Computes the internal angles (in degrees) of this polygon, in input order.
    :param points: list of points representing a polygon.
    :return: list of angles of this polygon in degrees.
    """
    vectors = []
    angles = []
    for i in range(points-1):
        vectors.append(np.array[points[i+1][0]-points[i][0],points[i+1][1]-points[i][1]])

    for i in range(vectors-1):
        mag_v1 = (np.sqrt(vectors[i].dot(vectors[i])))
        mag_v2 = (np.sqrt(vectors[i+1].dot(vectors[i+1])))
        angles.append(math.acos(vectors[i].dot(vectors[i+1])/(mag_v1*mag_v2)))

    return angles




def change_in_frequency(angles):
    """
        Maps angles of the polygon, in input order, to frequency.
        :param angles: A list of angles of a polygon.
        :return: A list of frequencies.
        """
    return [180/theta for theta in angles]

def sides_of_polygons(points):
    """
    Computes the side lengths of this polygon, in input order.
    :param points: list of points representing a polygon.
    :return: list of side lengths of this polygon.
    """
    pass
    side_lengths = []
    for i in range(len(points)):
        if i < len(points) - 1:
            side_lengths.append(((points[i + 1][0] - points[i][0]) ** 2 +
                                 (points[i + 1][1] - points[i][1]) ** 2) ** (1 / 2))
        else:
            side_lengths.append(((points[0][0] - points[i][0]) ** 2 +
                                 (points[0][1] - points[i][1]) ** 2) ** (1 / 2))
    return side_lengths


def generate_note_with_amplitude(frequency, duration, amplitude):
    """
    Generates a note with the given frequency, duration, and amplitude.
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param amplitude: amplitude as a scaling factor
    :return: numpy array which represents the note
    """
    note = synthesizers.generate_note(frequency, duration)
    return amplitude * note


def synthesize_polygon(points):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: list of points representing a polygon.
    :return: numpy array which represents the sound.
    """
    pass
