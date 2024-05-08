import { RequestHandler } from "express";
import { poolAdministrator } from "../db/db";

export const createCustomer:RequestHandler = async ( req , res ) => {
    let {name, date_Birth, address, email, registration_Date, debt, lend} = req.body;
    try {

        if(!name || !date_Birth || !email || !registration_Date ){

            return res.status(404).send({
                status: "error",
                message: "empy data"
            });
        } else {
            return res.status(200).send({
                status: "ok",
                message: "New customer added"
            });
        }
     
    } catch( error ) {

    }
};