from django.urls import path
from . import views

urlpatterns = [
    path('view_cart/', views.ViewCart.as_view(), name='mostrar carrito'),
    path('add_product/', views.AddToCart.as_view(), name='agregar producto al carrito'),
    path('delete_product/', views.RemoveFromCart.as_view(), name='borrar producto del carrito'),
]
