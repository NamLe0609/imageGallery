# Generated by Django 4.2.2 on 2023-07-04 08:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_remove_image_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='galleries',
        ),
    ]
