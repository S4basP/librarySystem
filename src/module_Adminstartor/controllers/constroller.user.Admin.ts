import { RequestHandler } from "express";
import { generateId } from "../../typesForData/ids";
import {
  CustomerRegister,
  Books,
  loan_Book,
  Administrator,
} from "../../typesForData/typeData";
import { addAdminToDataBases, compareAdmin } from '../function_Admin/f.addedAdmin'
import { addCustomerDataBase } from "../function_Admin/f.addCustomer";
import { addBookDataBases } from "../function_Admin/f.addBooks";
import { addLoanDataBase } from "../function_Admin/f.addLoan";


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
  const {
    id_Books,
    id_Customer,
    id_Administartor: id_Administrator,
    delivery_Date,
    loan_Date,
    loan_Payment,
    loan_delay_cost,
  } = req.body;

  const newLoan: loan_Book = {
    id_Loan: generateId(),
    id_Books: id_Books,
    id_Customer: id_Customer,
    id_Administrator: id_Administrator,
    delivery_Date: delivery_Date,
    loan_Date: loan_Date,
    loan_Payment: loan_Payment,
    loan_delay_cost: loan_delay_cost,
  };

 let data = await addLoanDataBase(newLoan);
 return res.status(data.status).send(data);

};


export const loginAutenticationAdmin: RequestHandler = async ( req, res ) => {
  const { name, password } = req.body;
   data = await compareAdmin( name, password );
   return res.status(data.status).send(data);
  
  }
 


