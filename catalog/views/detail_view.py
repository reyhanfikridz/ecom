"""
Detail view
"""
import requests

from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy

from core.settings import PRODUCT_SERVICE_URL


class DetailView(View):
    """
    Class Detail view
    """
    role_can_access = ['buyer'] # role that can access this view

    def get(self, request):
        """
        get method
        """
        # check sku exist in request GET or not
        if 'sku' not in request.GET \
            or request.GET['sku'].strip() == '':
            return redirect(reverse_lazy('account:login'))

        # initialize context
        context = {
            'data': [],
        }

        # get data
        if 'sku' in request.GET:
            product_detail, resp_message, redirect_url \
                = self.get_product_detail(request)
            if redirect_url:
                return redirect(redirect_url)
            elif resp_message:
                context['message'] = resp_message
            else:
                context['data'] = product_detail

        # render page
        return render(request, 'catalog/detail/detail.html', context)

    def get_product_detail(self, request):
        """
        get product detail
        """
        url = f'{PRODUCT_SERVICE_URL}/api/product/'
        headers = {
            "Authorization": "Bearer " + request.COOKIES.get('sessiontoken')
        }
        params = {
            "sku": request.GET['sku']
        }

        r = requests.get(url, headers=headers, params=params)
        if r.status_code != 200:
            return None, None, reverse_lazy('account:login')

        data = r.json()
        return data, None, None
