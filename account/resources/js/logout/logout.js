/*
Class for logout process
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class Logout
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      // if logout form detected, add event listener for logout submit button
      let form = document.querySelector('#logout_form');
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
      formData.append('token', Cookies.get('sessiontoken'))

      fetch(`${ACCOUNT_SERVICE_URL}/api/logout/`, {
        method: 'POST',
        body: formData
      }).then( async (response) => {
        let data = await response.json();

        if(response.status == 200){
          document.cookie = "sessiontoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = formData.get('login_url');
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

let logout = new Logout();
logout.init();
