from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


class Order_Item(models.Model):
    order_id = models.IntegerField(db_index=True)
    item_id = models.IntegerField('item_id', db_index=True)
    quantity = models.IntegerField('Quantity')
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    modified_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
