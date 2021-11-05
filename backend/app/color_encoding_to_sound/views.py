"""
These are views (both standard GET and API endpoints) for the summer 2021 sonification prototypes.

See app.api_views and app.views for documentation on how these kinds of views work.
"""

from django.shortcuts import render

def base_page(request):
    """
    Landing page for Color part of project
    """

    context = {
        'page_metadata': {
            'title': 'Colors'
        },
        'component_name': 'BasePage'
    }

    return render(request, 'index.html', context)
