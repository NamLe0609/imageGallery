from django.db import models

class Image(models.Model):
    image = models.ImageField(upload_to='uploads/')
    
class Gallery(models.Model):
    name = models.CharField(max_length=100)
    images = models.ManyToManyField('Image', blank=True)