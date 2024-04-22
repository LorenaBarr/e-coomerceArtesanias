from django.db import models
from apps.product.models import Product
from apps.user.models import User

class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default= 0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"
