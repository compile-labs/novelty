# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-01-24 16:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0027_auto_20180124_1625'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='option',
            name='question',
        ),
        migrations.RemoveField(
            model_name='optionorder',
            name='order',
        ),
        migrations.AddField(
            model_name='question',
            name='options',
            field=models.ManyToManyField(through='surveys.OptionOrder', to='surveys.Option'),
        ),
    ]
