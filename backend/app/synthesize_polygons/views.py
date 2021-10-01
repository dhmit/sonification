"""
These are views (both standard GET and API endpoints) for the synthesize polygons prototypes.

See app.api_views and app.views for documentation on how these kinds of views work.
"""

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render

from app.summer_2021_prototypes import (
    image_to_music as summer_2021_image_to_music,
    text_to_music as summer_2021_text_to_music,
)

from app.synthesis.audio_encoding import audio_samples_to_wav_base64


def synthesize_polygons(request):
    """
    Page showing all the summer prototypes
    """

    context = {
        'page_metadata': {
            'title': 'Synthesize Polygons'
        },
        'component_name': 'SynthesizePolygons'
    }

    return render(request, 'index.html', context)

