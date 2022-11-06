"""
Table view
"""
import requests

from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy

from core.settings import PRODUCT_SERVICE_URL


class TableView(View):
    """
    Class Table view
    """
    role_can_access = ['seller'] # role that can access this view

    def get(self, request):
        """
        get method
        """
        # initialize context
        context = {
            'data': [],
        }

        # get data
        product_list, resp_message, redirect_url \
            = self.get_product_list(request)
        if redirect_url:
            return redirect(redirect_url)
        elif resp_message:
            context['message'] = resp_message
        else:
            context['data'] = product_list

        # render page
        return render(request, 'catalog/table/table.html', context)

    def get_product_list(self, request):
        """
        get product list for seller
        """
        url = f'{PRODUCT_SERVICE_URL}/api/products/user/'
        headers = {
            "Authorization": "Bearer " + request.COOKIES.get('sessiontoken')
        }

        r = requests.get(url, headers=headers)
        if r.status_code == 403:
            return None, None, reverse_lazy('account:login')
        elif r.status_code == 500:
            return None, r.json().get('message'), None

        data = r.json()
        return data, None, None
