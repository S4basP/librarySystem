import { RequestHandler } from "express";
import path from 'path';



export const indexPage: RequestHandler = (  req , res ) => {
    
    return res.status(200).sendFile(path.join(__dirname, '../../public/index.html'));
};


export const pageHome: RequestHandler = ( req, res ) => {

    return res.status(200).sendFile(path.join(__dirname, '../../public/home.html'));

};


export const pageCustomer: RequestHandler = ( req, res ) => {
    return res.status(200).sendFile( path.join( __dirname, '../../public/createCustome.html'));
};


export const pageBookAdded : RequestHandler = ( req, res ) => {
    return res.status(200).sendFile(path.join(__dirname, '../../public/bookAdd.html'));
}