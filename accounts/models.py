from django.conf import settings
from django.contrib.auth.models import User, AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Profile(models.Model):
    avatar = models.ImageField(upload_to='images/', blank=True, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=30, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username