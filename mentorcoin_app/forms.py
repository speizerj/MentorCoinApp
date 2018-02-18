from django import forms
from . import models
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.core.validators import RegexValidator, FileExtensionValidator
from django.db.models import Q
from django.contrib.auth.models import User


class CodeReviewCreateForm(forms.ModelForm):

	amount = forms.FloatField(label="Amount (ETH)", min_value=.001)
	pr_url = forms.URLField(label="Pull Request URL")
	pr_title = forms.CharField(label="Pull Request Title")

	class Meta:
		model = models.CodeReview
		fields = "__all__"
		exclude = ['submitted_by', 'claimed_by', 'status']


class CodeReviewFulfillForm(forms.Form):
	description = forms.CharField(max_length=500, widget=forms.Textarea(attrs={'rows': 5}))