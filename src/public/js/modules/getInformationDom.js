

//element dom page customer 
import{
    inpName,
    inpDate_Birth,
    inpAddress,
    inpEmail,
 

} from './elementsDom.js';

//element page books 
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

export const getInformtionCustomer = () => {
    let date = new Date();
    const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
    return {
        name: inpName.value,
        date_Birth: inpDate_Birth.value,
        address: inpAddress.value,
        email: inpEmail.value,
        registration_Date: dateNow
    };

}




export const getInformtionBook = () => {
    return {
        
            name: inpNameBook.value,
            publication_Date: inpPubDateBook.value, 
            author: inpAuthorBook.value ,
            editorial: inpEditorialBook.value,
            loan_priece: inpLoanPrieceBook.value
          
    }
};


export const getInformationLoan = () => {
    let date = new Date();
    const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
    return {
        id_Books: inp_idBook.value,
        id_Customer: inp_IdCustomer.value,
        delivery_Date: inp_DDelivery.value,
        loan_Date: dateNow,
        loan_delay_cost: inp_loanDelayCost.value
    }
}