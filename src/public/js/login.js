import { cLogin } from "./modules/modCleanInputs.js";




const inpName = document.getElementById('email');
const inpPass = document.getElementById('pass');
const btnLogin = document.getElementById('btnLogin');






btnLogin.addEventListener('click', async (e) => {
 e.preventDefault();
 let {data} = await axios({
    method: 'post',
    url: 'http://localhost:3000/login',
    data: {
        name: inpName.value,
        password: inpPass.value
    }

 });
 cLogin(inpName, inpPass);
   if(data.user_Found === true){
    window.location.href = data.redirect;
   } 
});