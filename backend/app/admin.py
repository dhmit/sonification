"""
This file controls the administrative interface for the sonification web app.
"""

from django.contrib import admin
from . import models

models_to_register = [
]

for model in models_to_register:
    admin.site.register(model)
