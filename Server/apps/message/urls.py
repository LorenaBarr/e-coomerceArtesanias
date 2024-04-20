from django.urls import path
from .views import CreateMessage, ViewMessages

urlpatterns = [
    path('create/', CreateMessage.as_view(), name='create_message'),
    path('list_all/', ViewMessages.as_view(), name='mostrar los mensajes'),
]   