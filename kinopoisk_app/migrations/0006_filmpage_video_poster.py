# Generated by Django 5.1.6 on 2025-05-31 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kinopoisk_app', '0005_filmpage_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='filmpage',
            name='video_poster',
            field=models.CharField(default=123, max_length=30),
            preserve_default=False,
        ),
    ]
