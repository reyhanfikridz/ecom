"""
Helper for handling access to account app page
"""
import requests

from core.settings import ACCOUNT_SERVICE_URL


class AccessHelper:
    """
    Class Access Helper
    """
    def authorize(self, request):
        """
        authorize user and return data user
        """
        url = f'{ACCOUNT_SERVICE_URL}/api/authorize/'
        data = {
            'token': request.COOKIES.get('sessiontoken'),
        }

        r = requests.post(url, data=data)
        if r.status_code != 200:
            return None

        data = r.json()
        return data
