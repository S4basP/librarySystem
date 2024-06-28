import { poolAdministrator } from "../../db/db";
import { Request } from "express";
import { cookieExpire } from "../config/config";




export const getLoan_Price = async ( id_Books: number ): Promise< number >  => {
    try {
        const [row]: any = await poolAdministrator.query('select loan_price from books where id_Books = ?;', [id_Books]);
        return row; 
    } catch (error) {
        return 0; 
    }
}