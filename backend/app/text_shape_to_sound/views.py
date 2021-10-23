"""
These view functions and classes implement both standard GET routes.

GET routes produce largely empty HTML pages that expect a React component
to attach to them and handle most view concerns.

You can supply a few pieces of data in the render function's context
argument to support this expectation:
    page_metadata:   These values will be included in the page's <head> element.
                     Currently, only the `title` property is used.
    component_props: These can be any properties you wish to pass into your React components
                     as its highest-level props.
    component_name:  This should reference the exact name of the React component
                     you intend to load onto the page. The component_name must be
                     imported in frontend/index.js in the constant COMPONENTS

Example:
    context = {
        'page_metadata': {
            'title': 'Example ID page'
        },
        'component_props': {
            'id': example_id
        },
        'component_name': 'ExampleId'
    }
"""

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from app.text_shape_to_sound import text_shape_to_sound
from app.synthesis.audio_encoding import audio_samples_to_wav_base64

def index(request):
    """ Home page """

    context = {
        'page_metadata': {
            'title': 'Home page'
        },
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)

@api_view(['GET'])
def get_shape_analysis(request):
    """
    API endpoint for generating audio based on the shape analysis of the given text
    """
    text = request.query_params.get('text')
    secs_per_line = float(request.query_params.get('secondsPerLine'))
    base_freq = float(request.query_params.get('baseFreq'))
    max_beat_freq = float(request.query_params.get('maxBeatFreq'))

    audio_data = text_shape_to_sound.text_shape_to_sound(text, secs_per_line, base_freq,
                                                         max_beat_freq)

    res = {
        'sound': audio_samples_to_wav_base64(audio_data)
    }

    return Response(res)

################################################################################
# Boilerplate - just for examples
################################################################################
def example(request):
    """ Example page """

    context = {
        'page_metadata': {
            'title': 'Example page'
        },
    }

    return render(request, 'index.html', context)


def example_id(request, example_id_arg):
    """ Example ID page """

    context = {
        'page_metadata': {
            'title': 'Example ID page'
        },
        'component_props': {
            'id': example_id_arg,
        },
        'component_name': 'ExampleId'
    }

    return render(request, 'index.html', context)


