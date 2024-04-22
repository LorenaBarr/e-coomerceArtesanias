from django.urls import path
from . import views

urlpatterns = [
    path('add_product/', views.AddToCart.as_view(), name='agregar producto al carrito'),
    path('remove_product/', views.RemoveFromCart.as_view(), name='ver el carrito'),
    path('view_cart/', views.ViewCart.as_view(), name='ver el carrito'),
]
