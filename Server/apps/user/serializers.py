from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model

user = get_user_model()

def UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user  
        fields = (
            'id', 
            'email',
            'userName',  
            'is_active',
            'is_staff',
        ) 