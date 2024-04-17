from django.db import models

class User(models.Model):
    Name = models.CharField(max_length=50, default='')
    LastName = models.CharField(max_length=50, default='')
    Email = models.CharField(max_length=50, default='')
    Password = models.CharField(max_length=255, default='')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['Email', 'Password']

    def to_dict(self):
        return {
            'Name': self.Name,
            'LastName': self.LastName,
            'Email': self.Email,
            'Password': self.Password,
        }