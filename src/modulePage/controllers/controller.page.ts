import { RequestHandler } from "express";
import path from "path";
import { compare } from "bcryptjs";

let dataAutentication;
export const indexPage: RequestHandler = (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../public/index.html"));
};

export const pageHome: RequestHandler = async (req, res) => {
  return res.status(200).sendFile(path.join( __dirname, '../../public/home.html'))
};

export const pageCustomer: RequestHandler = (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../public/createCustome.html"));
};

export const pageBookAdded: RequestHandler = (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../public/bookAdd.html"));
};


export const pageLoan: RequestHandler = ( req, res ) => {
  return res.status(200).sendFile(path.join( __dirname, '../../public/loanAddPage.html'));
}
