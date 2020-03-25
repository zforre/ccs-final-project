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


class GroupBeerSerializer(serializers.ModelSerializer):
    model = Group

    # def update(self, instance, validated_data):

        # need to find out if beer exists (use the Beer model to search)
        # add beer if it doesnt not exist (use the Beer to create)
        # add it to group (you can find the group using kwargs e.g. kwargs['id]) (use the Group model to update)
        # print(validated_data)
        
        # instance.beers.add(beer)
        # instance.save()

        #return instance


