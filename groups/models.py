from django.db import models

# Create your models here.
class Group(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField( upload_to="images/", default='null')
    is_public = models.BooleanField(default=True)
    # beers = models.ManyToManyField('Beer')

    def __str__(self):
        return self.title

# class Beer(models.Model):
#     title = models.CharField(max_length=30)
#     description = models.TextField()
#     image = models.ImageField( upload_to="images/", default='null')

#     def __str__(self):
#         return self.title