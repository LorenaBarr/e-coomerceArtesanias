from django.urls import path
from . import views

urlpatterns = [
    path('list_products/', views.ListAllProducts.as_view(), name='listar todos los productos'),
    path('list_categories/', views.ListAllCategories.as_view(), name='listar todas las categorias'),
    path('category/<str:category_name>/', views.GetProductsByCategory.as_view(), name='buscar por categoria'),
    path('product-fill/<str:product_name>/', views.GetProductByName.as_view(), name='buscar por nombre'),
    path('create-product/', views.CreateProduct.as_view(), name='crear producto'),
    path('create-category/', views.CreateCategory.as_view(), name='crear categoria'),
    path('delete-product/<int:product_id>/', views.DeleteProduct.as_view(), name='eliminar producto'),
    path('delete-category/<int:category_id>/', views.DeleteCategory.as_view(), name='eliminar la categoria'),
]   