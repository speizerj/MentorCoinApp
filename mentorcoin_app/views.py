from django.views import View
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView
from django.urls import reverse_lazy
from django.shortcuts import redirect, render, get_object_or_404
from django.http.response import HttpResponse, JsonResponse, HttpResponseNotFound
from django.contrib.auth.decorators import user_passes_test, login_required
from django.contrib import messages

from . import models, forms

@login_required
def code_review_create(request):

    if request.method == 'POST':
        form = forms.CodeReviewCreateForm(request.POST)

        code_review = models.CodeReview(
            pr_title=request.POST['pr_title'],
            pr_url = request.POST['pr_url'],
            submitted_by = request.user,
            notification_email = request.POST['notification_email'],
            full_name = request.POST['full_name'],
            amount = request.POST['amount'],
            description = request.POST['description'],
            keywords = request.POST['keywords'],
            expires = request.POST['expires'],
            experience_level = request.POST['experience_level'],
            project_length = request.POST['project_length'],
            status='open'
        )
        code_review.save()

        messages.add_message(
                request,
                messages.SUCCESS,
                'Code Review Request successfully created!'
            )

        return redirect(reverse_lazy('code_review_list'))

    else:
        form = forms.CodeReviewCreateForm()


    return render(
        request,
        'code_review_form.html',
        {
            'form': form
        }
    ) 


@login_required
def claim_code_review(request, pk):
    code_review = get_object_or_404(models.CodeReview, pk=pk)

    if code_review.status != 'open' or code_review.claimed_by:
        messages.add_message(
                request,
                messages.ERROR,
                'This Code Review Request has already been claimed or closed.'
            )
    else:
        code_review.status = 'claimed'
        code_review.claimed_by = request.user
        code_review.save()

        messages.add_message(
                request,
                messages.SUCCESS,
                'Code Review Request successfully claimed!'
            )


    return redirect(reverse_lazy('code_review_list'))


@login_required
def unclaim_code_review(request, pk):
    code_review = get_object_or_404(models.CodeReview, pk=pk)

    if code_review.status == 'open' or code_review.claimed_by != request.user:
        messages.add_message(
                request,
                messages.ERROR,
                "You can't unclaim this Code Review Request."
            )
    else:
        code_review.status = 'open'
        code_review.claimed_by = None
        code_review.save()

        messages.add_message(
                request,
                messages.SUCCESS,
                'Code Review Request successfully unclaimed.'
            )

    
    return redirect(reverse_lazy('code_review_list'))


@login_required
def fulfill_code_review(request, pk):
    code_review = get_object_or_404(models.CodeReview, pk=pk)

    if request.method == 'POST':
        form = forms.CodeReviewFulfillForm(request.POST)

        code_review.status = 'fulfilled'
        code_review.save()

        messages.add_message(
                request,
                messages.SUCCESS,
                'Code Review Request successfully fulfilled! Once the submitter accepts it, the bounty will be paid.'
            )

        return redirect(reverse_lazy('code_review_list'))

    else:
        form = forms.CodeReviewFulfillForm()


    return render(
        request,
        'code_review_fulfill_form.html',
        {
            'form': form,
            'code_review': code_review
        }
    ) 

class CodeReviewDetail(DetailView):
    model = models.CodeReview
    template_name = 'code_review_detail.html'


class CodeReviewList(ListView):
    model = models.CodeReview
    template_name = 'code_review_list.html'

    def total_number_open(self):
        code_reviews = models.CodeReview.objects.filter(status='open')
        return len(code_reviews)
    
    def total_amount_open(self):
        code_reviews = models.CodeReview.objects.filter(status='open')
        total_amount = 0
        for cr in code_reviews:
            total_amount += cr.amount

        return total_amount

    def total_number_claimed(self):
        code_reviews = models.CodeReview.objects.filter(status='claimed')
        return len(code_reviews)
    
    def total_amount_claimed(self):
        code_reviews = models.CodeReview.objects.filter(status='claimed')
        total_amount = 0
        for cr in code_reviews:
            total_amount += cr.amount

        return total_amount

def main(request):

    return render(
        request,
        'main.html',
        {'bodyClass': 'home'}
        )






