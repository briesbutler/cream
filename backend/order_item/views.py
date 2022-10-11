from rest_framework import generics, viewsets
from .serializers import Order_ItemSerializer
from .models import Order_Item
from rest_framework import permissions


class Order_ItemView(generics.ListAPIView):
    queryset = Order_Item.objects.order_by('created_at').all()
    serializer_class = Order_ItemSerializer
