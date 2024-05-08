import { RequestHandler } from "express";
import { poolClient } from "../db/db";



export const showListBooks: RequestHandler = async ( req, res ) => {
    try {
        let [rows]: any = await poolClient.query('select * from books');
        console.log(rows);
        return res.status(200).send({
            status: "ok",
            rows

        });
    } catch( error ) {
        return res.status(500).send({
            status: "error",
            error
        })
    }
}