import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np

from app.synthesis.audio_encoding import audio_samples_to_wav_base64
from app.synthesis import synthesizers as synths
from app.data_processing import csv_files as csv_processing


@api_view(['POST'])
def color(request):
    """
    :param request: colorpicker's rgb values stored as a dictionary when the user hits submit
    :return: wav file, sine wave with frequency corresponds to energy of the color
    """
    response_object = request.data['color']
    r = response_object["r"]
    g = response_object["g"]
    b = response_object["b"]
    energy = round(0.299*r + .587*g + .114*b) # color energy calculation

    freq_to_generate = ((200*energy) / 255 ) + 150 # frequency based on energy, scaled for 150-350hz
    audio_samples = synths.generate_sine_wave_with_envelope(
        frequency=freq_to_generate,
        duration=500,
        a_percentage=0,
        d_percentage=0,
        s_percentage=1,
        r_percentage=0
    )
    wav_file_base64 = audio_samples_to_wav_base64(audio_samples)

    # return Response({
    #     "text": str(energy)
    # })
    return Response([wav_file_base64])


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
    column_constants = json.loads(request.data['constants'])
    duration = float(request.data['duration'])

    audio_samples = None
    for i, row in enumerate(csv_data):
        sound = None

        for j, frequency in enumerate(row):
            if frequency == "":
                continue
            column_constant = column_constants[j]
            freq_to_generate = column_constant["base_frequency"]["value"] + (
                    float(frequency) + column_constant["offset"]["value"]) * column_constant[
                                   "multiplier"]["value"]
            note = synths.generate_sine_wave_with_envelope(
                frequency=freq_to_generate,
                duration=duration,
                a_percentage=column_constant["a_percentage"]["value"],
                d_percentage=column_constant["d_percentage"]["value"],
                s_percentage=column_constant["s_percentage"]["value"],
                r_percentage=column_constant["r_percentage"]["value"]
            )
            if sound is None:
                sound = note
            else:
                sound += note
        if audio_samples is None:
            audio_samples = sound
        else:
            audio_samples = np.append(audio_samples, sound)

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
