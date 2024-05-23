import { poolAdministrator } from "../../db/db"
import { compare } from "bcryptjs";



export const compareAdmin: any  = async ( name: string, password: string  ) => {
let outObjet; 
    try {
        let [rows]: any = await poolAdministrator.query('select password from administrator where ? = name', [ name ]);

        let band = await compare(password, rows[0].password);
    
        if(!band){
            return {
                status: 202,
                band: band,
                message: "user not found!!"
                
            }
        } else {
            return {
                status: 202,
                band: band,
                message: "user found!!"
            }
        }

     

    } catch (error) {
        return {
            status: 500,
            error
        }
    }

}