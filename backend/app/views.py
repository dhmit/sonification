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
from .analysis.text_to_music import text_to_note
from scipy.io import wavfile
import io
import base64


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


@api_view(['GET'])
def get_sentiment_analysis(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    byte_array, sample_rate = text_to_note(text)
    byte_io = io.BytesIO(bytes())
    wavfile.write(byte_io, sample_rate, byte_array)
    wav_bytes = byte_io.read()
    audio_data = base64.b64encode(wav_bytes).decode('UTF-8')
    res = {'audio': audio_data}
    return Response(res)
