from django.urls import path
from .views import views

urlpatterns = [
    path('list', views.listUsersView.as_view()),
]