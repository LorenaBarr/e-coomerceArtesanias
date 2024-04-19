from rest_framework import serializers
from .models import Cart

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id',
                  'users',
                  'products',
                  'order_date',
                  'total',
                  'state',
                  'pay_id',
                  'sub_total',
        )
