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

# from ..app import views
from backend.app import views

urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/example/<int:example_id>', views.get_example),
    path('api/get_sentiment_analysis', views.get_sentiment_analysis),

    # View paths
    path('', views.index, name='index'),
    path('example', views.example, name='example'),
    path('example/<int:example_id>', views.example_id, name='example_id'),
    path('sentiment_analysis', views.sentiment_analysis, name='sentiment_analysis')
]
