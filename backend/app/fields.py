"""
Custom fields for the gender analysis web app.
"""
from django.db import models
from django.utils.translation import gettext_lazy


class LowercaseCharField(models.CharField):
    """
    A subclass of models.CharField that converts the string to lowercase
    when saving the model instance to the database.
    """

    def _description(self):
        return gettext_lazy(f"String (up to {self.max_length}) converted to lowercase upon saving the model instance "
                            f"to the database.")

    description = property(_description)

    def pre_save(self, model_instance, add):
        """
        Preprocesses field data before saving a model instance to the database.
        In this case, converts the data described by the CharField to lowercase.
        """
        chars = getattr(model_instance, self.attname)
        chars_lower = chars.lower()
        setattr(model_instance, self.attname, chars_lower)

        return chars_lower
