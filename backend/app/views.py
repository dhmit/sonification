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

from .analysis.text_to_music import text_to_sound
from .analysis.text_to_music import text_to_note


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


def sentiment_analysis_2(request):
    """
    Sentiment Analysis 2 Page
    """

    context = {
        'page_metadata': {
            'title': 'Sentiment Analysis 2'
        },
        'component_name': 'SentimentAnalysis2'
    }

    return render(request, 'index.html', context)


@api_view(['GET'])
def get_sentiment_analysis_2(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    res = {
        'note': text_to_note(text),
        'sound': text_to_sound(text)
    }
    return Response(res)
