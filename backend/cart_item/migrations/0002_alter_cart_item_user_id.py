# Generated by Django 4.1.1 on 2022-10-02 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart_item', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart_item',
            name='user_id',
            field=models.CharField(db_index=True, max_length=50),
        ),
    ]