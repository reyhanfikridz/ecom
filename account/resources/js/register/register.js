/*
Class for register process
*/
import Loader from '../../../../core/resources/js/loader/loader.js';


class Register
{
  // Init method
  init()
  {
    document.addEventListener('DOMContentLoaded', () => {
      // if register form detected, add event listener for register submit button
      let form = document.querySelector('#register_form');
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

      if (formData.get('password') != formData.get('confirm_password')) {
        alert("Confirm password invalid");
        Loader.hideBodyLoader();
      } else {
        fetch(`${ACCOUNT_SERVICE_URL}/api/register/`, {
          method: 'POST',
          body: formData
        }).then( async (response) => {
          let data = await response.json();

          alert(data["message"])
          if(response.status == 200){
            window.location.href = formData.get('login_url');
          }else{
            Loader.hideBodyLoader();
          }

        }).catch((error) => {
          if(!error.response){
            alert('Check Your Internet Connection! \n\n' + error)
            Loader.hideBodyLoader();
          };
        });
      }

    });
  }
}

let register = new Register();
register.init();
