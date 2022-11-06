"""
middleware for authorization each page
"""
import logging
import traceback

from django.urls import reverse_lazy
from django.shortcuts import redirect

from core.helpers.access_helper import AccessHelper


class AuthorizationMiddleware(object):
    """
    Class Authorization Middleware
    """
    def __init__(self, get_response):
        """
        initialization middleware
        """
        self.get_response = get_response

    def __call__(self, request):
        """
        function upon call the view
        either before or after view are called
        """

        return self.get_response(request)

    def process_view(self, request, view_func, view_args, view_kwargs):
        """
        See middleware process_view hook documentation
        https://docs.djangoproject.com/en/3.2/topics/http/middleware/
        """
        if 'view_class' in view_func.__dict__:
            access_helper = AccessHelper()
            user = access_helper.authorize(request)

            if 'is_account' in view_func.view_class.__dict__ \
                and user \
                and 'role' in user:

                if user['role'] == 'buyer':
                    return redirect(reverse_lazy('catalog:list'))
                elif user['role'] == 'seller':
                    return redirect(reverse_lazy('catalog:table'))
                return redirect(reverse_lazy('order:list'))

            elif 'role_can_access' in view_func.view_class.__dict__:
                if not user \
                    or 'role' not in user \
                    or user['role'] \
                        not in view_func.view_class.role_can_access:
                    return redirect(reverse_lazy('account:login'))

                request.user = user

        return
