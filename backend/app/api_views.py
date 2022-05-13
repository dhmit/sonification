import json
from pathlib import Path

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

import numpy as np

from django.conf import settings

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths

from app.data_processing import (
    csv_files as csv_processing,
    color as color_processing,
    gesture as gesture_processing,
    polygon as polygon_processing,
    time_series as time_series_processing,
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
def color_to_audio(request):
    """
    :param request: includes property 'colors' which is a list of HSV dictionaries.
    :return: wav file of the generated music as well as a list of samples for the pad instrument.
    """
    colors = request.data['colors']

    samples = color_processing.generate_samples(colors)
    raw_audio = np.hstack(samples)
    wav_file_base64 = audio_samples_to_wav_base64(raw_audio)
    samples_base64 = [audio_samples_to_wav_base64(s) for s in samples]

    return Response({
        'samples': samples_base64,
        'music': wav_file_base64,
    })


@api_view(['POST'])
def single_color_to_sample(request):
    """
    :param request: includes property 'colors' which is a list of HSV dictionaries.
    :return: wav file of the generated music as well as a list of samples for the pad instrument.
    """
    color = request.data['color']
    samples = color_processing.generate_samples([color])
    raw_audio = samples[0]
    sample_base64 = audio_samples_to_wav_base64(raw_audio)
    return Response({'sample': sample_base64})



################################################################################
# GESTURE
################################################################################
@api_view(['POST'])
def gesture_to_audio(request):
    '''
    Takes a list of gestures and canvas data and returns a response containing
    a piece of music and samples generated from the list.
    :param gestures: a list of lists containing coordinate objects, which are
                        dictionaries containing 'x', 'y', and 't' keys.
    :param canvas: a dictionary containing canvas metadata, specifically
                    its height and width.
    '''
    gestures = request.data['gestures']
    canvas = request.data['canvas']

    samples = gesture_processing.generate_samples(gestures, canvas)

    raw_audio = np.hstack(samples)
    wav_file_base64 = audio_samples_to_wav_base64(raw_audio)
    samples_base64 = [audio_samples_to_wav_base64(s) for s in samples]

    return Response({
        'samples': samples_base64,
        'music': wav_file_base64,
    })


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


@api_view(['POST'])
def time_series_to_audio(request):
    """
    Takes a dictionary representing a parsed CSV and constructs a piece of music
    and a set of samples based on the data.
    """
    music_data = time_series_processing.time_series_to_music(request)
    samples = time_series_processing.time_series_to_samples(request)
    samples_base64 = [audio_samples_to_wav_base64(s) for s in samples]

    return Response({
        'samples': samples_base64,
        'musicData': music_data,
    })


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
def polygon_to_audio(request):
    """
    Endpoint for synthesizing a polygon from a list of points.

    The request should have as its data dictionary the input for synthesis. data
    should have a field "points" with the polygon points.
    It may also contain fields for the other arguments that synthesize_polygon takes.
    :param request: the HttpRequest
    :return: a Response object to send back to the client with the generated musical
            data and samples.
    """
    polygon_data = polygon_processing.parse_polygon_data(json.loads(request.body))
    samples = polygon_processing.generate_samples(polygon_data)

    samples_base64 = [audio_samples_to_wav_base64(s) for s in samples]

    sound, timestamps = polygon_processing.synthesize_polygon(**polygon_data)
    music_data = {
        "sound": audio_samples_to_wav_base64(sound),
        "points": polygon_data['points'],
        "timestamps": timestamps,
    }

    return Response({
        'samples': samples_base64,
        'musicData': music_data,
    })


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
