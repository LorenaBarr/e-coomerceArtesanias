from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cart, CartItem
from .serializers import CartItemSerializer
from apps.product.models import Product

class ViewCart(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        # Verificar si el usuario tiene un carrito existente
        user = 1  # Obtener el usuario actual desde la solicitud

        try:
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            return Response({"error": "El usuario no tiene un carrito existente"}, status=status.HTTP_404_NOT_FOUND)
        
        # Obtener todos los elementos del carrito del usuario
        cart_items = CartItem.objects.filter(cart=cart)
        cart_serializer = CartItemSerializer(cart_items, many=True)

        # Crear una lista para almacenar los datos de los productos
        product_data = []

        for cart_item in cart_items:
            product_data.append({
                'id_cart': cart_item.id,
                'id': cart_item.product.id,
                'name': cart_item.product.name,
                'URL': cart_item.product.URL,
                'price': cart_item.product.price,
                'category': {
                    'id': cart_item.product.category.id,
                    'name': cart_item.product.category.name,
                },
                'quantity': cart_item.quantity  # Agregar la cantidad del producto
            })

        response_data = {
            'cart_items': product_data
        }

        return Response(response_data, status=status.HTTP_200_OK)
    
class AddToCart(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        # Obtener el ID del producto y la cantidad del cuerpo de la solicitud
        product_id = request.data.get('id')
        quantity = request.data.get('quantity', 1)  # Si no se proporciona cantidad, asumimos 1
        
        # Verificar si el producto existe
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"error": "El producto no existe"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar si el usuario tiene un carrito existente
        user = request.user
        try:    
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            # Si el usuario no tiene un carrito existente, crear uno nuevo
            cart = Cart.objects.create(user=user)
        
        # Verificar si el producto ya está en el carrito del usuario
        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
            # Si el producto ya está en el carrito, simplemente actualizamos la cantidad
            cart_item.quantity = quantity
            cart_item.save()
        except CartItem.DoesNotExist:
            # Si el producto no está en el carrito, lo agregamos
            cart_item = CartItem.objects.create(cart=cart, product=product, quantity=quantity)
        
        # Serializar y devolver la información del artículo agregado al carrito
        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RemoveFromCart(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        # Obtener el ID del producto del cuerpo de la solicitud
        product_id = request.data.get('id')
        
        # Verificar si el producto existe
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"error": "El producto no existe en el carrito"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar si el usuario tiene un carrito existente
        user = request.user
        try:
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            return Response({"error": "El usuario no tiene un carrito existente"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar si el producto está en el carrito del usuario
        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
            cart_item.delete()  # Eliminar el artículo del carrito
            return Response({"message": "Producto eliminado del carrito correctamente"}, status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response({"error": "El producto no está en el carrito del usuario"}, status=status.HTTP_404_NOT_FOUND)
