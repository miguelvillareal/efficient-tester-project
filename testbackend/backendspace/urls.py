from django.urls import path
from backendspace.views import index
from . import views


urlpatterns = [
    path('', index, name='index'),
    path('tylerTest/', views.tylerTest, name="tylerTest")
]
