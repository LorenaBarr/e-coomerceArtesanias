from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
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


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            raise serializers.ValidationError("Se requieren tanto nombre de usuario como contraseña.")

        # Puedes agregar validaciones adicionales aquí si lo deseas
        return data