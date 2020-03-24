from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id','avatar', 'user', 'bio', 'location', 'birth_date', )
        depth = 1

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model
        fields = ('profile')