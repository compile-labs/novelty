# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-01-22 15:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0006_survey_questions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='survey',
            name='last_update',
            field=models.DateTimeField(auto_now=True),
        ),
    ]