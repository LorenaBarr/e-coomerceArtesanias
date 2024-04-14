from django.db import models

class Product(models.Model):
    productName = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.productName

class Category(models.Model):
    categoryName = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.categoryName
