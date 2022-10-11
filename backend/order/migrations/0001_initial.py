# Generated by Django 4.1.1 on 2022-09-30 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(db_index=True)),
                ('total_price', models.FloatField(verbose_name='item_id')),
                ('full_name', models.CharField(max_length=25, verbose_name='full name')),
                ('address_line1', models.CharField(max_length=250, verbose_name='address line 1')),
                ('address_line2', models.CharField(max_length=250, verbose_name='address line 2')),
                ('city', models.CharField(max_length=25, verbose_name='city')),
                ('state', models.CharField(max_length=25, verbose_name='state')),
                ('postal_code', models.IntegerField(verbose_name='postal code')),
                ('country', models.CharField(default='United States', max_length=25, verbose_name='country')),
                ('telephone', models.IntegerField(verbose_name='telephone')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
            ],
        ),
    ]
