/*
Class for staff order list page
*/
import Loader from '../../../../../core/resources/js/loader/loader.js';


class List
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindValidatePaymentBtn();
    });
  }

  // Bind validate payment button
  bindValidatePaymentBtn()
  {
    let forms = document.querySelectorAll(".form_validate_payment_order");

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
              alert("Buyer payment validated! Seller can now process the items")
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
