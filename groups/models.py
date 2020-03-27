from django.db import models
from django.conf import settings

# Create your models here.
class Beer(models.Model):
    beer_name = models.CharField(max_length=150, blank=True)
    beer_description = models.TextField(blank=True)
    beer_label = models.URLField(max_length=255, blank=True)
    beer_abv = models.IntegerField(default=0)
    beer_ibu = models.IntegerField(default=0)
    beer_style = models.CharField(max_length=150, blank=True)
    # beer_description = models.CharField(max_length=500, blank=True)
    brewery_name = models.CharField(max_length=150, blank=True)
    brewery_city = models.CharField(max_length=150, blank=True)
    brewery_state = models.CharField(max_length=150, blank=True)
    # notes section for users

    class Meta:
        ordering = ['beer_name']

    def __str__(self):
        return self.beer_name

class Group(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField( upload_to="images/", default='null')
    is_public = models.BooleanField(default=True)
    beers = models.ManyToManyField(Beer)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)


    class Meta:
        ordering = ['title']


    def __str__(self):
        return self.title

