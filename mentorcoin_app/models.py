from django.db import models, transaction
from django import forms
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ObjectDoesNotExist
from django.core.validators import MinValueValidator
from decimal import Decimal, getcontext

class CodeReview(models.Model):

	expires_choices = (
		(259200, '3 Days'),
		(604800, '1 Week'),
		(2592000, '1 Month'),
		(9999999999, 'Never')
	)

	experience_choices = (
		('Beginner', 'Beginner'),
		('Intermediate', 'Intermediate'),
		('Expert', 'Expert'),
	)

	length_choices = (
		('Hours', 'Hours'),
		('Days', 'Days'),
		('Weeks', 'Weeks')
	)

	status_choices = (
		('open', 'open'),
		('claimed', 'claimed'),
		('fulfilled', 'fulfilled'),
		('closed', 'closed'),
	)

	pr_title = models.CharField(max_length=100)
	pr_url = models.URLField()
	submitted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="code_reviews_submitted")
	notification_email = models.EmailField()
	full_name = models.CharField(max_length=200)
	amount = models.DecimalField(max_digits=9, decimal_places=3)
	description = models.TextField(blank=True)
	keywords = models.CharField(blank=True, max_length=500)
	expires = models.IntegerField(default=2592000, choices=expires_choices)
	experience_level = models.CharField(default="Beginner", choices=experience_choices, max_length=36)
	project_length = models.CharField(default="Hours", choices=length_choices, max_length=24)
	status = models.CharField(default='open', choices=status_choices, max_length=12)
	claimed_by = models.ForeignKey(User, null=True, on_delete=None, related_name="code_reviews_claimed")
	created = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['-created']

