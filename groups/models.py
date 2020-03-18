from django.db import models
from django.conf import settings

# Create your models here.
class Beer(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField( upload_to="images/", default='null')
    
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Group(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField( upload_to="images/", default='null')
    is_public = models.BooleanField(default=True)
    beers = models.ManyToManyField(Beer)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        ordering = ['title']


    def __str__(self):
        return self.title

