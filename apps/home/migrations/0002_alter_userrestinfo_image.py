# Generated by Django 3.2.6 on 2023-02-01 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrestinfo',
            name='image',
            field=models.FileField(null=True, upload_to='user_image'),
        ),
    ]
