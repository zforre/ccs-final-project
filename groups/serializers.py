from rest_framework import serializers

from .models import Recipe


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'description', 'image', 'is_public',)