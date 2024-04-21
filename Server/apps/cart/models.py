from django.db import models
from apps.product.models import Product
from apps.user.models import User

class Cart(models.Model):
    products = models.ManyToManyField(Product)
    order_date = models.DateTimeField(Product,auto_now_add=True)
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return str(self.orderID)

