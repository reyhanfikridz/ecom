"""
Login view
"""
from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy


class LoginView(View):
    """
    Class login view
    """
    is_account = True # flag for exclude login authorization

    def get(self, request):
        """
        get method
        """
        # render page
        return render(request, 'account/login/login.html')
