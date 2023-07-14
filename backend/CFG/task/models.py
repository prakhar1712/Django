from django.db import models
from user.models import CustomUser
# Create your models here.
class Task(models.Model):
    username = models.ForeignKey(CustomUser,on_delete=models.SET_NULL,null=True,blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    date = models.DateField()

    def __str__(self):
        return self.title