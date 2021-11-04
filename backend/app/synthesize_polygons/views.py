"""
These are views (both standard GET and API endpoints) for the synthesize polygons prototypes.

See app.api_views and app.views for documentation on how these kinds of views work.
"""
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from app.synthesis.audio_encoding import audio_samples_to_wav_base64

from app.synthesize_polygons.synthesize_polygon import synthesize_polygon


def synthesize_polygons(request):
    """
    Page showing the synthesize polygon tool
    """

    context = {
        'page_metadata': {
            'title': 'Synthesize Polygons'
        },
        'component_name': 'SynthesizePolygons'
    }

    return render(request, 'index.html', context)


def convert_data(data):
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


def synthesize_polygon_general(data):
    """
    Synthesize a polygon using the provided data.
    :param data: a dictionary with the input for synthesis. data should have a field "points"
    with the polygon points. it may also contain fields for the other arguments that
    synthesize_polygon takes.
    :return: a Response object to send back to the client with the generated sound and the
    polygon points.
    """
    converted_data = convert_data(data)
    sound, timestamps = synthesize_polygon(**converted_data)
    return Response({
        "sound": audio_samples_to_wav_base64(sound),
        "points": converted_data['points'],
        "timestamps": timestamps,
    })


@api_view(['POST'])
def synthesize_polygon_endpoint(request):
    """
    Endpoint for synthesizing a polygon from a list of points.
    :param request: the HttpRequest
    :return: an HttpResponse
    """
    return synthesize_polygon_general(json.loads(request.body))
