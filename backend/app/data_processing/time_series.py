import base64
from io import BytesIO

import matplotlib
import matplotlib.pyplot as plt
import numpy as np

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths

from app.notes import NOTES


# https://stackoverflow.com/questions/50157759/runtimeerror-main-thread-is-not-in-main-loop-using-matplotlib-with-django
matplotlib.use('Agg')


# pylint: disable=too-many-locals
def time_series_to_music(request):
    """
    Takes a dictionary representing a parsed CSV and constructs samples based on
    those ratios.
    """
    csv_data = request.data['parsedCSV']
    column_constants = request.data['constants']
    duration = float(request.data['duration'])
    every_n = int(request.data['everyN'])
    csv_data = csv_data[::every_n]

    new_csv = []
    audio_samples = None

    csv_data_cols = np.array(csv_data)
    column_maxes = np.max(csv_data_cols, axis=0)
    column_mins = np.min(csv_data_cols, axis=0)

    for i, row in enumerate(csv_data):
        sound = None
        new_csv_row = []
        for j, frequency in enumerate(row):
            if frequency == "":
                new_csv_row += [0]
                continue
            column_constant = column_constants[j]

            multiplier = column_constant["multiplier"]
            base_freq = column_constant["base_frequency"]
            wave_pattern = column_constant["wave_pattern"]
            min_freq = column_mins[j]
            max_freq = column_maxes[j]
            frequency = (multiplier * (1 + (frequency-min_freq)/(max_freq-min_freq))) + base_freq

            new_csv_row += [frequency]

            generator = None
            if wave_pattern == "sin":
                generator = synths.generate_sine_wave_with_envelope
            if wave_pattern == "square":
                generator = synths.generate_square_wave_with_envelope
            if wave_pattern == "sawtooth":
                generator = synths.generate_sawtooth_wave_with_envelope

            note = generator(
                frequency=frequency,
                duration=duration,
                a_percentage=column_constant["a_percentage"],
                d_percentage=column_constant["d_percentage"],
                s_percentage=column_constant["s_percentage"],
                r_percentage=column_constant["r_percentage"],
            )
            if sound is None:
                sound = note
            else:
                sound += note
        new_csv += [new_csv_row]
        if audio_samples is None:
            audio_samples = sound
        else:
            audio_samples = np.append(audio_samples, sound)

    sound = audio_samples_to_wav_base64(audio_samples)

    time_steps = np.arange(0, len(csv_data))
    new_csv = np.array(new_csv)
    plt.plot(time_steps, new_csv, marker='o')

    min_f = np.amin(new_csv) - 10
    max_f = np.amax(new_csv) + 10
    for each in NOTES:
        f = each["Frequency (Hz)"]
        if min_f <= f <= max_f:
            if "A" in each["Note"] and len(each["Note"]) == 2:
                plt.axhline(y=f, color='r', linestyle='-')
            else:
                plt.axhline(y=f, color='grey', linestyle='-.')
            plt.text(len(new_csv) - 1, f, each["Note"])

    # TODO(ra) - let's add this back once it looks a bit nicer
    # plt.legend(["Col " + str(i + 1) for i in range(len(new_csv[0]))])

    plt.xlabel("Time Step")
    plt.ylabel("Frequency (Hz)")
    plt.yscale('log')

    buffer = BytesIO()
    plt.savefig(buffer, bbox_inches='tight', format='png')
    buffer.seek(0)
    img_str = base64.b64encode(buffer.getvalue())

    plt.clf()

    return {"sound": sound, "img": img_str}


def time_series_to_samples(request):
    """
    Takes a dictionary representing a parsed CSV file and constructs samples
    based on the column averages.
    """
    csv_data = request.data['parsedCSV']
    column_constants = request.data['constants']

    csv_np_array = np.array(csv_data).astype(np.float)

    csv_row_av = np.average(csv_np_array, axis=0)
    wav_files = []
    for j, frequency in enumerate(csv_row_av):
        column_constant = column_constants[j]
        freq_to_generate = column_constant["base_frequency"] + (
            float(frequency)) * column_constant[
                               "multiplier"]
        note = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1,
            a_percentage=column_constant["a_percentage"],
            d_percentage=column_constant["d_percentage"],
            s_percentage=column_constant["s_percentage"],
            r_percentage=column_constant["r_percentage"]
        )
        wav_file_base64 = audio_samples_to_wav_base64(note)
        wav_files.append(wav_file_base64)

    return wav_files
