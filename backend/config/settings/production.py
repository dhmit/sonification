"""

Production settings for *****

"""
import os

# pylint: disable-msg=E0401
from .base import *  # pylint: disable=unused-wildcard-import, wildcard-import

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

SECRET_KEY = os.environ['DJANGO_SECRET_KEY']  # set in venv activate

ADMINS = [('Ryaan', 'rahmed@mit.edu')]  # Django will email Ryaan on internal server errors

ALLOWED_HOSTS = [
    'exploratorium.dhlab.mit.edu',
]

CORS_ORIGIN_WHITELIST = []
