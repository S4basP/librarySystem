



//Element dom page customer
import{
      inpName,
      inpDate_Birth,
      inpAddress,
      inpEmail,

} from './elementsDom.js';

import {
    inpNameBook,
    inpPubDateBook,
    inpAuthorBook,
    inpEditorialBook,
    inpLoanPrieceBook,

} from './elementsDom.js';


export const cLogin = ( name, password ) => {
    name.value = '';
    password.value = '';
};


export const cCustomer = (  ) => {


        inpName.value = '';
        inpDate_Birth.value = '';
        inpAddress.value  = '';
        inpEmail.value = '';
    };




export const cBooks = () => {
    inpNameBook.value = "",
    inpPubDateBook.value = "",
    inpAuthorBook.value = "",
    inpEditorialBook.value = "",
    inpLoanPrieceBook.value = ""
}