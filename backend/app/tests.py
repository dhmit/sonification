"""
Tests for the sonification web app.
"""

from django.test import TestCase
from django.core.exceptions import ObjectDoesNotExist
from .analysis import text_to_music


class TextToMusicTestCase(TestCase):
    """
    Test cases for text_to_music.py
    """
