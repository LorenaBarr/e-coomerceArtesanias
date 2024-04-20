from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product


# vista del carrito
class ViewCart(APIView):
    def get(self,request):
        if request.user.is_authenticated:
            cart_item = request.user.product_set.all()
            context = {
                'products': cart_item,
                'user': request.user,
                'order_date' : Product.order_date,
                'state' : Product.state
            }
            return Response(context)
        else:
            return Response({'error': 'Unauthorized'}, status=401)

# eliminar agregar y elimar productos
class RemoveFromCart(APIView):
    def post(self, request, product_id):
        if request.user.is_authenticated:
            product = Product.objects.get(id=product_id)
            cart_item = Product.objects.filter(user=request.user, product=product).first()
            if cart_item:
                if cart_item.quantity > 1:
                    cart_item.quantity -= 1
                    cart_item.save()
                else:
                    cart_item.delete()
                return Response({'message': 'Product removed from cart successfully'}, status=200)
            else:
                return Response({'error': 'Product not found in cart'}, status=404)
        else:
            return Response({'error': 'Unauthorized'}, status=401)

# limpia todo el carrito
class ClearCart(APIView):
    def delete(self, request):
        if request.user.is_authenticated:
            products_in_cart = Product.objects.filter(user=request.user)
            products_in_cart.delete()
            return Response({'message': 'Cart cleared successfully'}, status=200)
        else:
            return Response({'error': 'Unauthorized'}, status=401)

# actualiza el carrito
class UpdateCart(APIView):
    def post(self, request, product_id, quantity):
        if request.user.is_authenticated:
            quantity = request.data.get('quantity')
            if quantity.isdigit():
                product = Product.objects.get(id=product_id)
                cart_item = Product.objects.filter(product=product).first()
                if cart_item:
                    product.quantity = int(quantity)
                    product.save()
                    return Response({'message': 'Cart updated successfully'}, status=200)
                else:
                    return Response({'error': 'Product not found in cart'}, status=404)
            else:
                return Response({'error': 'Invalid quantity value'}, status=400)
        else:
            return Response({'error': 'Unauthorized'}, status=401)