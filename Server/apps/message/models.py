from django.db import models

class Message(models.Model):
    fullName = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.fullName   