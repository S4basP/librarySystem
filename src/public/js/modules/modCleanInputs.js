



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

import {
    inp_idBook,
    inp_DDelivery,
    inp_IdCustomer,
    inp_loanDelayCost
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


export function cLoanBooks () {
    inp_idBook.value = '';
    inp_DDelivery.value = '';
    inp_IdCustomer.value = '';
    inp_loanDelayCost.value = '';

}