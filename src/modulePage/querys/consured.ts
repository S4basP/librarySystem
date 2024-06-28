import {poolAdministrator} from '../../db/db';




export const queryAutentication: any = async ( idTK:number, nameTK: string) => {
    try {
       const [ rows ]: any = await poolAdministrator.query('select id_Administrator, name from administrator where  ? = name;', [nameTK]);
      
        if( idTK === rows[0].id_Administrator && nameTK === rows[0].name){
            return true;
        }

        return false;

    } catch (error) {
        console.log('Error en la consulta', error);
        return false;
    }
}