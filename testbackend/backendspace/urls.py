from django.urls import path
from backendspace.views import index

urlpatterns = [
    path('', index, name='index'),
]
