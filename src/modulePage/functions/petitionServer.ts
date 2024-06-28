import {poolAdministrator} from '../../db/db';

export const getAdministrator = async ( name: string ) => {
    try {

        const [ rows ]:any = await poolAdministrator.query('select id_Administrator, name, password from administrator  where  ? = name;', [ name ]);
      
        return {
            status: 'user_found',
            data: {
                id_Administrator: rows[0].id_Administrator,
                name: rows[0].name,
                password: rows[0].password
            }
        }
        
    } catch (error) {
        return {
            status: 'user_not_found'
        }
    }
};