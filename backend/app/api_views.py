from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths
from app.data_processing import csv_files as csv_processing



@api_view(['POST'])
def generate_instrument(request):
    """
    Takes a 1-D CSV with the 'ratio' header and constructs samples based on those ratios.
    TODO(ra): this is way too hardcoded! Move out of here.
    """
    temp_file = request.FILES.get('value')
    csv_data = csv_processing.parse_csv_upload(temp_file)
    ratios = [float(row['ratio']) for row in csv_data]

    base_frequency = 220
    wav_files = []
    for ratio in ratios:
        freq_to_generate = base_frequency * ratio
        audio_samples = synths.generate_sine_wave_with_envelope(
            frequency=freq_to_generate,
            duration=1
        )
        wav_file_base64 = audio_samples_to_wav_base64(audio_samples)
        wav_files.append(wav_file_base64)

    return Response(wav_files)


@api_view(['POST'])
def generate_instrument_2d(request):
    """
    Takes a 2-D CSV with the header and constructs samples based on those ratios.
    """

    temp_file = request.FILES.get('value')
    csv_data = csv_processing.parse_csv_upload(temp_file, False)

    # TODO allow users to change these values
    base_frequency = 50
    duration = .2
    a_percentage = 0.1
    d_percentage = 0.4
    s_percentage = 0.4
    r_percentage = 0.1

    audio_samples = None
    for ratio_group in csv_data:
        ratio_sound = None
        for ratio in ratio_group:
            if ratio == "":
                continue
            freq_to_generate = base_frequency * float(ratio)
            note = synths.generate_sine_wave_with_envelope(
                    frequency=freq_to_generate,
                    duration=duration,
                    a_percentage=a_percentage,
                    d_percentage=d_percentage,
                    s_percentage=s_percentage,
                    r_percentage=r_percentage
                )
            if ratio_sound is None:
                ratio_sound = note
            else:
                ratio_sound += note
        if audio_samples is None:
            audio_samples = ratio_sound
        else:
            audio_samples = np.append(audio_samples, ratio_sound)

    sound = audio_samples_to_wav_base64(audio_samples)

    return Response(sound)




################################################################################
# Example views
################################################################################
@api_view(['GET'])
def get_example(_request, api_example_id):
    """
    API example endpoint.
    """

    data = {
        'name': 'Example',
        'id': api_example_id,
    }
    return Response(data)


@api_view(['POST'])
def post_example(request):
    """
    API example endpoint.
    """
    api_example_id = request.data['api_example_id']

    data = {
        'name': 'Example',
        'id': api_example_id,
    }
    return Response(data)
