from rest_framework import serializers
from .models import Cart_Item


class Cart_ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart_Item
        fields = '__all__'


class CartUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart_Item
        fields = 'quantity', 'item_id'
