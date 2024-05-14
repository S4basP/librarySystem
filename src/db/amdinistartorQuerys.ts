import { poolAdministrator } from "./db";



export const consultedAdministarator = async ( name: string  ) => {
    try {
        const [rows] : any = await poolAdministrator.query('select password from administartor where ? = name', [name]);
        if( !rows[0].password ){
            return {
                status: "user_not_foud"
            };
        } else {
            return {
                status: "user_found",
                administartor: {
                    name: name,
                    password: rows[0].password
                }
            };
        }
    } catch (error) {
        return {
            status: "Error_connection_DataBase",
            message: "error the connectio database",
            error

        };
    }
};