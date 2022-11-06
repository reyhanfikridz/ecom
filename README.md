# ecom

Requirements:
1. python (recommended: v3.9.10)
2. node (recommended: v14.17.5)
3. npm (recommended: v6.14.14)
4. ecom-account-service (recommended: https://github.com/reyhanfikridz/ecom-account-service/tree/release-1)
5. ecom-product-service (recommended: https://github.com/reyhanfikridz/ecom-product-service/tree/release-1)
6. ecom-order-service (recommended: https://github.com/reyhanfikridz/ecom-order-service/tree/release-1)

Steps to run the program:
1. install all requirements
2. clone repository
3. create python virtual environment with `python -m venv <environment desired name>` at same level directory of repository
4. use the python virtual environment with `source <environment desired name>/Scripts/activate` (windows) or `source <environment desired name>/bin/activate` (linux) at same level directory of repository
5. install required python library with `pip install -r requirements.txt` at repository root directory (same level as README.md)
6. install required javascript library with `npm install` then `npm run watch` then `python manage.py collectstatic` at repository root directory (same level as README.md)
7. create file config.py at directory ecom/core/ with contents:

```
ACCOUNT_SERVICE_URL = '<account service desired url, example http://127.0.0.1:8010>'
PRODUCT_SERVICE_URL = '<product service desired url, example http://127.0.0.1:8020>'
ORDER_SERVICE_URL = '<order service desired url, example http://127.0.0.1:8030>'
```

8. run program with `python manage.py runserver <desired url, example http://127.0.0.1:8000>`
