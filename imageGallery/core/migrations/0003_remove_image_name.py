# Generated by Django 4.2.2 on 2023-07-03 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_gallery_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='name',
        ),
    ]
