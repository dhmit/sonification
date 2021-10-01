import synthesizers
import numpy as np

# hard-coded data
square = [(0, 0), (0, 1), (1, 1), (1, 0)]
base_frequency = 220  # base note in Hz


def angles_of_polygon(points):
    """
    Computes the internal angles (in degrees) of this polygon, in input order.
    :param points: list of points representing a polygon.
    :return: list of angles of this polygon in degrees.
    """
    pass


def sides_of_polygons(points):
    """
    Computes the side lengths of this polygon, in input order.
    :param points: list of points representing a polygon.
    :return: list of side lengths of this polygon.
    """
    pass


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
