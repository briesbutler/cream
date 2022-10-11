from rest_framework import generics, viewsets
from .serializers import UserSerializer
from .models import User


class UserView(generics.ListAPIView):
    queryset = User.objects.order_by('created_at').all()
    serializer_class = UserSerializer
