# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-01-24 16:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0024_auto_20180123_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='survey',
            name='questions',
            field=models.ManyToManyField(related_name='surveys', through='surveys.QuestionOrder', to='surveys.Question'),
        ),
    ]
