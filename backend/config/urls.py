"""
URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URL configuration
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from app import views, api_views
from app.summer_2021_prototypes import views as summer_prototype_views

urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/color_to_instruments/', api_views.color_to_instruments),
    path('api/color_to_music/', api_views.color_to_music),
    path('api/color_to_samples/', api_views.color_to_samples),

    path('api/gesture_to_instruments/', api_views.gesture_to_instruments),
    path('api/gesture_to_music/', api_views.gesture_to_music),
    path('api/gesture_to_samples/', api_views.gesture_to_samples),

    path('api/polygon_to_music/', api_views.polygon_to_music),
    path('api/polygon_to_samples/', api_views.polygon_to_samples),

    path('api/text_shape_to_music/', api_views.text_shape_to_music),
    path('api/text_shape_to_samples/', api_views.text_shape_to_samples),

    path('api/time_series_to_music/', api_views.time_series_to_music),
    path('api/time_series_to_samples/', api_views.time_series_to_samples),
    path('api/time_series_sample_data/', api_views.time_series_sample_data),
    path('api/parse_csv/', api_views.parse_csv),

    path('api/playback_demo/', api_views.playback_demo),

    # View paths
    path('', views.index, name='index'),
    path('colors/', views.colors),
    path('gestures/', views.gestures),
    path('playback-demo/', views.playback_demo),
    path('polygons/', views.polygons),
    path('text-shape/', views.text_shape_analysis),
    path('time-series/', views.time_series),

    # Ryaan demo code - eventually delete me!
    path('numbers-before/', views.numbers_before),
    path('numbers-after/', views.numbers_after),
    path('api/numbers_to_music/', api_views.numbers_to_music),
    path('api/numbers_to_samples/', api_views.numbers_to_samples),
]


# Summer prototype view paths and API endpoints
summer_prototype_urlpatterns = [
    path('summer-prototypes/', summer_prototype_views.summer_prototypes),
    path('api/get_sentiment_analysis/', summer_prototype_views.get_sentiment_analysis),
    path('api/get_sentiment_analysis_2/', summer_prototype_views.get_sentiment_analysis_2),
    path('api/image_to_music/', summer_prototype_views.image_to_music),
]
urlpatterns += summer_prototype_urlpatterns


# ################################################################################
# # Examples of how to implement these
# ################################################################################
# example_urlpatterns = [
#     # Regular GET endpoint
#     # Creates a new view at the route /example/ and calls the view function at views.example
#     path('example/', views.example, name='example'),
#
#     # GET endpoint with a parameter.
#     # The part of the URL inside of <> gets parsed into a keyword argument and sent to the
#     # view function. See views.example_id: the keyword argument in the URL
#     # matches the keyword argument to the view function.
#     path('example/<int:example_id_arg>/', views.example_id, name='example_id'),
#
#     # GET API endpoint with a parameter.
#     # This API call takes arguments just like the endpoint above
#     path('api/example/<int:api_example_id_arg>/', api_views.get_example),
#
#     # POST API endpoint with a parameter.
#     # This API call doesn't register its arguments here, but take a look at api_views.post_example
#     # This endpoint has to be called via a POST request, with the data payload that will end up
#     # in request.data contained in the body of the request.
#     path('api/post_example/', api_views.post_example),
# ]
#
# urlpatterns += example_urlpatterns
