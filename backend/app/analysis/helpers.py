import string

def clean_text(text):
    # Lowercase, remove punctuation
    lower_case = text.lower()
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    return cleaned_text
