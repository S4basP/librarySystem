
import { modalContainer } from "./elementsDom.js";

export const  getBooks =  async () => {
    let {data}= await axios({
        method: 'get',
        url: 'http://localhost:3000/showBooks',
    });
    let dataGetBooks = await data.rows;
    return dataGetBooks;
}



export const addCustomer = async ( customer )  => {
    let {data} = await axios({
        method: 'post',
        url: 'http://localhost:3000/createNewCustomer',
        data: {
            name: customer.name,
            date_Birth: customer.date_Birth,
            address: customer.address,
            email: customer.email,
            registration_Date: customer.registration_Date
        }
    })

    if(data.status_Server ===  'ok'){
        modalContainer.style.display = 'block';
    }

}



export const addBook = async ( book ) => {

    let {data} = await axios( {
        method: 'post',
        url: 'http://localhost:3000/createNewBooks',
        data: {
            name: book.name,
            publication_Date: book.publication_Date, 
            author: book.author,
            editorial: book.editorial,
            loan_priece: book.loan_priece
          }
    } );

    if(data.status_Server ===  'ok'){
        modalContainer.style.display = 'block';
    }

};



export const addLoan = async ( loan )  => {
    let { data } = await axios ({
        method: 'post',
        url: 'http://localhost:3000/loanBook',
        data: {
            id_Books: loan.id_Books,
            id_Customer: loan.id_Customer,
            delivery_Date: loan.delivery_Date,
            loan_Date: loan.loan_Date,
            loan_delay_cost: loan.loan_delay_cost 
        }
    });
}