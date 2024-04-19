from django.db import models

# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    products = models.ManyToManyField(product)
    order_date = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    state = models.CharField(max_length=100)
    pay_id = models.CharField(max_length=100)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.orderID)
