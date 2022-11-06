"""
Register view
"""
from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy


class RegisterView(View):
    """
    Class register view
    """
    is_account = True # flag for exclude login authorization

    def get(self, request):
        """
        get method
        """
        # render page
        return render(request, 'account/register/register.html')
