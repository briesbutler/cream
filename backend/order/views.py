from rest_framework import generics, viewsets
from .serializers import OrderSerializer
from .models import Order


class OrderView(generics.ListAPIView):
    queryset = Order.objects.order_by('created_at').all()
    serializer_class = OrderSerializer


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.order_by('created_at').all()
    serializer_class = OrderSerializer
