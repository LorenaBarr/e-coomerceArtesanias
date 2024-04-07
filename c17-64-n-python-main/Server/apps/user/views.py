from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import User

class listUsersView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        if  User.objects.all().exists():
            print('user list')
            return Response({'user':'test message'},status=status.HTTP_200_OK) 
        else:
            return Response({'error':'no users'},status=status.HTTP_404_NOT_FOUND)