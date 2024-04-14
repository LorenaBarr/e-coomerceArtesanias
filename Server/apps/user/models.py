from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Los usuarios deben tener una dirección de correo electrónico')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class User(AbstractUser, PermissionsMixin):
    id = models.AutoField(primary_key=True, null=False)
    email = models.EmailField(max_length=255, unique=True)
    user_name = models.CharField(max_length=255, null=False, default='')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    def __str__(self):
        return self.email