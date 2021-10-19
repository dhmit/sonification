import math
import numpy as np
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE


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
        # TODO: account for concave angles. Check right-handed vs left-handed turns
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
    for p1, p2 in zip(points, points[1:] + points[:1]):
        side_lengths.append(((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2) ** (1 / 2))
    return side_lengths


# for future feature
# def durations_from_sides(sides, base_duration):
#     """
#     Comptue the duration of each side based on the ratio to the first side and the base duration.
#     :param sides: a list of the side lengths
#     :param base_duration: the duration (in seconds) of the first side
#     :return: a list of durations of each side
#     """
#     return [(side/side[0])*base_duration for side in sides]


def generate_note_with_amplitude(frequency, duration, amplitude):
    """
    Generates a note with the given frequency, duration, and amplitude.
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param amplitude: amplitude as a scaling factor
    :return: numpy array which represents the note
    """
    time_steps = np.linspace(0, duration, int(duration * WAV_SAMPLE_RATE), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * amplitude
    return note


# pylint: disable=too-many-arguments
# pylint: disable=too-many-locals
# TODO: Fill in for and use restrict_octave
# TODO: Fill in for and use sides_as_duration along with sides_as_duration function
def synthesize_polygon(points, note_length=1, note_delay=0, restrict_octave=False,
                       sides_as_duration=False, base_frequency=220):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: list of points representing a polygon.
    :param note_length: length of each note in seconds.
    :param note_delay: delay between each note in seconds.
    :param restrict_octave: whether to restrict the notes to a single octave
    :param sides_as_duration: whether to use side lengths to determine duration. if False, then use
    side lengths to determine amplitude.
    :param base_frequency: the frequency of the first note of the polygon
    :return: numpy array which represents the sound.
    """
    # Compute number of notes, note length and delay in samples
    num_notes = len(points)
    note_length_samples = int(note_length * WAV_SAMPLE_RATE)
    note_delay_samples = int(note_delay * WAV_SAMPLE_RATE)
    # Total length of sound in samples
    total_length = (num_notes - 1) * note_delay_samples + note_length_samples
    print("Total sound length:", total_length)

    # Compute sides and angles of polygon
    sides_list = sides_of_polygon(points)
    angles_list = angles_of_polygon(points)
    # duration_list = sides_to_duration(sides_list)
    freq_change = change_in_frequency(angles_list)
    cur_freq = base_frequency

    # initialize the empty sound
    sound = np.zeros(total_length)
    # add each note to the sound
    for note_ind in range(num_notes):
        # generate note and ensure it has correct length
        note = generate_note_with_amplitude(
            cur_freq, note_length, sides_list[note_ind] / sides_list[0]
        )
        assert len(note) == note_length_samples, "Incorrect note length computation"

        #  append note samples
        for i in range(0, note_length_samples):
            sound[note_ind * note_delay_samples + i] += note[i]

        # update current frequency
        cur_freq *= freq_change[note_ind]

    return sound
