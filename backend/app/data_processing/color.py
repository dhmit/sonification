import numpy as np

from app.synthesis import synthesizers as synths


def generate_samples(colors):
    '''
    Converts a list of colors into a list of tones.

    :colors: list of dictionaries containing the number properties h, s, v
    :return: list of audio samples corresponding to each color
    '''
    samples = []
    print("another one!")
    for hsv in colors:
        h, s, v = hsv['h']/360, hsv['s']/100, hsv['v']/100

        freq = 110 + 880 * h
        gain = s*s*s
        print(gain)
        harmonic_weights = get_harmonic_weights(v)

        sample = gain*synths.generate_wave_weighted_harmonics(freq, 1, harmonic_weights)

        samples.append(sample)
    return samples


def get_harmonic_weights(value):
    '''
    Linearly interpolate harmonic weights based on a value between 0-1.
    This aims to interpolate between different wave types.
    '''
    sine_harmonics = np.array([0, 1, 0, 0, 0, 0, 0, 0])
    square_harmonics = np.array([0, 0.6366, 0, -0.2122, 0, 0.1273, 0, -0.0909])
    triangle_harmonics = np.array([0, 0.8106, 0, 0.0901, 0, 0.324, 0, 0.0165])
    sawtooth_harmonics = np.array([0, 0.6366, -0.3183, 0.2122, -0.1592, 0.1273, -0.1061, 0.0909])

    waves = [sawtooth_harmonics, sine_harmonics]
    spacing = 1 / (len(waves) - 1)
    distances = [abs((i*spacing - value)) for i in range(len(waves))]
    distances = [d if d < spacing else spacing for d in distances]
    distances = [spacing - d for d in distances]
    distances_norm = sum(distances)
    distances = [d/distances_norm for d in distances]

    interpolated_harmonics = np.sum([
        distances[i]*waves[i] for i in range(len(waves))
    ], axis=0)

    return interpolated_harmonics
