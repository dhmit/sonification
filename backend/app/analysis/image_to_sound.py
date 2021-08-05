import numpy as np
import simpleaudio as sa

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

    a_weights = [peak_weight * (2**(x/len_a) - 1) for x in range(len_a)]
    d_weights = [sustain_weight + (peak_weight-sustain_weight) * (2**(1-x/len_d) - 1) for x in range(len_d)]
    s_weights = [sustain_weight for _ in range(len_s)]
    r_weights = [final_weight + sustain_weight * (2**(1-x/len_r) - 1) for x in range(len_r)]

    all_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    time_steps = np.linspace(0, duration, (len_a + len_d + len_s + len_r), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * all_weights
    note *= 32767 / np.max(np.abs(note))

    return note


def synthesize_instruments(frequency, duration, sample_rate, overtones):
    """
    :param frequency: frequency of the note
    :param duration: duration in seconds
    :param sample_rate: sampling rate
    :param overtones: Dict instance containing overtone multiplier and relative amplitudes
    :return note: list of samples for the note
    """

    fundamental = generate_note(frequency, duration, sample_rate)
    for harmonic in overtones.keys():
        fundamental += generate_note(frequency * harmonic, duration, sample_rate)

    note = fundamental * 32767 / np.max(np.abs(fundamental))
    return note


def analyze_image(im):
    """
    :param im: .jpg image to be analyzed
    :return sound: sound created from this im
    """

