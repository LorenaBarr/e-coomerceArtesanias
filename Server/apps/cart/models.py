from django.db import models
from apps.product.models import Product
from apps.user.models import User

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  
    quantity = models.PositiveIntegerField(default=1)