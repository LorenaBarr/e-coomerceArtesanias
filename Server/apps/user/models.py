from django.db import models
from django.contrib.auth.models import make_password

class User(models.Model):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    userID = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=255)
    email = models.CharField(max_length=100, unique=True)  
    password = models.CharField(max_length=256)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.userName
