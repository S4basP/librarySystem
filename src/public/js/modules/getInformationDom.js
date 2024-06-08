

//el'ement dom page customer 
import{
    inpName,
    inpDate_Birth,
    inpAddress,
    inpEmail,

} from './elementsDom.js';

export const getInformtionCustomer = (


) => {
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