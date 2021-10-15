"""
These are views (both standard GET and API endpoints) for the summer 2021 sonification prototypes.

See app.api_views and app.views for documentation on how these kinds of views work.
"""



from rest_framework.response import Response
from django.shortcuts import render

from app.summer_2021_prototypes import (
    image_to_music as summer_2021_image_to_music,
    text_to_music as summer_2021_text_to_music,
)

from app.synthesis.audio_encoding import audio_samples_to_wav_base64


def summer_prototypes(request):
    """
    Page showing all the summer prototypes
    """

    context = {
        'page_metadata': {
            'title': 'Summer Prototypes'
        },
        'component_name': 'SummerPrototypes'
    }

    return render(request, 'index.html', context)


@api_view(['GET'])
def get_sentiment_analysis(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    audio_data = summer_2021_text_to_music.sonify_text_2(text)

    # Filtering examples (can chain results!)
    # audio_data = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=0.5)
    # audio_data = filters.apply_filter(audio_data, filters.change_pitch, pitch_factor=2)
    # audio_data = filters.apply_filter(audio_data, filters.add_chords)
    # audio_data = filters.apply_filter(audio_data, filters.stretch_audio, speed_factor=.5)

    res = {
        'sound': audio_samples_to_wav_base64(audio_data)
    }
    return Response(res)


@api_view(['GET'])
def get_sentiment_analysis_2(request):
    """
    API endpoint for generating audio based on the sentiment analysis of the given text
    """
    text = request.query_params.get('text')
    note = summer_2021_text_to_music.text_to_note(text)
    sound = summer_2021_text_to_music.sonify_text(text)
    res = {
        'note': audio_samples_to_wav_base64(note),
        'sound': audio_samples_to_wav_base64(sound)
    }
    return Response(res)


@api_view(['POST'])
def image_to_music(request):
    """
    API endpoint for generating audio based on the image analysis of the given drawing/photo
    """
    image = request.data['image']
    audio = summer_2021_image_to_music.analyze_image(image)
    res = {
        'sound': audio_samples_to_wav_base64(audio)
    }
    return Response(res)
