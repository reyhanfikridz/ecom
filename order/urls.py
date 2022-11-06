from django.urls import path

from order.views import cart_view, list_view


app_name = 'order'

urlpatterns = [
    path('', list_view.ListView.as_view(),
        name='list'),
    path('cart/', cart_view.CartView.as_view(),
        name='cart'),
]
