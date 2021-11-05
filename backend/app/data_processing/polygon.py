import math
import numbers

import numpy as np
from app.synthesis.audio_encoding import WAV_SAMPLE_RATE


def check_valid_polygon(polygon):
    """
    Checks if the given polygon is valid. If not, raises an AssertionError with an appropriate
    error message. Otherwise, does nothing.
    :param polygon: the polygon to check
    """
    assert isinstance(polygon, list), "polygon must be a list."
    assert len(polygon) >= 3, "polygon must have at least 3 points."
    for i, point in enumerate(polygon):
        assert isinstance(point, tuple), f"each point of polygon should be a tuple but found " \
                                         f"{type(point)} at position {i} ."
        assert len(point) == 2, f"each point should have length 2, but point {i} had length " \
                                f"{len(point)} instead."
        for j, coord in enumerate(point):
            assert isinstance(coord, numbers.Real), f"each point coordinate should be a " \
                                                    f"real number, but found {type(coord)} at " \
                                                    f"coordinate {j} of point {i} instead."
        if i < len(polygon) - 1:
            assert point != polygon[i+1], f"adjacent points of polygon cannot be the same but" \
                                               f" point {i} matched point {i+1}."
        else:
            assert point != polygon[0], f"beginning point and ending point of polygon cannot be " \
                                         f"the same but point 0 matched point {i}."


def angles_of_polygon(points):
    """
    Computes the internal angles of this polygon, in input order.
    :param points: A list of points representing a polygon. The ends of the list cannot be the
                   same. Adjacent points in the list cannot be the same.
    :return: A list of angles of this polygon in degrees.
    """
    check_valid_polygon(points)

    closed_points = points + [points[0]]  # Polygon needs to be closed shape.
    vectors = []
    angles = []

    for i in range(len(closed_points) - 1):
        arr = [
            closed_points[i + 1][0] - closed_points[i][0],
            closed_points[i + 1][1] - closed_points[i][1]
        ]
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
    check_valid_polygon(points)

    side_lengths = []
    for p1, p2 in zip(points, points[1:] + points[:1]):
        side_lengths.append(((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2) ** (1 / 2))
    return side_lengths


def sides_to_duration(sides, base_duration):
    """
    Compute the duration of each side based on the ratio to the first side and the base duration.
    :param sides: a list of the side lengths
    :param base_duration: the duration (in seconds) of the first side
    :return: a tuple consisting of a list of durations of each side as well as the total length
    of the sound as an integer
    """
    duration_list = [(side/sides[0])*base_duration for side in sides]
    total_duration = 0
    for duration in duration_list:
        total_duration += duration
    return duration_list, total_duration


def amplitude_decay(frequency):
    """
    Decays the amplitude to counterbalance psycho-acoustic effects in which we hear higher
    pitches as louder. Returns the decay as a scaling factor for amplitude.
    :param frequency: frequency of the note in Hz
    :return: an amplitude scaling factor
    """
    if frequency < 700:
        return 1
    # exponential decay based on frequency
    return 0.5 ** ((frequency - 700) / 2000)


def generate_note_with_amplitude(frequency, duration, amplitude):
    """
    Generates a note with the given frequency, duration, and amplitude.
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param amplitude: amplitude as a scaling factor
    :return: numpy array which represents the note
    """
    time_steps = np.linspace(0, duration, int(duration * WAV_SAMPLE_RATE), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * amplitude * amplitude_decay(frequency)
    return note


def generate_time_stamps(duration_list, note_delay, sides_as_duration=False):
    """
    Generates a list indicating when the sound associated with each line of the polygon should
    start and end in seconds.
    :param duration_list: a list of durations of each side
    :param note_delay: delay between each note in seconds
    :param sides_as_duration: whether to use side lengths to determine duration. if False, then use
    side lengths to determine amplitude.
    :return: list of tuples signifying the time in which each line starts and ends in seconds
    """

    time_stamps = []
    start = 0
    for duration in duration_list:
        end = start + duration
        time_stamps.append((start, end))
        if sides_as_duration:
            start += duration
        else:
            start += note_delay

    return time_stamps


# pylint: disable=too-many-arguments
# pylint: disable=too-many-locals
def synthesize_polygon(points, note_length=1, note_delay=1, restrict_frequency=False,
                       sides_as_duration=False, base_frequency=220, floor_frequency=20,
                       ceil_frequency=10000):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: list of points representing a polygon.
    :param note_length: length of each note in seconds.
    :param note_delay: delay between each note in seconds.
    :param restrict_frequency: whether to restrict the notes to a specified frequency range
    :param sides_as_duration: whether to use side lengths to determine duration. if False, then use
    side lengths to determine amplitude.
    :param base_frequency: the frequency of the first note of the polygon
    :param floor_frequency: the lowest allowable frequency for any note
    :param ceil_frequency: the highest allowable frequency for any note
    :return: numpy array which represents the sound.
    """
    check_valid_polygon(points)
    assert ceil_frequency >= 2*floor_frequency, \
        "the ceiling frequency must be at least an octave above the floor frequency"

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
    cur_time = 0
    if sides_as_duration:
        duration_list, total_length = sides_to_duration(sides_list, note_length)
        total_length = int(total_length * WAV_SAMPLE_RATE)
    freq_change = change_in_frequency(angles_list)
    cur_freq = base_frequency

    # initialize the empty sound
    sound = np.zeros(total_length)
    # add each note to the sound
    for note_ind in range(num_notes):
        # generate note and ensure it has correct length
        if sides_as_duration:
            # base amplitude of 1
            note = generate_note_with_amplitude(cur_freq, duration_list[note_ind], 1)
            duration_samples = len(note)

            #  append note samples
            for i in range(0, duration_samples):
                sound[cur_time + i] += note[i]

            # update the current time
            cur_time += duration_samples
        else:
            note = generate_note_with_amplitude(
                cur_freq, note_length, sides_list[note_ind] / sides_list[0]
            )
            assert len(note) == note_length_samples, "Incorrect note length computation"
            #  append note samples
            for i in range(0, note_length_samples):
                sound[note_ind * note_delay_samples + i] += note[i]

        # update current frequency
        cur_freq *= freq_change[note_ind]
        if restrict_frequency:
            while cur_freq > ceil_frequency:
                cur_freq /= 2
            while cur_freq < floor_frequency:
                cur_freq *= 2

    if not sides_as_duration:
        duration_list = [note_length]*num_notes
    time_stamp_list = generate_time_stamps(duration_list, note_delay, sides_as_duration)
    # TODO: return time_stamp_list as tuple with sound once compatible with frontend.

    return sound, time_stamp_list


def parse_polygon_data(data):
    """
    Converts parameters for a synthesize_polygon call into correct formats.
    :param data: a dict containing parameters for synthesize_polygon as strings/files
    :return: a dict containing the parameters for synthesize_polygon in correct format
    """
    float_values = {
        'noteLength': 'note_length',
        'noteDelay': 'note_delay',
        'baseFrequency': 'base_frequency',
        'floorFrequency': 'floor_frequency',
        'ceilFrequency': 'ceil_frequency',
    }
    bool_values = {
        'restrictFrequency': 'restrict_frequency',
        'sidesAsDuration': 'sides_as_duration',
    }

    converted_data = {}
    for old_name, new_name in float_values.items():
        if old_name in data:
            converted_data[new_name] = float(data[old_name])
    for old_name, new_name in bool_values.items():
        if old_name in data:
            converted_data[new_name] = str(data[old_name]).lower() == 'true'
    if 'points' in data:
        converted_data['points'] = [tuple(map(float, p)) for p in data['points']]

    return converted_data
