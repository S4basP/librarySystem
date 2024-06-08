
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