import { RequestHandler } from 'express';
import { Books, example, Administrator } from '../typesForData/typeData';
import bcript from 'bcryptjs';
import { generateId } from '../typesForData/ids';
import { pool } from '../db/db'

 

export const testTransferData:RequestHandler = ( req, res ) => {
    

    console.log(typeof(req.body));

    return res.status(204);
}


export const testAddData: RequestHandler = ( req, res ) =>{

    const { name , age, salary } = req.body;

    let user: example;

    user = {
        name: name,
        age: age,
        salary: salary
    }
    

    return res.status(200).send({
        status: 'ok',
        name: name,
        age: age,
        salary: salary 
    })
}


export const addBook:RequestHandler = ( req, res ) => {
    const {
        name,
        publication_Date,
        author,
        editorial,
        aviable,
        loan_price
    } = req.body;
    let newBook:Books = {
        name: name,
        publication_Date: publication_Date ,
        author: author,
        editorial: editorial,
        aviable: aviable,
        loan_price: loan_price
        
    }   
    return res.status(200).send({
        status: "ok",
        newBook

    })

}


//This is where system programming begins.

export const createUserAdministrator: RequestHandler = async( req, res ) => {
 let  {
    name,
    age,
    schedule,
    password,
 } = req.body;

const salt =  await bcript.genSalt(5);
const hashPass = await bcript.hash( password , salt);
password = hashPass;
 if( !name || !age || !schedule || !password ){

    return res.status(404).send({
         status: "error",
         message: "Error data icomplete",
         data: {
            name,
            age,
            schedule,
            password
         }
    })
 } else {
    let newAdministrator: Administrator = {
        id_Adminitrator: generateId(),
        name: name,
        age: age,
        schedule: schedule,
        password: password
    }


    return res.status(200).send({
        status: "ok",
        message: "New added administrator",
        newAdministrator
    });

 }

}

//Read data of database


export const readBooks: RequestHandler = async ( req, res ) => {
 try{
    const [ rows ] = await pool.query('select * from books');
    console.log(rows);
    return res.status(200).send({
        status: "ok",
        rows
    });
 } catch ( error ) {
    return res.status(404).send({
        status: "error",
        message: "the connection failed",
        message_error: error,

    });
 }
}