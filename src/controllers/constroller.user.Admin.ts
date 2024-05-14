import { RequestHandler } from "express";
import { poolAdministrator } from "../db/db";
import { generateId } from "../typesForData/ids";
import { CustomerRegister, Books, loan_Book } from "../typesForData/typeData";

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

  try {
    if (!name || !date_Birth || !address || !email || !registration_Date) {
      return res.status(404).send({
        status: "error",
        message: "empy data",
      });
    } else {
      await poolAdministrator.query(
        "insert into customer (id_Customer, name, date_Birth, address, email, registration_Date) value (?, ?, ?, ?, ?, ?)",
        [
          newCustomer.id_Customer,
          newCustomer.name,
          newCustomer.date_Birth,
          newCustomer.address,
          newCustomer.email,
          newCustomer.registration_Date,
        ]
      );

      return res.status(200).send({
        status: "ok",
        message: "new customer added",
        newCustomer,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message_Server: "Error to connect database",
      error,
    });
  }
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
  try {
    if (!name || !publication_Date || !author || !editorial || !loan_priece) {
      return res.status(404).send({
        status: "Error",
        message: "Data empty",
      });
    } else {
      await poolAdministrator.query(
        "insert into books ( id_Books, name, publication_Date, author, editorial, aviable, loan_price ) values (?,?,?,?,?,?,?);",
        [
          newBook.id_Books,
          newBook.name,
          newBook.publication_Date,
          newBook.author,
          newBook.editorial,
          newBook.aviable,
          newBook.loan_price,
        ]
      );
      return res.status(200).send({
        status: "ok",
        message: "book added",
        newBook,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message_Server: "Error of connection",
      error,
    });
  }
};

export const loanBook: RequestHandler = async (req, res) => {
  const {
    
    id_Books,
    id_Customer,
    id_Administartor: id_Administrator,
    delivery_Date,
    loan_Date,
    loan_Payment,
    loan_delay_cost
  } = req.body;

  const newLoan: loan_Book = {
    id_Loan: generateId(),
    id_Books: id_Books,
    id_Customer: id_Customer,
    id_Administrator: id_Administrator,
    delivery_Date: delivery_Date,
    loan_Date: loan_Date,
    loan_Payment: loan_Payment,
    loan_delay_cost: loan_delay_cost
  };

  try {
    if( !id_Books || !id_Customer || !id_Administrator || !delivery_Date ||!loan_Date || !loan_Payment || !loan_delay_cost ){
        return res.status(404).send({
            status: "error_Data_empty",
            message:"Error data empy!!!"
        });
    } else {
        await poolAdministrator.query('insert into loan ( id_Loan, id_Books, id_Customer, id_Administrator, delivery_Date,loan_Date, loan_Payment, loan_delay_cost ) values ( ?, ?, ?, ?, ?, ?, ?, ? )', [
            newLoan.id_Loan,
            newLoan.id_Books,
            newLoan.id_Customer,
            newLoan.id_Administrator,
            newLoan.delivery_Date,
            newLoan.loan_Date,
            newLoan.loan_Payment,
            newLoan.loan_delay_cost
        ]);
        console.log(newLoan);        
        return res.status(200).send({
            status: "ok",
            message: "loan accepted"
        })
    }
  } catch (error) {

    return res.status(500).send({
        status: "Error_connection_Databases",
        error
    })
    
  }
};
