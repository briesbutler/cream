from rest_framework import serializers
from .models import Order_Item


class Order_ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order_Item
        fields = '__all__'
