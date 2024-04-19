from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.views import APIView
from product.models import Product

class ViewCart(APIView):
    def get(self,request):
        if request.user.is_authenticated:
            products = request.user.product_set.all()  # Assuming 'product_set' is the related name for the products in the user's cart
            products = products.count()
            total_price = sum(products.product.price * products.quantity for products in Product)
            context = {
                'product': products,
                'total_product': total_product,
                'total_price': total_price,
            }
            return render(request, 'cart.html', context)
        else:
            # Redirect to the login page if the user is not authenticated
            return redirect('login')
        
    
class AddToCart(APIView):
        def post(request, product_id):
            if request.user.is_authenticated:
                product = Product.objects.get(id=product_id)
                products, created = Product.objects.get_or_create(user=request.user, product=product)
                if not created:
                    products.quantity += 1
                    products.save()
            return redirect('home')  # Redirecciona a la página de inicio después de agregar al carrito

class RemoveFromCart(APIView):
    def post(self, request, product_id):
        if request.user.is_authenticated:
            product = Product.objects.get(id=product_id)
            products = request.user.product_set.filter(user=request.user, product=product).first()
            if products:
                if products.quantity > 1:
                    products.quantity -= 1
                    products.save()
                else:
                    products.delete()
                return Response({'message': 'Product removed from cart successfully'}, status=200)
            else:
                return Response({'error': 'Product not found in cart'}, status=404)
        else:
            return Response({'error': 'Unauthorized'}, status=401)

class ClearCart(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            request.user.product_set.all().delete()
            return Response('message': 'Cart cleared successfully', status=200)
        else:
            return Response({'error': 'Unauthorized'}, status=401)
        
class UpdateCart(APIView):
    def post(self, request, product_id, quantity):
        if request.user.is_authenticated:
            quantity = request.POST.get('quantity')
            if quantity.isdigit():
                product = Product.objects.get(id=product_id)
                products = request.user.product_set.filter(product=product).first()
                if products:
                    product.quantity = int(quantity)
                    products.save()
                    return Response({'message': 'Cart updated successfully'}, status=200)
                else:
                    return Response({'error': 'Product not found in cart'}, status=404)
            else:
                return Response({'error': 'Invalid quantity value'}, status=400)
        else:
            return Response({'error': 'Unauthorized'}, status=401)
      
class ProcessPayment(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            # Aquí va la lógica para procesar el pago
            # Puedes implementar la lógica de procesamiento del pago aquí
            # Después de procesar el pago, puedes redirigir al usuario a una página de confirmación de pago o cualquier otra página relevante.
            return redirect('pagina_confirmacion_pago')  # Redirige a la página de confirmación de pago
        else:
            return Response({'error': 'Unauthorized'}, status=401)
