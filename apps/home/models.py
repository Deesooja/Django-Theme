# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserRestInfo(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    profile_pic=models.FileField(upload_to="user_image",null=True)
    background_image=models.FileField(upload_to="user_image",null=True)
    address=models.CharField(max_length=250,null=True)
    city=models.CharField(max_length=250,null=True)
    country=models.CharField(max_length=250,null=True)
    postal_code=models.IntegerField(null=True)
    about_me=models.CharField(max_length=250,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)


class UserUploadedImage(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    image=models.FileField(upload_to="user_uploaded_image")
    text=models.CharField(max_length=500)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)


class Friend(models.Model):
   user=models.ForeignKey(User,on_delete=models.CASCADE , related_name="friends")
   friend=models.ForeignKey(User,on_delete=models.CASCADE)
   created_at=models.DateTimeField(auto_now_add=True)
   updated_at=models.DateTimeField(auto_now_add=True)

# User.friends.all()