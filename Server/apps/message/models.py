from django.db import models

class Message(models.Model):
    userID = models.ForeignKey('user.User', on_delete=models.CASCADE)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.email