from django.db import models


# Create your models here.
class Projects(models.Model):
    image = models.ImageField(upload_to='static/images/', )
    thumb = models.ImageField(upload_to='static/thumbnails/',)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    updated = models.DateTimeField(auto_now_add=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created', '-updated']

    def __str__(self):
        return self.title











