"""
Order cart view
"""
import requests

from django.shortcuts import redirect, render
from django.views import View
from django.urls import reverse_lazy

from order.views.list_view import ListView


class CartView(View):
    """
    Class Cart View
    """
    role_can_access = ['buyer'] # role that can access this view

    def get(self, request):
        """
        get method
        """
        # initialize context
        context = {
            'order_cart_active': 'active',
            'data': [],
        }

        # get data
        list_view = ListView()
        order_list, resp_message, redirect_url \
            = list_view.get_order_list(request, {
                'status': 'in-cart',
                'buyer_id': request.user['id']
            })
        if redirect_url:
            return redirect(redirect_url)
        elif resp_message:
            context['message'] = resp_message
        else:
            context['data'] = order_list

        # render page
        return render(request, 'order/cart/cart.html', context)
