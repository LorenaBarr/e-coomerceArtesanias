from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Product
from .serializers import ProductSerializer, CategorySerializer

#listar todos los productos
class ListAllProducts(APIView):
    def get(self, request):
        products = Product.objects.all().order_by('name')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# listar todas las categorias
class ListAllCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        data = [{"id": category.id, "name": category.name} for category in categories]
        return Response(data)
    
# mostrar productos por categoria
class GetProductsByCategory(APIView):
    def get(self, request, category_name):
        try:
            category = Category.objects.get(name=category_name)
        except Category.DoesNotExist:
            return Response({"detail": "Category not found."}, status=status.HTTP_404_NOT_FOUND)

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# buscar producto por nombre del producto
class GetProductByName(APIView):
    def get(self, request, product_name):
        try:
            products = Product.objects.filter(name__icontains=product_name)
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        except:
            return Response({"detail": "An error occurred while searching for products."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#crear producto
class CreateProduct(APIView):
    def post(self, request):
        #if not request.user.is_authenticated and request.user.is_editor:
         #   return Response({'message': 'You must be logged in to add items to the cart'})
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# crear una categoria
class CreateCategory(APIView):
    def post(self, request):
        if not request.user.is_authenticated and request.user.is_editor:
            return Response({'message': 'You must be logged in to add items to the cart'})
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

# borrar un producto
class DeleteProduct(APIView):
    def delete(self, request, product_id):
        if not request.user.is_authenticated and request.user.is_editor:
            return Response({'message': 'You must be logged in to add items to the cart'})
        try:
            product = Product.objects.get(id=product_id)
            product.delete()
            return Response({"detail": "Product deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

# borrar una categoria
class DeleteCategory(APIView):
    def delete(self, request, category_id):
        if not request.user.is_authenticated and request.user.is_editor:
            return Response({'message': 'You must be logged in to add items to the cart'})
        try:
            category = Category.objects.get(id=category_id)
            category.delete()
            return Response({"detail": "Category deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Category.DoesNotExist:
            return Response({"detail": "Category not found."}, status=status.HTTP_404_NOT_FOUND)























