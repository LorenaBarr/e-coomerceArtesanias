from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Product
from .serializers import ProductSerializer

class GetProductsByCategory(APIView):
    def get(self, request, category_name):
        try:
            category = Category.objects.get(name=category_name)
        except Category.DoesNotExist:
            return Response({"detail": "Category not found."}, status=status.HTTP_404_NOT_FOUND)

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ListAllProducts(APIView):
    def get(self, request):
        products = Product.objects.all().order_by('name')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class CreateCategory(APIView):
    def post(self, request):
        name = request.data.get('name')
        if not name:
            return Response({"detail": "Category name is required."}, status=status.HTTP_400_BAD_REQUEST)

        category, created = Category.objects.get_or_create(name=name)
        if created:
            return Response({"detail": f"Category '{name}' created successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"detail": f"Category '{name}' already exists."}, status=status.HTTP_400_BAD_REQUEST)
        
class CreateProduct(APIView):
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
