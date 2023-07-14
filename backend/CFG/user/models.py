from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    username = models.CharField(max_length=200,null=True,unique=True)
    email = models.CharField(max_length=200,null=True,blank=True)
    phone = models.CharField(max_length=100,null=True, blank=True)
    role = models.IntegerField(default=0)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

# role i have kept it integervalue so that we can create as many as we want
# 0 - staff
# 1 - Admin
# 2 - SuperAdmin