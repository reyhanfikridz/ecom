/*
Class for seller order list page
*/
import Loader from '../../../../../core/resources/js/loader/loader.js';


class List
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindSendOrderBtn();
    });
  }

  // bind send order btn
  //
  // send order include decrease stock on product data
  bindSendOrderBtn()
  {
    let forms = document.querySelectorAll(".form_send_order");

    if (forms) {
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", ()=>{
          let formDataSend = new FormData(forms[i]);
          let formDataDecreaseStock = new FormData(forms[i]);

          let url = `${ORDER_SERVICE_URL}/api/order/?order_number=${formDataSend.get('order_number')}`;
          formDataSend.delete('order_number');
          formDataSend.delete('qty');
          formDataSend.delete('product_sku');

          fetch(url, {
            headers: {
              'Authorization': "Bearer " + Cookies.get("sessiontoken"),
            },
            method: "PUT",
            body: formDataSend
          }).then( async (response) => {
            let data = await response.json();

            if(response.status == 200){
              let url = `${PRODUCT_SERVICE_URL}/api/product/decrease/stock/`
                + `?sku=${formDataDecreaseStock.get('product_sku')}`;
                formDataDecreaseStock.delete('order_number');
                formDataDecreaseStock.delete('status');
                formDataDecreaseStock.delete('product_sku');

              fetch(url, {
                headers: {
                  'Authorization': "Bearer " + Cookies.get("sessiontoken"),
                },
                method: "PUT",
                body: formDataDecreaseStock
              }).then( async (response) => {
                let data = await response.json();

                if(response.status == 200){
                  alert("Order is on the way to buyer!")
                  window.location.href = "/order/";
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
  }

}

let list = new List();
list.init();
