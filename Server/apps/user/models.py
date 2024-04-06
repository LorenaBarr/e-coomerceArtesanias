from django.db import models
from django.contrib.auth.models import make_password

class User(models.Model):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    userID = models.AutoField(primary_key=True)  
    userName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)  # Corregido de 'email'
    contact = models.CharField(max_length=20)
    password = models.CharField(max_length=128)
    def save(self, *args, **kwargs):
        # Antes de guardar el usuario, hasheamos la contraseña si es nueva o ha cambiado
        if self.pk is None or 'password' in kwargs:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.userName
