/*
Class for login process
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class Login
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      // if login form detected, add event listener for login submit button
      let form = document.querySelector('#login_form');
      if (form) {
        this.bindSubmitBtn(form);
      }
    });
  }

  // Bind submit button method
  bindSubmitBtn(form)
  {
    form.addEventListener('submit', ()=>{
      Loader.showBodyLoader();
      let formData = new FormData(form);

      fetch(`${ACCOUNT_SERVICE_URL}/api/login/`, {
        method: 'POST',
        body: formData
      }).then( async (response) => {
        let data = await response.json();

        if(response.status == 200){
          document.cookie = `sessiontoken=${data['token']};path=/`;

          if (data['role'] == 'buyer') {
            window.location.href = formData.get('catalog_list_url');
          } else {
            window.location.href = formData.get('catalog_table_url');
          }
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

let login = new Login();
login.init();
