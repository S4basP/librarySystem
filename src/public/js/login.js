import { cLogin } from "./modules/modCleanInputs.js";




const inpName = document.getElementById('email');
const inpPass = document.getElementById('pass');
const btnLogin = document.getElementById('btnLogin');
const message = document.getElementById('message');






btnLogin.addEventListener('click', async (e) => {
 e.preventDefault();

 


 let {data} = await axios({
    method: 'post',
    url: `http://localhost:3000/login`,
    data: {
        name: inpName.value,
        password: inpPass.value
    }

 });
   if(!data.user_Found){
    message.style.display = "block";
   } else  {
      console.log(inpName.value)
      window.location.href = `/home`; 
   } 

   cLogin(inpName, inpPass);
});