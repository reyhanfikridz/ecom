# ecom

### ECOM summary:
ECOM is a simple E-Commerce website builded with Go backend microservices and Django frontend. Disclaimer! I have zero real experience in building E-Commerce system, so if the system is really bad, I apologized in advance. This is just my personal project using Go microservices. You can use all the code of this project as a template for real E-Commerce in the future if you like it. Disclaimer again! I also not a frontend specialist, so I just use a free template I found in the internet and an original bootstrap template.

### Repository summary:
This is a frontend server for ECOM.

### Requirements:
1. python (recommended: v3.9.10)
2. node (recommended: v14.17.5)
3. npm (recommended: v6.14.14)

### Server requirements:
1. ecom-account-service (recommended: https://github.com/reyhanfikridz/ecom-account-service/tree/release-1)
2. ecom-product-service (recommended: https://github.com/reyhanfikridz/ecom-product-service/tree/release-1)
3. ecom-order-service (recommended: https://github.com/reyhanfikridz/ecom-order-service/tree/release-1)

### Steps to run the server:
1. install all requirements
2. install and run all server requirements
3. clone repository
4. create python virtual environment with `python -m venv <environment desired name>` at same level directory of repository
5. use the python virtual environment with `source <environment desired name>/Scripts/activate` (windows) or `source <environment desired name>/bin/activate` (linux) at same level directory of repository
6. install required python library with `pip install -r requirements.txt` at repository root directory (same level as README.md)
7. install required javascript library with `npm install` then `npm run watch` then `python manage.py collectstatic` at repository root directory (same level as README.md)
8. create file config.py at directory ecom/core/ with contents:

```
ACCOUNT_SERVICE_URL = '<account service url, example http://127.0.0.1:8010>'
PRODUCT_SERVICE_URL = '<product service url, example http://127.0.0.1:8020>'
ORDER_SERVICE_URL = '<order service url, example http://127.0.0.1:8030>'
```

8. run server with `python manage.py runserver <this server url, example http://127.0.0.1:8000>`
