from django.db import models


class User(models.Model):
    username = models.CharField('Username', max_length=50, db_index=True)
    password = models.CharField('Password', max_length=500, db_index=True,)
    email = models.EmailField('Email', max_length=254, db_index=True,)
    token = models.CharField(
        max_length=500, blank=True)
    token_expires_at = models.DateTimeField(
        'Created Datetime', blank=True)
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    modified_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
