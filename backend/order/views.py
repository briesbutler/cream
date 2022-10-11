from rest_framework import generics, viewsets
from .serializers import OrderSerializer
from .models import Order
from rest_framework.permissions import IsAuthenticated


class OrderView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.order_by('created_at').all()
    serializer_class = OrderSerializer


class OrderCreateView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.order_by('created_at').all()
    serializer_class = OrderSerializer
