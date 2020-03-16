from rest_framework import serializers

from .models import Group, Beer

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('id', 'name', 'description', 'image',)

class GroupSerializer(serializers.ModelSerializer):
    beers = BeerSerializer(many=True, read_only=True)
    
    class Meta:
        model = Group
        fields = ('id', 'title', 'description', 'image', 'is_public', 'beers')


