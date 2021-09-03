import random
import numpy as np
from colorthief import ColorThief
from ..common import MUSICAL_CHARS

mc_list = list(MUSICAL_CHARS)

# Found from https://www.vobarian.com/celloanly/
cello_overtones = {
    2: 0.5,
    3: 0.1,
    4: 0.4,
    5: 0.23,
    6: 0.3,
    7: 0.43,
    8: 0.4,
    9: 0.3,
    10: 0.12
}

# Found from http://hyperphysics.phy-astr.gsu.edu/hbase/Music/clarw.html
clarinet_overtones = {
    3: 1,
    5: 0.5,
    7: 0.25,
}

# Found from http://hyperphysics.phy-astr.gsu.edu/hbase/Music/tromw.html
trombone_overtones = {
    2: 0.6,
    3: 1.37,
    4: .37,
    5: .33
}


def get_instrument(im):
    """
    Chooses an instrument to synthesize based off of the dominant color in the image
    :param im: image object
    :return: Dict instance that contains harmonics and relative amplitudes
    """
    color_thief_obj = ColorThief(im)
    rgb_tuple = color_thief_obj.get_color(quality=2)

    if max(rgb_tuple) == rgb_tuple[0]:
        return cello_overtones
    elif max(rgb_tuple) == rgb_tuple[1]:
        return clarinet_overtones
    else:
        return trombone_overtones


def generate_note(frequency, duration, sample_rate):
    """
    Uses the ADSR (Attack, Decay, Sustain, Release) envelope to
    generate a note that fades in and out realistically
    Adapted from example in https://towardsdatascience.com/music-in-python-2f054deb41f4
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param sample_rate: sampling rate
    :return note: list of samples for the note
    """
    a_percentage = 0.1
    d_percentage = 0.1
    s_percentage = 0.1
    r_percentage = 0.7
    peak_weight = 1
    sustain_weight = 0.7
    final_weight = 0

    total_length = duration * sample_rate
    len_a = int(a_percentage * total_length)
    len_d = int(d_percentage * total_length)
    len_s = int(s_percentage * total_length)
    len_r = int(r_percentage * total_length)

    a_weights = [peak_weight * (2 ** (x / len_a) - 1) for x in range(len_a)]
    d_weights = [sustain_weight + (peak_weight - sustain_weight) * (2 ** (1 - x / len_d) - 1) for x in range(len_d)]
    s_weights = [sustain_weight for _ in range(len_s)]
    r_weights = [final_weight + sustain_weight * (2 ** (1 - x / len_r) - 1) for x in range(len_r)]

    all_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    time_steps = np.linspace(0, duration, (len_a + len_d + len_s + len_r), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * all_weights
    # note *= 32767 / np.max(np.abs(note))

    return note


def get_notes_from_text(text):
    """
    :param text: String of input text
    :return notes: String of notes chosen randomly from musical characters in text
    """
    notes = ""

    # TODO: explain the following
    output_length = 4 if (len(text) > 30) else 2

    lower_case = text.lower()
    stripped_text = [char for char in lower_case if char in MUSICAL_CHARS]

    if len(stripped_text) == 0:
        notes = notes.join(random.choices(mc_list, k=output_length))
    elif len(stripped_text) < output_length:
        notes = notes.join(random.choices(mc_list, k=output_length - len(stripped_text))) + "".join(stripped_text)
    else:
        start = random.randint(0, len(stripped_text) - output_length)
        notes = notes.join(stripped_text[start:start + output_length])

    return notes
