# Generated by Django 3.0.4 on 2020-03-27 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0008_auto_20200327_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beer',
            name='beer_label',
            field=models.URLField(blank=True, max_length=255),
        ),
    ]
