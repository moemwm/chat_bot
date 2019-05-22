from django.db import models

# Create your models here.
class UserInfo(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    tel = models.CharField(max_length=12)
    role = models.CharField(max_length=12)

