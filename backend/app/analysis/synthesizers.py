import random
import numpy as np
from colorthief import ColorThief
from app.common import MUSICAL_CHARS, NOTE_FREQ_SIMPLE, DISSONANT_RATIOS, NEUTRAL_RATIOS, \
    CONSONANT_RATIOS, DEFAULT_SAMPLE_RATE, SAMPLE_CONVERSION_VAL, lookup_note_frequency

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


def get_instrument(img):
    """
    Chooses an instrument to synthesize based off of the dominant color in the image
    :param img: image object
    :return: Dict instance that contains harmonics and relative amplitudes
    """
    color_thief_obj = ColorThief(img)
    rgb_tuple = color_thief_obj.get_color(quality=2)

    if max(rgb_tuple) == rgb_tuple[0]:
        return cello_overtones
    elif max(rgb_tuple) == rgb_tuple[1]:
        return clarinet_overtones
    else:
        return trombone_overtones


def get_ratios_from_sentiment(sentiment):
    """
    Returns a list of neutral ratios if the score is mostly neutral, consonant ratios
    if the score is more positive, and dissonant ratios otherwise
    :param sentiment: Dict of negative, positive, neutral, and compound values
    :return ratios: List containing neutral, consonant, or dissonant ratios
    """
    if sentiment["neu"] > sentiment["pos"] and sentiment["neu"] > sentiment["neg"]:
        return NEUTRAL_RATIOS
    elif sentiment["pos"] > sentiment["neg"]:
        return CONSONANT_RATIOS
    else:
        return DISSONANT_RATIOS


def calculate_note_frequency(base_frequency, rounding_frequency, positivity_differential,
                             neutral_score):
    """
    TODO: define function string
    :param base_frequency:
    :param rounding_frequency:
    :param positivity_differential:
    :param neutral_score:
    :return:
    """
    return base_frequency + positivity_differential * rounding_frequency * neutral_score


def generate_note(frequency, duration, sample_rate):
    # pylint: disable-msg=R0914
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
    d_weights = [sustain_weight + (peak_weight - sustain_weight) * (2 ** (1 - x / len_d) - 1) for x
                 in range(len_d)]
    s_weights = [sustain_weight for _ in range(len_s)]
    r_weights = [final_weight + sustain_weight * (2 ** (1 - x / len_r) - 1) for x in range(len_r)]

    all_weights = np.array(a_weights + d_weights + s_weights + r_weights)
    time_steps = np.linspace(0, duration, (len_a + len_d + len_s + len_r), False)
    note = np.sin(frequency * time_steps * 2 * np.pi) * all_weights
    # note *= 32767 / np.max(np.abs(note))

    return note


def get_note_frequency(sentiment, frequency):
    """
    :param sentiment: Either None or dict of negative, positive, neutral, and compound values
    :param frequency: a float
    :return return a new frequency modified by a ratio (which is based on sentiment)
    """
    ratios = get_ratios_from_sentiment(sentiment)

    ratio = random.choices(ratios)[0]
    new_frequency = apply_ratio_to_frequency(ratio, frequency)
    return new_frequency


def apply_ratio_to_frequency(ratio, frequency):
    """
    :param ratio: tuple
    :param frequency: float
    :return: new frequency
    """
    return frequency * ratio[0] / ratio[1]


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
        notes = notes.join(random.choices(mc_list, k=output_length - len(stripped_text))) + "".join(
            stripped_text)
    else:
        start = random.randint(0, len(stripped_text) - output_length)
        notes = notes.join(stripped_text[start:start + output_length])

    return notes


def sonify(notes, durations, sentiment, sample_rate):
    """
    Takes in list of notes, durations, and sentiment, and returns audio
    :param notes: List of floats
    :param durations: Corresponding list of durations for notes
    :param sentiment: Dict of sentiment values
    :param sample_rate: Integer, the sampling rate
    :return audio: List of samples for collection of notes
    """
    quieter_note_loudness = 0.6
    audio = []

    for index, _ in enumerate(notes):
        duration = durations[index]
        louder_note_freq = lookup_note_frequency(notes[index])
        quieter_note_freq = get_note_frequency(sentiment, louder_note_freq)

        time_steps = np.linspace(0, duration, int(duration * sample_rate), False)
        louder_note = np.sin(louder_note_freq * time_steps * 2 * np.pi).tolist()
        quieter_note = np.sin(quieter_note_freq * time_steps * 2 * np.pi).tolist()

        audio += [louder_note[ind] + quieter_note_loudness * quieter_note[ind] for ind in
                  range(len(time_steps))]

    return audio


def convert_piano_key_num_to_sin_wave(piano_key):
    """
    formula calculates the frequency of a musical note using A4 as the base note
    the score is the nth key starting from key 0 being A0 (hence the extra +1)
    the exact middle of the piano is between key 43 (E4) and 44 (F4) if A0 is the zeroth note
    thus, a neutral score should generate an F4 note

    The formula used to generate a note frequency is based off of this article:
    <https://towardsdatascience.com/music-in-python-2f054deb41f4>.

    :param piano_key: integer from 0 to 88
    :return sin_wave, sample_rate
    """
    a4_note = NOTE_FREQ_SIMPLE['a']
    duration = 1
    sample_rate = DEFAULT_SAMPLE_RATE
    time_axis = np.linspace(0, duration, duration * sample_rate, False)
    frequency = a4_note * (2 ** ((piano_key + 1 - 49) / 12))
    sin_wave = np.sin(2 * np.pi * frequency * time_axis)
    return sin_wave, sample_rate


def convert_sin_waves_to_audio(sin_waves):
    """
    :param sin_waves: a list of sin waves
    :return audio
    """
    audio = np.hstack(sin_waves)
    audio *= SAMPLE_CONVERSION_VAL / np.max(np.abs(audio))
    audio = audio.astype(np.int16)

    return audio
