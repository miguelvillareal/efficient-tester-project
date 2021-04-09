from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
from api.views import *
urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='users_list'),
    path('user/<uuid:pk>/',  UserDetailView.as_view(), name='user_detail'),
    path('experiments/', ExperimentListCreateView.as_view(), name='experiments_list'),
    path('experiment/<uuid:pk>/',  ExperimentDetailView.as_view(), name='experiment_detail'),
    path('protocols/', ProtocolsListCreateView.as_view(), name='protocols_list'),
    path('labgroups/', LabGroupListCreateView.as_view(), name='labgroups_list'),
    path('groupmembership/', GroupMembershipListCreateView.as_view(), name='groupmembership_list'),
    path('', include(router.urls))
]
