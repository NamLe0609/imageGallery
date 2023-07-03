# Generated by Django 4.2.2 on 2023-07-03 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='uploads/')),
                ('galleries', models.ManyToManyField(to='core.gallery')),
            ],
        ),
        migrations.AddField(
            model_name='gallery',
            name='images',
            field=models.ManyToManyField(to='core.image'),
        ),
    ]
