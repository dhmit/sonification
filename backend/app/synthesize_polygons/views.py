"""
These are views (both standard GET and API endpoints) for the synthesize polygons prototypes.

See app.api_views and app.views for documentation on how these kinds of views work.
"""

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from app.data_processing import csv_files as csv_processing
from app.synthesis.audio_encoding import audio_samples_to_wav_base64

from app.synthesize_polygons.synthesize_polygon import synthesize_polygon
import re


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


@api_view(['POST'])
def synthesize_polygon_endpoint(request):
    temp_file = request.FILES.get('value')
    csv_data = re.split(r"\s", temp_file.read().decode('utf-8'))
    polygon_points = []
    for row in csv_data:
        if len(row) > 0:
            x, y = map(float, row.split(","))
            polygon_points.append((x, y))
    print(polygon_points)
    return Response(audio_samples_to_wav_base64(synthesize_polygon(polygon_points)))
