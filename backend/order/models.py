from argparse import OPTIONAL
from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


class Order(models.Model):
    user_id = models.CharField(max_length=50, db_index=True)
    total_price = models.FloatField('item_id')
    full_name = models.CharField('full name', max_length=25)
    address_line1 = models.CharField('address line 1', max_length=250)
    address_line2 = models.CharField(
        'address line 2', max_length=250, null=True, blank=True)
    city = models.CharField('city', max_length=25)
    state = models.CharField('state', max_length=25)
    postal_code = models.IntegerField('postal code')
    country = models.CharField(
        'country', default="United States", max_length=25)
    telephone = models.IntegerField('telephone')
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    modified_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
