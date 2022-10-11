# Generated by Django 4.1.1 on 2022-09-30 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(db_index=True, max_length=50, verbose_name='Username')),
                ('password', models.IntegerField(db_index=True, max_length=500, verbose_name='Password')),
                ('email', models.EmailField(db_index=True, max_length=254, verbose_name='Email')),
                ('token', models.CharField(blank=True, max_length=500)),
                ('token_expires_at', models.DateTimeField(blank=True, verbose_name='Created Datetime')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
            ],
        ),
    ]
