"""
Order list view for buyer
"""
import requests

from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy

from core.settings import ORDER_SERVICE_URL


class ListView(View):
    """
    Class List View
    """
    role_can_access = ['buyer', 'seller', 'staff'] # role that can access this view

    def get(self, request):
        """
        get method
        """
        # initialize context
        context = {
            'order_list_active': 'active',
            'data': [],
        }

        # get data
        params = {}
        if request.user['role'] == 'buyer':
            params = {'buyer_id': request.user['id']}
        elif request.user['role'] == 'seller':
            params = {'product_user_id': request.user['id']}
        order_list, resp_message, redirect_url \
            = self.get_order_list(request, params)

        # check result get data
        if redirect_url:
            return redirect(redirect_url)
        elif resp_message:
            context['message'] = resp_message
        else:
            # exclude data with status in-cart
            filtered_order_list = []
            for item in order_list:
                if item['status'] == 'in-cart':
                    continue
                filtered_order_list.append(item)

            # add to context
            context['data'] = filtered_order_list

        # render page
        if request.user['role'] == 'buyer':
            return render(request, 'order/list/buyer/List.html', context)
        elif request.user['role'] == 'seller':
            return render(request, 'order/list/seller/list.html',
                context)
        return render(request, 'order/list/staff/List.html', context)

    def get_order_list(self, request, params={}):
        """
        get order list
        """
        url = f'{ORDER_SERVICE_URL}/api/orders/'
        headers = {
            "Authorization": "Bearer " + request.COOKIES.get('sessiontoken')
        }

        r = requests.get(url, headers=headers, params=params)
        if r.status_code == 403:
            return None, None, reverse_lazy('account:login')
        elif r.status_code == 500:
            return None, r.json().get('message'), None

        data = r.json()
        return data, None, None
