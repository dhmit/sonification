import base64
from io import BytesIO
from time import sleep

import matplotlib
import matplotlib.pyplot as plt
from matplotlib.ticker import FormatStrFormatter

import numpy as np

from app.synthesis import synthesizers as synths

from app.notes import NOTES


def frequency_for_value(value, base_freq, col_max, col_min):
    return base_freq * (1 + (value-col_min)/(col_max-col_min))


def time_series_to_graph(request):
    """
    Takes a dictionary representing a parsed CSV and constructs samples based on
    those ratios.
    """
    csv_data = request.data['parsedCSV']
    column_constants = request.data['constants']
    headers = request.data['headers']
    durationPerSample = float(request.data['duration'])
    total_duration = durationPerSample * len(csv_data)
    new_csv = []

    csv_data_cols = np.array(csv_data)
    column_maxes = np.max(csv_data_cols, axis=0)
    column_mins = np.min(csv_data_cols, axis=0)

    for i, row in enumerate(csv_data):
        new_csv_row = []
        for j, value in enumerate(row):
            if value == "":
                new_csv_row += [0]
                continue
            column_constant = column_constants[j]
            base_freq = column_constant["base_frequency"]
            column_min_value = column_mins[j]
            column_max_value = column_maxes[j]
            frequency = frequency_for_value(value, base_freq, column_max_value, column_min_value)
            new_csv_row += [frequency]
        new_csv += [new_csv_row]

    time_steps = np.arange(0, len(csv_data))
    new_csv = np.array(new_csv)

    # https://matplotlib.org/3.5.0/users/explain/backends.html
    # Use the agg backend, so matplotlib runs in non-interactive mode and can
    # write out raster images in savefig
    matplotlib.use('agg')

    # Another process is creating a figure using plt, so wait.
    # pyplot is a stateful interface, so tricky to get this working on multiple processes at once
    while plt.fignum_exists(1):
        sleep(1)
    figure = plt.figure(1, tight_layout=True)

    plt.plot(time_steps, new_csv)

    min_f = np.amin(new_csv) - 10
    max_f = np.amax(new_csv) + 10

    for each in NOTES:
        f = each["Frequency (Hz)"]
        if min_f <= f <= max_f:
            plt.axhline(y=f, color='grey', linestyle='-.')

    plt.legend(headers)

    # TODO(ra): Fix rounding on the y-axis
    y_ticks = np.arange(min_f, max_f, step=(max_f - min_f)/20)
    y_labels = [round(i) for i in y_ticks]

    plt.yticks(
        ticks=y_ticks,
        labels=y_labels,
    )


    # TODO(ra): Probably better if this is a round number of seconds per tick
    x_num_labels = 10
    x_step = len(csv_data) / x_num_labels
    x_ticks = np.arange(0, len(csv_data), step=x_step)
    x_time_step = total_duration / x_num_labels
    x_labels = [i * x_time_step for i in range(x_num_labels)]

    plt.xticks(
        ticks=x_ticks,
        labels=x_labels,
    )

    plt.xlabel("Time (Seconds)")
    plt.ylabel("Frequency (Hz)")

    buffer = BytesIO()
    plt.savefig(buffer, bbox_inches='tight', format='png')
    buffer.seek(0)
    img_str = base64.b64encode(buffer.getvalue())

    plt.close(figure)

    return img_str


def time_series_to_samples(request):
    """
    Takes a dictionary representing a parsed CSV file and constructs samples
    based on the column averages.
    """
    csv_data = request.data['parsedCSV']
    column_constants = request.data['constants']
    duration = float(request.data['duration'])
    return generate_tracks_for_each_time_series(csv_data, column_constants, duration)


def generate_tracks_for_each_time_series(csv_data, column_constants, duration):
    csv_np_array = np.array(csv_data).astype(np.float)
    csv_data_cols = np.array(csv_data)
    column_maxes = np.max(csv_data_cols, axis=0)
    column_mins = np.min(csv_data_cols, axis=0)

    csv_cols = []
    for i in range(len(csv_np_array[0])):
        csv_cols.append((csv_np_array[:,i]))

    samples = []
    for i, col in enumerate(csv_cols):
        column_audio = np.array([])
        column_constant = column_constants[i]
        min_freq = column_mins[i]
        max_freq = column_maxes[i]
        base_freq = column_constant["base_frequency"]
        for j, value in enumerate(col):
            if value == "":
                continue

            frequency = base_freq * (1 + (value-min_freq)/(max_freq-min_freq))

            samples_for_value = synths.generate_sine_wave_with_envelope(
                frequency=frequency,
                duration=duration,
                a_percentage=column_constant["a_percentage"],
                d_percentage=column_constant["d_percentage"],
                s_percentage=column_constant["s_percentage"],
                r_percentage=column_constant["r_percentage"],
            )

            column_audio = np.append(column_audio, samples_for_value)
        samples.append(column_audio)

    return samples
