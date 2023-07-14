from django.contrib import admin
from django.urls import path,include
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.home, name="home"),
    path('register/', views.register, name="register"),
    path('token/', views.CustomTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
]