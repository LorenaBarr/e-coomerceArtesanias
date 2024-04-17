from django.urls import path
from .views import create_message

urlpatterns = [
    path('create/', create_message, name='create_message'),
]