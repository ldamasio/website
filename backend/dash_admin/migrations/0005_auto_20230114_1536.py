# Generated by Django 3.2.13 on 2023-01-14 15:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dash_admin', '0004_alter_income_credit_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='DayliBalance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currency', models.CharField(default='BRL', max_length=5)),
                ('value', models.DecimalField(decimal_places=2, max_digits=6)),
                ('credit_date', models.DateTimeField()),
                ('category', models.IntegerField(choices=[(0, 'Binance Isolated Margin'), (1, 'Binance Spot'), (2, 'Bitso'), (3, 'Day Trade Clear'), (4, 'Day Trade XP')], default=0)),
                ('description', models.CharField(blank=True, max_length=255)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dash_admin_income', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-credit_date'],
            },
        ),
        migrations.DeleteModel(
            name='Income',
        ),
    ]
