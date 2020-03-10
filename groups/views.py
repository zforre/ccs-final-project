from django.shortcuts import render
from rest_framework import generics

from .models import Recipe
from .serializers import GroupSerializer


class GroupList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = GroupSerializer

class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = GroupSerializer