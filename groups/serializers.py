from rest_framework import serializers

from .models import Group, Beer

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    beers = BeerSerializer(many=True, read_only=True)
    
    class Meta:
        model = Group
        fields = '__all__'


class GroupBeerSerializer(serializers.ModelSerializer):
    beers = BeerSerializer(many=True, read_only=True)
    
    class Meta:
        model = Group
        fields = '__all__'

    # def update(self, instance, validated_data):
    #     import pdb; pdb.set_trace()
    #     # need to find out if beer exists (use the Beer model to search)
    #     if Beer.objects.filter(beer_name='some name here').exists():
    #         pass
    #     # add beer if it doesnt not exist (use the Beer to create)
    #     # add it to group (you can find the group using kwargs e.g. kwargs['id]) (use the Group model to update)
    #     # print(validated_data)
        
    #     # instance.beers.add(beer)
    #     instance.save()

    #     return instance


