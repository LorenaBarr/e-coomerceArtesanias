from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'userID', 
            'userName', 
            'email',
            'password'
            ]
         

    def create(self, validated_data):
        user = User.objects.create(
            userName=validated_data['userName'],
            email=validated_data['email'],
            password=make_password(validated_data['password'])
        )
        return user