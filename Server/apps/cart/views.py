from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from .models import Cart
from .serializers import CartSerializer

class ViewCart(APIView):

    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        user = request.user
        try:
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            # Si el carrito no existe para el usuario, crear uno vacío
            cart = Cart.objects.create(user=user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)
        
class AddToCart(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        user = request.user
        product = request.data['product']
        quantity = request.data['quantity']
        try:
            cart = Cart.objects.get(user=user, product=product)
            cart.quantity = quantity
            cart.save()
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except Cart.DoesNotExist:
            cart = Cart(user=user, product=product, quantity=quantity)
            cart.save()
            serializer = CartSerializer(cart)
            return Response(serializer.data)
class RemoveFromCart(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        user = request.user
        product = request.data['product']
        try:
            cart = Cart.objects.get(user=user, product=product)
            cart.delete()
            return Response({'message': 'Product removed from cart'})
        except Cart.DoesNotExist:
            return Response({'message': 'Product not found in cart'})