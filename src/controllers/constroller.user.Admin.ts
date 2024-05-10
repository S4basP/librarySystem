import { RequestHandler } from "express";
import { poolAdministrator } from "../db/db";
import { generateId } from "../typesForData/ids";
import { CustomerRegister, Books } from "../typesForData/typeData";

export const createCustomer:RequestHandler = async ( req , res ) => {
    let {name, date_Birth, address, email, registration_Date} = req.body;
    let newCustomer: CustomerRegister= {
        id_Customer: generateId() ,
        name: name,
        date_Birth: date_Birth,
        address: address,
        email: email,
        registration_Date: registration_Date
    } 
 
    try {

        if(!name || !date_Birth || !address || !email || !registration_Date ){

            return res.status(404).send({
                status: "error",
                message: "empy data"
            });
        }else {
            await poolAdministrator.query('insert into customer (id_Customer, name, date_Birth, address, email, registration_Date) value (?, ?, ?, ?, ?, ?)',[
            newCustomer.id_Customer,
            newCustomer.name,
            newCustomer.date_Birth,
            newCustomer.address,
            newCustomer.email,
            newCustomer.registration_Date
           ]);
 
           return res.status(200).send({
            status: "ok",
            message: "new customer added",
            newCustomer
            
           });
        }
     
    } catch( error ) {

        return res.status(500).send({
            status: "error",
            message_Server: "Error to connect database",
            error
        })

    }
};

export const createBooks:RequestHandler = async( req, res ) => {

    const { name, publication_Date, author, editorial, loan_priece } = req.body;
    let newBook:Books = {
        id_Books: generateId(),
        name: name, 
        publication_Date: publication_Date,
        author: author,
        editorial: editorial,
        aviable: true,
        loan_price: loan_priece

    }
    try{

        if( !name || !publication_Date || !author || !editorial || !loan_priece){
            return res.status(404).send({
                status: "Error",
                message: "Data empty",

            });
        } else {
            await poolAdministrator.query('insert into books ( id_Books, name, publication_Date, author, editorial, aviable, loan_price ) values (?,?,?,?,?,?,?);',[
                newBook.id_Books,
                newBook.name,
                newBook.publication_Date,
                newBook.author,
                newBook.editorial,
                newBook.aviable,
                newBook.loan_price
            ]);
            return res.status(200).send({
                status: "ok",
                message: "book added",
                newBook
            })
        }

    } catch( error ) {
      return res.status(500).send({
        status: "error",
        message_Server: "Error of connection",
        error,

      });
    }
}

