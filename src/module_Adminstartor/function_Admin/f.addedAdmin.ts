import { poolAdministrator } from "../../db/db";
import { compare, genSalt, hash } from "bcryptjs";
import { Administrator } from "../../typesForData/typeData";

export const addAdminToDataBases = async (newAdmin: Administrator) => {
    //Validation of data
  if (
    !newAdmin.name ||
    !newAdmin.age ||
    !newAdmin.schedule ||
    !newAdmin.password
  ) {
    return {
        status: 404,
        status_Server: "error_Data_Empty",
        message: "error data recevied empty"
    }
   
  } else {
    //added data to databases 
    try {

        //here recevid new password
        newAdmin.password = await encryptingPass(newAdmin.password);

        await poolAdministrator.query(
          "insert into administrator (id_Administrator, name, age, schedule, password) value  ( ?, ?, ?, ?, ? )",
          [
            newAdmin.id_Adminitrator,
            newAdmin.name,
            newAdmin.age,
            newAdmin.schedule,
            newAdmin.password,
          ]
        );
  
        console.log(newAdmin);
        return {
          status: 200,
          status_Server: "ok",
          message: "Administrator added",
        };
      } catch (error) {
        return {
          status: 404,
          status_server: "error_of_conection_DataBase",
          error,
        };
      }
  }
};

export const compareAdmin: any = async (name: string, password: string) => {
  let outObjet;
 if( !name || !password ){
  return {
    status: 404,
    status_Server: "error_Data_empty",
    message: "send data empty"
  }
 }else{
  try {
    let [rows]: any = await poolAdministrator.query(
      "select password from administrator where ? = name",
      [name]
    );

    let band = await compare(password, rows[0].password);

    if (!band) {
      return {
        status: 202,
        status_Server: "user_Not_Found",
        band: band,
        message: "user not found!!",
      };
    } else {
      console.log(`Nam: ${name}\nPassword: ${password}`);
      return {
        status: 202,
        status_server: "user_Found",
        band: band,
        message: "user found!!",
      };
    }
  } catch (error) {
    return {
      status: 500,
      status_Server: "Error_to_ConexionDataBases",
      error,
    };
  }

 }
};



const encryptingPass = async ( pass:string ) => {
    let salt = await genSalt(5);
    let password = await hash(pass, salt);
    return password; 
}; 