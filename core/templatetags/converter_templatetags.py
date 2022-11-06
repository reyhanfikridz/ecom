"""
Templatetags for converter collection global
"""
from django import template


register = template.Library()


@register.filter()
def convert_to_rupiah(value):
    return 'Rp{:,.2f}'.format(float(value if value else 0))
