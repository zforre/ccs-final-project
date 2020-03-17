from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('avatar', 'user', 'username', 'bio', 'location', 'birth_date',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model
        fields = ('profile')