from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
        class Meta:
            model = Message
            fields = ['id','fullName', 'email', 'phone', 'message']