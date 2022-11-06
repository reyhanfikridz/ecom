/*
Class for product detail page
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class Detail
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindQtyInput();
      this.bindAddToCartBtn();
    });
  }

  // Bind qty input
  bindQtyInput()
  {
    let inputQty = document.querySelector("#input-qty");
    let inputProductPrice = document.querySelector("#input-product-price");
    let inputTotalPrice = document.querySelector("#input-total-price");
    let displayTotalPrice = document.querySelector("#display-total-price");
    if (inputQty && inputProductPrice && inputTotalPrice && displayTotalPrice) {
      inputQty.addEventListener("change", (e)=>{
        let qty = parseInt(e.target.value);
        let price = parseFloat(inputProductPrice.value);
        inputTotalPrice.value = this.calculateTotalPrice(qty, price);
        displayTotalPrice.innerHTML = this.toRupiah(inputTotalPrice.value);
      })
    }
  }

  // Calculate total price
  calculateTotalPrice(qty, price)
  {
    return qty * price;
  }

  // Convert to rupiah
  toRupiah(bilangan)
  {
    let number_string = bilangan.toString(),
      split = number_string.split('.'),
      remainder  = split[0].length % 3,
      rupiah  = split[0].substr(0, remainder),
      thousand  = split[0].substr(remainder).match(/\d{1,3}/gi);

    if (thousand) {
      let separator = remainder ? ',' : '';
      rupiah += separator + thousand.join(',');
    }
    rupiah = split[1] != undefined ? rupiah + '.' + split[1] : rupiah;
    rupiah = 'Rp' + rupiah

    return rupiah
  }

  // Bind add to cart button
  bindAddToCartBtn()
  {
    let form = document.querySelector("#form_add_to_cart");
    let url = `${ORDER_SERVICE_URL}/api/order/`;
    if (form) {
      form.addEventListener("submit", ()=>{
        let formData = new FormData(form);
        formData.append("status", "in-cart");

        let tmp_imgs = document.getElementsByName("product_images_path");
        let imgs = [];
        for (let i = 0; i < tmp_imgs.length; i++) {
          imgs.push(tmp_imgs[i].value);
        }
        formData.append("product_images_path[]", imgs);

        fetch(url, {
          headers: {
            'Authorization': "Bearer " + Cookies.get("sessiontoken"),
          },
          method: "POST",
          body: formData
        }).then( async (response) => {
          let data = await response.json();

          if(response.status == 201){
            alert("Order saved in cart!");
            window.location.href = "/order/cart/";
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

      })
    }
  }

}

let detail = new Detail();
detail.init();
