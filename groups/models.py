from django.db import models

# Create your models here.
class Group(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField( upload_to="images/", default='null')
    is_public = models.BooleanField(default=True)

    def __str__(self):
        return self.title