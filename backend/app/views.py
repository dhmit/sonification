"""
These view functions and classes implement both standard GET routes and API endpoints.

GET routes produce largely empty HTML pages that expect a React component to attach to them and handle most view
concerns. You can supply a few pieces of data in the render function's context argument to support this expectation.

Of particular use are the properties: page_metadata, component_props, and component_name:
page_metadata: these values will be included in the page's <head> element. Currently, only the `title` property is used.
component_props: these can be any properties you wish to pass into your React components as its highest-level props.
component_name: this should reference the exact name of the React component you intend to load onto the page.

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

from .analysis import filters
from .analysis.image_to_sound import analyze_image
from .analysis.sentiment_analysis import text_to_sound
from .analysis.text_to_music import (text_to_note, sonify_text)
from .common import wav_to_base64


@api_view(['GET'])
def get_example(request, example_id):
    """
    API example endpoint.
    """

    data = {
        'name': 'Example',
        'id': example_id,
    }
    return Response(data)


def index(request):
    """
    Home page
    """

    context = {
        'page_metadata': {
            'title': 'Home page'
        },
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)


def example(request):
    """
    Example page
    """

    context = {
        'page_metadata': {
            'title': 'Example page'
        },
    }

    return render(request, 'index.html', context)


def example_id(request, example_id):
    """
    Example ID page
    """

    context = {
        'page_metadata': {
            'title': 'Example ID page'
        },
        'component_props': {
            'id': example_id
        },
        'component_name': 'ExampleId'
    }

    return render(request, 'index.html', context)


def sentiment_analysis(request):
    """
    Sentiment Analysis Page
    """

    context = {
        'page_metadata': {
            'title': 'Sentiment Analysis'
        },
        'component_name': 'SentimentAnalysis'
    }

    return render(request, 'index.html', context)


def sentiment_analysis_2(request):
    """
    Sentiment Analysis Page
    """

    context = {
        'page_metadata': {
            'title': 'Sentiment Analysis 2'
        },
        'component_name': 'SentimentAnalysis2'
    }

    return render(request, 'index.html', context)


@api_view(['GET'])
def get_sentiment_analysis(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    audio_data = text_to_sound(text)

    # Filtering examples (can chain results!)
    # audio_data = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=0.5)
    # audio_data = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=2)
    # audio_data = filters.apply_filter(audio_data, filters.add_chords)
    # audio_data = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=.5)

    encoded_audio = wav_to_base64(*audio_data)

    res = {
        'sound': encoded_audio
    }
    return Response(res)


@api_view(['GET'])
def get_sentiment_analysis_2(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    note = text_to_note(text)
    sound = sonify_text(text)
    res = {
        'note': wav_to_base64(*note),
        'sound': wav_to_base64(*sound)
    }
    return Response(res)


def image_analysis(request):
    context = {
        'page_metadata': {
            'title': 'Image Analysis'
        },
        'component_name': 'ImageAnalysis'
    }

    return render(request, 'index.html', context)


@api_view(['POST'])
def image_to_sound(request):
    """
    API endpoint for generating audio based on the image analysis of the given drawing/photo
    """
    image = request.data['image']
    audio_data = analyze_image(image)

    res = {
        'sound': wav_to_base64(*audio_data)
    }
    return Response(res)
