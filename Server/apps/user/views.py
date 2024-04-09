from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import *
from .serializers import UserSerializer, LoginSerializer
from django.contrib.auth import authenticate


class RegisterUser(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.create(serializer.validated_data)  # Aquí se pasa los datos validados
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

