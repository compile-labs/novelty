# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-01-22 15:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0005_auto_20180122_1521'),
    ]

    operations = [
        migrations.AddField(
            model_name='survey',
            name='questions',
            field=models.ManyToManyField(through='surveys.QuestionOrder', to='surveys.Question'),
        ),
    ]
