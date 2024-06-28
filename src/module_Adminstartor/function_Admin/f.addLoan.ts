import { loan_Book } from "../../typesForData/typeData";
import { poolAdministrator } from "../../db/db";



export const addLoanDataBase = async (loan: loan_Book) => {
  
    try {
        if (
          !loan.id_Books ||
          !loan.id_Customer ||
          !loan.id_Administrator ||
          !loan.delivery_Date ||
          !loan.loan_Date ||
          !loan.loan_Payment ||
          !loan.loan_delay_cost
        ) {
          return {
            status: 404,
            status_Server: "error_Data_empty",
            message: "Error data empy!!!",
            loan: loan
          };
        } else {
          await poolAdministrator.query(
            "insert into loan ( id_Loan, id_Books, id_Customer, id_Administrator, delivery_Date,loan_Date, loan_Payment, loan_delay_cost ) values ( ?, ?, ?, ?, ?, ?, ?, ? )",
            [
              loan.id_Loan,
              loan.id_Books,
              loan.id_Customer,
              loan.id_Administrator,
              loan.delivery_Date,
              loan.loan_Date,
              loan.loan_Payment,
              loan.loan_delay_cost,
            ]
          );
          console.log(loan);
          return {
            status: 200,
            status_Server: "ok",
            message: "loan accepted",
          };
        }
      } catch (error) {
        return {
          status: 500,
          status_Server: "Error_connection_Databases",
          error,
        };
      }
};