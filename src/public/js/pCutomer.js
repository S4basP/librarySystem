import { getInformtionCustomer } from "./modules/getInformationDom.js";
import { cCustomer } from "./modules/modCleanInputs.js";
import { addCustomer } from "./modules/petions.js";





const btnSend = document.getElementById('button-send');
const btnContainerModal = document.getElementById('button-modal');

let customer;

btnSend.addEventListener('click', () => {
    customer = getInformtionCustomer();
    addCustomer(customer);
    cCustomer();
});


btnContainerModal.addEventListener('click', () => {
    window.location.href = '/home';
});
