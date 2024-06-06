import { poolAdministrator } from "../../db/db";



export const showBooksDataBase = async () => {

    try {
        const [rows]: any = await poolAdministrator.query('select * from books; ');
        return {
            status: 202,
            status_server: 'ok',
            rows


        }; 
    } catch (error) {
        return {
            status: 404,
            status_Server: "Error_conection_Databases",
            error
        };
    }

}