from django.shortcuts import render
from rest_framework import generics

from .models import Group
from .serializers import GroupSerializer


class GroupListCreate(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GroupRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer