from app.synthesis.audio_encoding import WAV_SAMPLE_RATE
import numpy as np

# hard-coded data
import math
import numpy as np

square = [(0, 0), (0, 1), (1, 1), (1, 0)]
reg_square = [(0, 0), (0, 4), (4, 4), (4, 0)]
sailboat = [(3, 1), (3, 5), (6, 6), (4, 3), (6, 0)]
obtuse_triangle = [(1, 5), (6, 6), (8, 0)]
hexagon = [(3, 1), (1.5, 3.5), (3, 6), (6, 6), (7.5, 3.5), (6, 1)]
reg_triangle = [(3, 2), (4.5, 5), (6, 2)]
boomerang = [(5, 1), (2, 4), (6, 5), (4, 3.5)]
right_triangle = [(0, 0), (14, 0), (0, 8)]
bowtie = [(4, 0), (8, 0), (6, 6), (10, 5)]
line = [(6, 6), (2, 3)]
base_frequency = 220  # base note in Hz


def angles_of_polygon(points):
    """
    Computes the internal angles of this polygon, in input order.
    :param points: A list of points representing a polygon. The ends of the list cannot be the
                   same. Adjacent points in the list cannot be the same.
    :return: A list of angles of this polygon in degrees.
    """
    assert points[0] != points[len(points) - 1], "Ends of input points cannot be the same."

    points.append(points[0])  # Polygon needs to be closed shape.
    vectors = []
    angles = []

    for i in range(len(points) - 1):
        assert points[i] != points[i + 1], "Adjacent points cannot be the same."
        arr = [points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]]
        vectors.append(np.array(arr))

    vectors.append(vectors[0])  # Polygon needs to be closed shape.
    for i in range(len(vectors) - 1):
        mag_v1 = (np.sqrt(vectors[i].dot(vectors[i])))
        mag_v2 = (np.sqrt(vectors[i + 1].dot(vectors[i + 1])))
        angles.append(math.acos(-vectors[i].dot(vectors[i + 1]) / (mag_v1 * mag_v2)))

    rad_to_deg = map(lambda x: x * 180 / math.pi, angles)
    angles = list(rad_to_deg)

    return angles


def change_in_frequency(angles):
    """
    Maps angles of the polygon, in input order, to frequency.
    :param angles: A list of angles of a polygon.
    :return: A list of frequencies.
    """
    return [180 / theta for theta in angles]


def sides_of_polygon(points):
    """
    Computes the side lengths of this polygon, in input order.
    :param points: list of points representing a polygon.
    :return: list of side lengths of this polygon.
    """
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
    time_steps = np.linspace(0, duration, duration * WAV_SAMPLE_RATE, False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * amplitude
    return note


def synthesize_polygon(points):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: list of points representing a polygon.
    :return: numpy array which represents the sound.
    """
    sides_list = sides_of_polygon(points)
    angles_list = angles_of_polygon(points)
    # duration_list = sides_to_duration(sides_list)
    freq_change = change_in_frequency(angles_list)
    base = base_frequency

    sound = np.array([])
    for ind in range(len(sides_list)):
        note = generate_note_with_amplitude(base, 1, sides_list[ind])
        sound = np.append(sound, [note])
        base *= freq_change[ind]

    return sound
