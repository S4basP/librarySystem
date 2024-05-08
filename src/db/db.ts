import { createPool } from "mysql2/promise";



export const poolAdministrator = createPool( {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 3306,
    database: 'library'


}); 



export const poolClient = createPool({
    host:'localhost',
    user: 'libraryClient',
    password:'admin',
    port: 3306,
    database: 'library'
});

