from django.db import models
from django.contrib.auth.models import make_password

class User(models.Model):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    userID = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='User ID')  
    userName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)  
    password = models.CharField(max_length=256)
    def __str__(self):
        return self.userName
