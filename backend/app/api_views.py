import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths

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
def color_to_music(_request):
    return not_implemented_error()


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
    res = {
        'sound': audio_samples_to_wav_base64(audio)
    }
    return Response(res)


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
# TIME SERIES DATA
################################################################################
@api_view(['POST'])
def time_series_to_music(request):
    """
    Takes a 2-D CSV with the header and constructs samples based on those ratios.
    """

    temp_file = request.FILES.get('value')
    csv_data = csv_processing.parse_csv_upload(temp_file, False)
    column_constants = json.loads(request.data['constants'])
    duration = float(request.data['duration'])
    audio_samples = None

    for i, row in enumerate(csv_data):
        sound = None
        for j, frequency in enumerate(row):
            if frequency == "":
                continue
            column_constant = column_constants[j]
            freq_to_generate = column_constant["base_frequency"]["value"] + (
                    float(frequency) + column_constant["offset"]["value"]) * column_constant[
                                   "multiplier"]["value"]
            note = synths.generate_sine_wave_with_envelope(
                frequency=freq_to_generate,
                duration=duration,
                a_percentage=int(column_constant["a_percentage"]["value"]) / 100,
                d_percentage=int(column_constant["d_percentage"]["value"]) / 100,
                s_percentage=int(column_constant["s_percentage"]["value"]) / 100,
                r_percentage=int(column_constant["r_percentage"]["value"]) / 100
            )
            if sound is None:
                sound = note
            else:
                sound += note
        if audio_samples is None:
            audio_samples = sound
        else:
            audio_samples = np.append(audio_samples, sound)

    sound = audio_samples_to_wav_base64(audio_samples)

    return Response(sound)


@api_view(['POST'])
def time_series_to_samples(request):

    temp_file = request.FILES.get('value')
    csv_data = csv_processing.parse_csv_upload(temp_file, False)
    column_constants = json.loads(request.data['constants'])
    duration = float(request.data['duration'])
    audio_samples = None

    csv_np_array = np.array(csv_data).astype(np.float)

    csv_row_av = np.average(csv_np_array, axis=0)
    wav_files = []
    for j, frequency in enumerate(csv_row_av):
        column_constant = column_constants[j]
        freq_to_generate = column_constant["base_frequency"]["value"] + (
            float(frequency) + column_constant["offset"]["value"]) * column_constant[
                               "multiplier"]["value"]
        note = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=duration,
            a_percentage=int(column_constant["a_percentage"]["value"]) / 100,
            d_percentage=int(column_constant["d_percentage"]["value"]) / 100,
            s_percentage=int(column_constant["s_percentage"]["value"]) / 100,
            r_percentage=int(column_constant["r_percentage"]["value"]) / 100
        )
        wav_file_base64 = audio_samples_to_wav_base64(note)
        wav_files.append(wav_file_base64)

    return Response(wav_files)


################################################################################
# TEXT SHAPE
################################################################################
@api_view(['GET'])
def text_shape_to_music(request):
    """
    API endpoint for generating audio based on the shape analysis of the given text
    """
    text = request.query_params.get('text')
    secs_per_line = float(request.query_params.get('secondsPerLine'))
    base_freq = float(request.query_params.get('baseFreq'))
    max_beat_freq = float(request.query_params.get('maxBeatFreq'))
    higher_second_freq = False
    if request.query_params.get('higherSecondFreq') == 'true':
        higher_second_freq = True

    audio_data = text_processing.text_shape_to_sound(
        text, secs_per_line, base_freq, max_beat_freq, higher_second_freq
    )

    res = {
        'sound': audio_samples_to_wav_base64(audio_data)
    }

    return Response(res)


@api_view(['POST'])
def text_shape_to_samples(request):
    return not_implemented_error()


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
    return not_implemented_error()


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
