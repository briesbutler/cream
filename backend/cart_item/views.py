from rest_framework import generics, viewsets
from .serializers import Cart_ItemSerializer, CartUpdateSerializer
from .models import Cart_Item
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions


class CartList(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cart_Item.objects.order_by('created_at').all()
    serializer_class = Cart_ItemSerializer


class CartView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cart_Item.objects.all().order_by('id').all()
    serializer_class = Cart_ItemSerializer


class CartViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Cart_Item.objects.all()
    # serializer_class = CartUpdateSerializer
    serializer_class = Cart_ItemSerializer
