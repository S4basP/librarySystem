import { CustomerRegister } from "../../typesForData/typeData";
import { poolAdministrator } from "../../db/db";


export const addCustomerDataBase = async (customer: CustomerRegister) => {
    try {
        if (!customer.name ||
            !customer.date_Birth ||
            !customer.address ||
            !customer.email ||
            !customer.registration_Date) {
          return {
            status: 404,
            status_Server: "error_data_empty",
            message: "data recevid",
          };
        } else {
          await poolAdministrator.query(
            "insert into customer (id_Customer, name, date_Birth, address, email, registration_Date) value (?, ?, ?, ?, ?, ?)",
            [
              customer.id_Customer,
              customer.name,
              customer.date_Birth,
              customer.address,
              customer.email,
              customer.registration_Date,
            ]
          );
          console.log(customer);
          return {
            status: 200,
            status_Server: "ok",
            message: "new customer added",
            customer,
          };
        }
      } catch (error) {
        return {
          status: 500,
          status_Server: "error_Connection_DataBase",
          message_Server: "Error to connect database",
          error,
        };
      }
}