from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cart
from .serializers import CartSerializer

class CartView(APIView):
    def get(self, request):
        pass

class AddToCart(APIView):
    def post(self, request):
        pass

class RemoveFromCart(APIView):
    def post(self, request):
        pass

class UpdateCart(APIView):
    def post(self, request):
        pass

class ProcessPayment(APIView):
    def post(self, request):
        pass