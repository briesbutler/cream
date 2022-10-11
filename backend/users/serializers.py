from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = 'username', 'email', 'token_expires_at', 'created_at'
