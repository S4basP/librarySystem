

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