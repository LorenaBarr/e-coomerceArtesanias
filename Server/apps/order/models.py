from django.db import models
from product.models import Product
from user.models import User

class Order(models.Model):
    orderID = models.AutoField(primary_key=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    state = models.CharField(max_length=50)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.orderID)

