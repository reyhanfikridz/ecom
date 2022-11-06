from django.urls import path

from account.views import login_view, register_view


app_name = 'account'

urlpatterns = [
    path('login/', login_view.LoginView.as_view(),
        name='login'),
    path('register/', register_view.RegisterView.as_view(),
        name='register'),
]
