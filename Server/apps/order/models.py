from django.db import models

class Order(models.Model):
    orderID = models.AutoField(primary_key=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    state = models.CharField(max_length=50)
    product = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE)

    def __str__(self):
        return str(self.orderID)
