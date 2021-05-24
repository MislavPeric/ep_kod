from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]