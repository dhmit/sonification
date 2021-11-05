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

from django.shortcuts import render


def index(request):
    """ Home page """

    # NOTE(ra): no page title for homepage, as it's taken care of in the index.html template
    context = {
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)


def colors(request):
    """
    Landing page for Colors part of project
    """

    context = {
        'page_metadata': {
            'title': 'Colors'
        },
        'component_name': 'ColorSonifier'
    }

    return render(request, 'index.html', context)


def gestures(request):
    """ Gestures page"""

    context = {
        'page_metadata': {
            'title': 'Gestures'
        },
        'component_name': 'GesturesToSound'
    }

    return render(request, 'index.html', context)


def text_shape_analysis(request):
    """ Text Shape Page """

    context = {
        'page_metadata': {
            'title': 'Text Shape'
        },
        'component_name': 'TextShapeAnalysis'
    }

    return render(request, 'index.html', context)


def time_series(request):
    """ Time Series Page """

    context = {
        'page_metadata': {
            'title': 'Time Series'
        },
        'component_name': 'TimeSeries'
    }
    return render(request, 'index.html', context)


def numbers(request):
    """ Page for demoing all of the playback options """

    context = {
        'page_metadata': {
            'title': 'Numbers'
        },
        'component_name': 'RatioCSV'
    }
    return render(request, 'index.html', context)


def polygons(request):
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


def playback_demo(request):
    """ Page for demoing all of the playback options """

    context = {
        'page_metadata': {
            'title': 'Playback Demo'
        },
        'component_name': 'PlaybackDemo'
    }
    return render(request, 'index.html', context)


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
