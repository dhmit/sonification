from app.synthesis import synthesizers as synths

def generate_samples(colors):
    '''
    Converts a list of colors into a list of tones.
    
    :colors: list of dictionaries containing the number properties h, s, v
    :return: list of audio samples corresponding to each color
    '''
    samples = []
    for hsv in colors:
        h,s,v = hsv['h']/360, hsv['s']/100, hsv['v']/100
        print(h,s,v)

        freq = 440 + 440*h
        gain = s
        
        sample = gain*synths.generate_sine_wave(freq, 1)
        samples.append(sample)
    return samples