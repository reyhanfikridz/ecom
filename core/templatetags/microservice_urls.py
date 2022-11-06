"""
Templatetags for get microservice urls
"""
from django import template

from core.settings import ACCOUNT_SERVICE_URL, ORDER_SERVICE_URL, \
     PRODUCT_SERVICE_URL


register = template.Library()


# get account service base url
@register.simple_tag
def get_account_service_url():
    return ACCOUNT_SERVICE_URL

# get order service base url
@register.simple_tag
def get_order_service_url():
    return ORDER_SERVICE_URL

# get product service base url
@register.simple_tag
def get_product_service_url():
    return PRODUCT_SERVICE_URL
