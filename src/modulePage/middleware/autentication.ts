import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { jwtSecret } from "../../module_Adminstartor/config/config";
import "dotenv/config";
import { queryAutentication } from "../querys/consured";

export const autentication: RequestHandler = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    let { id_user, user }: any = verify(token, jwtSecret);
    const userValid = await queryAutentication(id_user, user);
    if (!userValid) return res.status(404).send("Error not autentication");

    return next();
  } catch (error) {
    console.log("no token found ");
    return res.status(404).send("Error not autentication");
  }
};
