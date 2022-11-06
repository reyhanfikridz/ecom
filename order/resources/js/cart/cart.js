/*
Class for cart page
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class Cart
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindOrderBtn();
    });
  }

  bindOrderBtn()
  {
    let forms = document.querySelectorAll(".form_order");

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
              alert("Product ordered!");
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

let cart = new Cart();
cart.init();
