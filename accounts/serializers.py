from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework import serializers, authentication
from rest_auth.models import TokenModel

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

class TokenSerializer(serializers.ModelSerializer):
    id  = serializers.ReadOnlyField(source='user.id')
    username = serializers.ReadOnlyField(source='user.username')
    profile = serializers.ReadOnlyField(source='user.profile.id')

    class Meta:
        model = TokenModel
        fields = ('key', 'id', 'username', 'profile')