# Generated by Django 3.2.4 on 2021-06-17 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_auto_20210616_1929'),
    ]

    operations = [
        migrations.AddField(
            model_name='diarista',
            name='cidade',
            field=models.CharField(default='cidade', max_length=50),
            preserve_default=False,
        ),
    ]