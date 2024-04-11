from django.contrib.auth.models import User
from .models import Product

class Cart:
    def __init__(self, request):
        self.request = request
        self.user = request.user if request.user.is_authenticated else None

    def add(self, product):
        if self.user:
            cart_item, created = Product.objects.get_or_create(
                user=self.user,
                product=product
            )
            if not created:
                cart_item.quantity += 1
                cart_item.save()

    def delete_product(self, product):
        if self.user:
            cart_item = Product.objects.filter(user=self.user, product=product).first()
            if cart_item:
                cart_item.delete()

    def remove_unit_drom_cart(self, product):
        if self.user:
            cart_item = Product.objects.filter(user=self.user, product=product).first()
            if cart_item:
                if cart_item.quantity > 1:
                    cart_item.quantity -= 1
                    cart_item.save()
                else:
                    cart_item.delete()

    def clear_cart(self):
        if self.user:
            self.user.product_set.all().delete()
