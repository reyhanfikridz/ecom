/*
Class for catalog table delete product process
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class CatalogTableDelete
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      let modalBtns = document.querySelectorAll('.open-delete-modal-btn');
      let form = document.querySelector('#delete-product-form');

      // if open delete product modal button and delete product form detected,
      // bind event listener for the modal and delete product form submit button
      if (modalBtns && form) {
        this.bindOpenModal(modalBtns, form);
        this.bindSubmitBtn(form);
      }
    });
  }

  // Bind open delete modal button method
  bindOpenModal(modalBtns, form)
  {
    for (let i = 0; i < modalBtns.length; i++) {
      modalBtns[i].addEventListener('click', ()=>{
        form.setAttribute('load-sku', modalBtns[i].getAttribute('sku'));
      });
    }
  }

  // Bind submit button method
  bindSubmitBtn(form)
  {
    form.addEventListener('submit', ()=>{
      Loader.showBodyLoader();
      let formData = new FormData(form);

      fetch(`${PRODUCT_SERVICE_URL}/api/product/?sku=${form.getAttribute('load-sku')}`, {
        headers: {
          'Authorization': "Bearer " + Cookies.get("sessiontoken"),
        },
        method: 'DELETE',
      }).then( async (response) => {
        let data = await response.json();

        if(response.status == 200){
          alert("Product Successfully Deleted!");
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

let catalogTableDelete = new CatalogTableDelete();
catalogTableDelete.init();
