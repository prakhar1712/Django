from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('get/',views.getall,name="getall" ),
    path('create/',views.create,name="create"),
]
