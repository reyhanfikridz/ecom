/*
Class for buyer order list page
*/
import Loader from '../../../../../core/resources/js/loader/loader.js';


class List
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindConfirmPaymentBtn();
      this.bindCancelOrderBtn();
      this.bindOrderReceivedBtn();
    });
  }

  // Bind confirm payment button
  bindConfirmPaymentBtn()
  {
    let forms = document.querySelectorAll(".form_confirm_payment_order");

    if (forms) {
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", ()=>{
          let formData = new FormData(forms[i]);
          let url = `${ORDER_SERVICE_URL}/api/order/?order_number=${formData.get('order_number')}`;
          formData.delete('order_number');

          fetch(url, {
            headers: {
              'Authorization': "Bearer " + Cookies.get("sessiontoken"),
            },
            method: "PUT",
            body: formData
          }).then( async (response) => {
            let data = await response.json();

            if(response.status == 200){
              alert("Payment confirmed!")
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
        });
      }

    }
  }

  // Bind cancel order button
  bindCancelOrderBtn()
  {
    let forms = document.querySelectorAll(".form_cancel_order");

    if (forms) {
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", ()=>{
          let formData = new FormData(forms[i]);
          let url = `${ORDER_SERVICE_URL}/api/order/?order_number=${formData.get('order_number')}`;
          formData.delete('order_number');

          fetch(url, {
            headers: {
              'Authorization': "Bearer " + Cookies.get("sessiontoken"),
            },
            method: "DELETE",
            body: formData
          }).then( async (response) => {
            let data = await response.json();

            if(response.status == 200){
              alert("Order cancelled!")
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
        });
      }

    }
  }

  bindOrderReceivedBtn()
  {
    let forms = document.querySelectorAll(".form_order_received");

    if (forms) {
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", ()=>{
          let formData = new FormData(forms[i]);
          let url = `${ORDER_SERVICE_URL}/api/order/?order_number=${formData.get('order_number')}`;
          formData.delete('order_number');

          fetch(url, {
            headers: {
              'Authorization': "Bearer " + Cookies.get("sessiontoken"),
            },
            method: "PUT",
            body: formData
          }).then( async (response) => {
            let data = await response.json();

            if(response.status == 200){
              alert("Order received! Thank you for shopping at ECOM!");
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
        });
      }

    }
  }

}

let list = new List();
list.init();
