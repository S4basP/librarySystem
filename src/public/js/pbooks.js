import { getInformtionBook } from "./modules/getInformationDom.js";
import { cBooks } from "./modules/modCleanInputs.js";
import { addBook } from './modules/petions.js';
const button = document.getElementById('button-send');
const buttonContainerModal = document.getElementById('button-modal');



button.addEventListener('click', (  ) => {
    const book =  getInformtionBook();
    console.log(book);
    addBook(book);
    cBooks(); 
} );


buttonContainerModal.addEventListener('click', () => {
    window.location.href = '/home';
});


buttonContainerModal.addEventListener('click', () => {
    window.location.href = '/home';
});


