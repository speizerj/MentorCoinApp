from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    path('accounts/', include('allauth.urls')),
    path('', views.main, name="main"),
    path('code-review/create/', views.code_review_create, name="code_review_create"),
    path('code-review/detail/<int:pk>', views.CodeReviewDetail.as_view(), name="code_review_detail"),
    path('code-review/list', views.CodeReviewList.as_view(), name="code_review_list"),
    path('code-review/<int:pk>/claim', views.claim_code_review, name="claim_code_review"),
    path('code-review/<int:pk>/unclaim', views.unclaim_code_review, name="unclaim_code_review"),
    path('code-review/<int:pk>/fulfill', views.fulfill_code_review, name="fulfill_code_review")
    ]