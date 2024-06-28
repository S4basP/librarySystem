import { RequestHandler } from "express";
import { generateId } from "../../typesForData/ids";
import {
  CustomerRegister,
  Books,
  loan_Book,
  Administrator,
} from "../../typesForData/typeData";
import { addAdminToDataBases, compareAdmin, getIdAdministrator } from '../function_Admin/f.addedAdmin'
import { addCustomerDataBase } from "../function_Admin/f.addCustomer";
import { addBookDataBases } from "../function_Admin/f.addBooks";
import { addLoanDataBase } from "../function_Admin/f.addLoan";
import { showBooksDataBase } from "../function_Admin/seeData";
import { cookieExpire } from "../config/config";
import {DateTime} from 'luxon';
import { getLoan_Price } from "../querys/querysAdmin";


let data; 


export const createAdministrator: RequestHandler = async (req, res) => {
  let { name, age, schedule, password } = req.body;
  let newAdministrator: Administrator = {
    id_Adminitrator: generateId(),
    name: name,
    age: age,
    schedule: schedule,
    password: password,
  };
  data = await addAdminToDataBases(newAdministrator);

  return res.status(data.status).send(data);
};

export const createCustomer: RequestHandler = async (req, res) => {
  let { name, date_Birth, address, email, registration_Date } = req.body;
  let newCustomer: CustomerRegister = {
    id_Customer: generateId(),
    name: name,
    date_Birth: date_Birth,
    address: address,
    email: email,
    registration_Date: registration_Date,
  };
  data = await addCustomerDataBase(newCustomer);


  return res.status(data.status).send(data);
};

export const createBooks: RequestHandler = async (req, res) => {
  const { name, publication_Date, author, editorial, loan_priece } = req.body;
  let newBook: Books = {
    id_Books: generateId(),
    name: name,
    publication_Date: publication_Date,
    author: author,
    editorial: editorial,
    aviable: true,
    loan_price: loan_priece,
  };
   let data = await addBookDataBases(newBook);
   return res.status(data.status).send(data);
};

export const loanBook: RequestHandler = async (req, res) => {
  let {token} = req.cookies; 
  const {
    id_Books,
    id_Customer,
    delivery_Date,
    loan_Date,
    loan_delay_cost,
  } = req.body;

  const newLoan: loan_Book = {
    id_Loan: generateId(),
    id_Books: id_Books,
    id_Customer: id_Customer,
    id_Administrator: getIdAdministrator(token),
    delivery_Date: delivery_Date,
    loan_Date: loan_Date,
    loan_Payment: await getLoan_Price(id_Books),
    loan_delay_cost: loan_delay_cost,
  };

  console.log(newLoan)

 let data = await addLoanDataBase(newLoan);
 return res.status(data.status).send(data);

};


export const loginAutenticationAdmin: RequestHandler = async ( req, res ) => {
  const { name, password } = req.body;
  data = await compareAdmin( name, password );

  if(!data.user_Found){
    return res.status(data.status).send({
       status: data.status,
       status_Server: data.status_Server,
       user_Found: data.user_Found

    })
  } else {
    return res
    .status( data.status )
    .cookie("token", data.token, {expires: cookieExpire})
    .send({
      status: data.status,
      status_Server: data.status_Server,
      user_Found: data.user_Found,
 
    })
  }
 
  
  }
 
export const showBooks: RequestHandler = async ( req , res ) => {
  data = await showBooksDataBase();
  console.log(data);
  return res.status(data.status).send(data);
}




