from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer

class CreateMessage(APIView):
    def post(self, request, format=None):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ViewMessages(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'message': 'You must be logged in to add items to the cart'})
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
