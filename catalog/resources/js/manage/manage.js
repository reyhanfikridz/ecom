/*
Class for catalog manage process
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class CatalogManage
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      // if product form detected, add event listener for product form submit button
      let form = document.querySelector('#product_form');
      if (form) {
        this.bindSubmitBtn(form);
      }
    });
  }

  // Bind submit button method
  bindSubmitBtn(form)
  {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let serviceUrl = `${PRODUCT_SERVICE_URL}/api/product/`;
    let serviceMethod = `POST`;
    let serviceSuccessStatus = 201;
    let serviceSuccessMessage = "Product Successfully Added To Catalog!";
    if (urlParams.get('sku')) {
      serviceUrl += `?sku=${urlParams.get('sku')}`;
      serviceMethod = `PUT`;
      serviceSuccessStatus = 200;
      serviceSuccessMessage = "Product Successfully Updated!";
    }

    form.addEventListener('submit', ()=>{
      Loader.showBodyLoader();
      let formData = new FormData(form);

      fetch(serviceUrl, {
        headers: {
          'Authorization': "Bearer " + Cookies.get("sessiontoken"),
        },
        method: serviceMethod,
        body: formData
      }).then( async (response) => {
        let data = await response.json();

        if(response.status == serviceSuccessStatus){
          alert(serviceSuccessMessage);
          window.location.href = "/catalog/table/";
        }else{
          alert(data["message"])
          Loader.hideBodyLoader();
        }

      }).catch((error) => {
        if(!error.response){
          alert('Check Your Internet Connection! \n\n' + error)
          Loader.hideBodyLoader();
        };
      });

    });
  }
}

let catalogManage = new CatalogManage();
catalogManage.init();
