from rest_framework import generics, viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.permissions import IsAuthenticated


class UserView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.order_by('created_at').all()
    serializer_class = UserSerializer
