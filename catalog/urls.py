from django.urls import path

from catalog.views import detail_view, list_view, manage_view, table_view


app_name = 'catalog'

urlpatterns = [
    # Buyer only page
    path('', list_view.ListView.as_view(),
        name='list'),
    path('detail/', detail_view.DetailView.as_view(),
        name='detail'),

    # Seller only page
    path('table/', table_view.TableView.as_view(),
        name='table'),
    path('manage/', manage_view.ManageView.as_view(),
        name='manage'),
]
