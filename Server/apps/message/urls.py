from django.urls import path
from .views import CreateMessage

urlpatterns = [
    path('create/', CreateMessage.as_view(), name='create_message'),
]