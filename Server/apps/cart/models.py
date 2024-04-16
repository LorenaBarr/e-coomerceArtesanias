from django.db import models

# Create your models here.
class shoppingCart(models.Model):
    total = models.DecimalField(max_digits=10, decimal_places=2)
    state = models.CharField(max_length=50)
    producto = models.ForeignKey("product.Product", on_delete=models.CASCADE)


    def __str__(self):
        return str(self.orderID)
