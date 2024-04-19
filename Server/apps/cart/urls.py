from django.urls import path
from . import views

urlpatterns = [
        path('cart/view/<int:product_id>/', views.view_to_cart, name='view_cart'),
        path('cart/add/<int:product_id>',views.add_to_cart, name='add_to_cart'),
        path('cart/remove/<int:product_id>/',views.remove_from_cart, name='remove_from_cart'),
        path('cart/clear/<int:product_id>/', views.clear_cart, name='clear_cart'),
        path('cart/update/<int:product_id>/', views.update_cart, name='update_cart')
]
