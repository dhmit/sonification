"""

Tests for modules in the sonification app that live in the top-level app directory.

These are mostly tests for functions in common.py,
or view/api tests to check that routes render.

"""

# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors just for tests

from django.test import TestCase

from app import common


class CommonTestCase(TestCase):
    def test_lookup_note_frequency(self):
        note = 'a'
        self.assertEqual(common.lookup_note_frequency(note), 440.00)
