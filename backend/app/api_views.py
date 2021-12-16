import base64
import json
from io import BytesIO
from pathlib import Path

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import matplotlib.pyplot as plt
import numpy as np

from django.conf import settings

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths
from app.notes import NOTES

from app.data_processing import (
    csv_files as csv_processing,
    gesture as gesture_processing,
    polygon as polygon_processing,
    text as text_processing,
)


def not_implemented_error():
    return Response(
        {"detail": "This API endpoint is not yet implemented"},
        status=status.HTTP_501_NOT_IMPLEMENTED
    )


################################################################################
# NUMBERS -- this is Ryaan's demo; delete me eventually!
################################################################################
@api_view(['POST'])
def numbers_to_samples(request):
    """
    Expects a single string in the "numbers" field of data,
    and produces samples based on that.

    This is purely demo code by Ryaan!
    """
    number_str = request.data['numberStr']
    numbers = [float(x) for x in number_str.split()]

    base_frequency = 220
    wav_files = []
    for number in numbers:
        freq_to_generate = base_frequency * number
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)

    return Response(wav_files)


@api_view(['POST'])
def numbers_to_music(request):
    """
    Expects a single string in the "numbers" field of data,
    and produces a single audio out of that.

    This is purely demo code by Ryaan!
    """
    number_str = request.data['numberStr']
    numbers = [float(x) for x in number_str.split()]

    base_frequency = 220
    raw_samples = []
    for number in numbers:
        freq_to_generate = base_frequency * number
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1
        )
        raw_samples.append(audio_samples)

    raw_audio = np.hstack(raw_samples)
    wav_file_base64 = audio_samples_to_wav_base64(raw_audio)
    return Response(wav_file_base64)


################################################################################
# COLOR
################################################################################
@api_view(['POST'])
def color_to_music(request):
    """
    :param request: color picker's rgb values stored as a dictionary when the user hits submit
    :return: wav file, sine wave with frequency corresponds to energy of the colors
    """
    response_object = request.data['listOfColors']

    raw_samples = []
    for response in response_object:
        r = response["r"]
        g = response["g"]
        b = response["b"]

        # color energy calculation
        energy = round(0.299 * r + .587 * g + .114 * b)

        # frequency based on energy, scaled for 150-350hz
        freq_to_generate = ((200 * energy) / 255) + 150

        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=3,
            a_percentage=0,
            d_percentage=0,
            s_percentage=1,
            r_percentage=0
        )

        raw_samples.append(audio_samples)

    raw_audio = np.hstack(raw_samples)
    wav_file_base64 = audio_samples_to_wav_base64(raw_audio)
    return Response(wav_file_base64)


@api_view(['POST'])
def color_to_samples(request):
    """
    :param request: color picker's rgb values stored as a dictionary when the user hits submit
    :return: wav file, sine wave with frequency corresponds to energy of the color
    """
    response_object = request.data['listOfColors']

    wav_files = []
    for response in response_object:
        r = response["r"]
        g = response["g"]
        b = response["b"]

        # color energy calculation
        energy = round(0.299 * r + .587 * g + .114 * b)

        # frequency based on energy, scaled for 150-350hz
        freq_to_generate = ((200 * energy) / 255) + 150

        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1,
            a_percentage=0,
            d_percentage=0,
            s_percentage=1,
            r_percentage=0
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)

    return Response(wav_files)


################################################################################
# GESTURE
################################################################################
@api_view(['POST'])
def gesture_to_music(request):
    """
    Takes in gestures as a list of list of (x,y) coordinates and constructs audio sample
    based on the horizontal and vertical components of the gestures
    """
    gestures = request.data['gestures']
    gestures_params = request.data['parameters']
    # pitch_range and duration_range are hardcoded for now
    # TODO: allow variable pitch/duration range inputs in the frontend
    audio = gesture_processing.convert_gesture_to_audio(gestures, gestures_params)
    wav_file_base64 = audio_samples_to_wav_base64(audio)
    return Response(wav_file_base64)


@api_view(['POST'])
def gesture_to_samples(request):
    # commit #1 on 11/12/2021
    """
    Takes in gestures as a list of list of (x,y) coordinates and constructs an
    instrument slider based on the sum of coordinates of each gesture
    """
    gestures = request.data['gestures']
    gestures_params = request.data['parameters']
    coordinate_sums = gesture_processing.get_instrument_sliders(gestures, gestures_params)
    wav_files = []
    for coordinate_sum in coordinate_sums:
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=coordinate_sum,
            duration=1,
            a_percentage=0,
            d_percentage=0,
            s_percentage=1,
            r_percentage=0
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)
    return Response(wav_files)


################################################################################
# TIME SERIES DATA
################################################################################
@api_view(['POST'])
def parse_csv(request):
    """
    Takes a 2-D CSV, with or without textual headers, parses it, and returns
    a list of lists to the frontend.
    This is a helper API call for the time_series project.
    """
    temp_file = request.FILES.get('value')
    csv_data = csv_processing.parse_csv_upload_as_floats(temp_file)
    return Response(csv_data)


@api_view(['POST'])
def time_series_sample_data(request):
    """
    Gets sample data for the time series module
    """
    name = request.data.get('name')
    sample_csv_path = Path(settings.BACKEND_DIR, 'app', 'sample_csvs', name+'.csv')
    with open(sample_csv_path, encoding='utf-8') as csv_file:
        csv_data = csv_processing.parse_csv_str_as_floats(csv_file)
    return Response(csv_data)


# pylint: disable=too-many-locals
@api_view(['POST'])
def time_series_to_music(request):
    """
    Takes a dictionary representing a parsed CSV and constructs samples based on
    those ratios.
    """
    csv_data = request.data['parsedCSV']
    column_constants = request.data['constants']
    duration = float(request.data['duration'])
    every_n = int(request.data['everyN'])
    print('Music every n', every_n)
    csv_data = csv_data[::every_n]
    map_to_note = request.data['mapToNote']

    new_csv = []
    audio_samples = None

    for i, row in enumerate(csv_data):
        sound = None
        new_csv_row = []
        for j, frequency in enumerate(row):
            if frequency == "":
                new_csv_row += [0]
                continue
            column_constant = column_constants[j]

            frequency =\
                (float(frequency) + column_constant["offset"]) * column_constant["multiplier"]

            if map_to_note:
                # map number [0,88] to a note
                frequency = (2 ** ((frequency - 49) / 12)) * 440

            frequency += column_constant["base_frequency"]
            new_csv_row += [frequency]

            note = synths.generate_sine_wave_with_envelope(
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
    plt.plot(time_steps, new_csv)

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
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    img_str = base64.b64encode(buffer.getvalue())

    plt.clf()

    return Response({"sound": sound, "img": img_str})


@api_view(['POST'])
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
            float(frequency) + column_constant["offset"]) * column_constant[
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

    return Response(wav_files)


################################################################################
# TEXT SHAPE
################################################################################
@api_view(['POST'])
def text_shape_to_music(request):
    """
    API endpoint for generating audio based on the shape analysis of the given text
    """
    text = request.data.get('text')
    secs_per_line = float(request.data.get('secondsPerLine'))
    base_freq = float(request.data.get('baseFreq'))
    max_beat_freq = float(request.data.get('maxBeatFreq'))
    higher_second_freq = False
    if request.data.get('higherSecondFreq') == 'true':
        higher_second_freq = True

    audio_data = text_processing.text_shape_to_sound(
        text, secs_per_line, base_freq, max_beat_freq, higher_second_freq
    )

    wav_file_base64 = audio_samples_to_wav_base64(audio_data)
    return Response(wav_file_base64)


@api_view(['POST'])
def text_shape_to_samples(request):
    """
    API endpoint for generating an instrument based on the shape analysis of the given text
    """
    text = request.data.get('text')
    secs_per_line = float(request.data.get('secondsPerLine'))
    base_freq = float(request.data.get('baseFreq'))
    max_beat_freq = float(request.data.get('maxBeatFreq'))
    higher_second_freq = False
    if request.data.get('higherSecondFreq') == 'true':
        higher_second_freq = True

    audio_data = text_processing.text_shape_to_samples(
        text, secs_per_line, base_freq, max_beat_freq, higher_second_freq
    )

    samples = [audio_samples_to_wav_base64(wave) for wave in audio_data]
    return Response(samples)


################################################################################
# POLYGONS
################################################################################
@api_view(['POST'])
def polygon_to_music(request):
    """
    Endpoint for synthesizing a polygon from a list of points.

    The request should have as its data dictionary the input for synthesis. data
    should have a field "points" with the polygon points.
    It may also contain fields for the other arguments that synthesize_polygon takes.
    :param request: the HttpRequest
    :return: a Response object to send back to the client with the generated sound and the
    polygon points.
    """

    converted_data = polygon_processing.parse_polygon_data(json.loads(request.body))
    sound, timestamps = polygon_processing.synthesize_polygon(**converted_data)

    return Response({
        "sound": audio_samples_to_wav_base64(sound),
        "points": converted_data['points'],
        "timestamps": timestamps,
    })


@api_view(['POST'])
def polygon_to_samples(request):
    """
    Takes in polygon data and constructs an instrument slider, with each slider representing
    a side in the polygon.
    """

    converted_data = polygon_processing.parse_polygon_data(json.loads(request.body))

    # remove irrelevant data
    del converted_data['note_delay']
    del converted_data['sides_as_duration']
    del converted_data['note_length']

    frequencies = polygon_processing.polygon_frequencies(**converted_data)

    wav_files = []

    for freq in frequencies:
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq,
            duration=50,
            a_percentage=0,
            d_percentage=0,
            s_percentage=1,
            r_percentage=0
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)

    return Response(wav_files)


################################################################################
# MISC!
################################################################################
@api_view(['POST'])
def playback_demo(_request):
    """
    API endpoint for playback demo page, so generates some arbitrary samples
    to send to the instruments on that page
    """
    wav_files = []
    for i in range(1, 11):
        freq_to_generate = 100 * i
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)

    return Response(wav_files)
