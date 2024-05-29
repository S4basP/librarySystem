import { Books } from "../../typesForData/typeData";
import { poolAdministrator } from "../../db/db";

export const addBookDataBases = async (book: Books) => {
  try {
    if (
      !book.name ||
      !book.publication_Date ||
      !book.author ||
      !book.editorial ||
      !book.loan_price
    ) {
      return {
        status: 404,
        status_Server: "Error",
        message: "Data empty",
      };
    } else {
      await poolAdministrator.query(
        "insert into books ( id_Books, name, publication_Date, author, editorial, aviable, loan_price ) values (?,?,?,?,?,?,?);",
        [
          book.id_Books,
          book.name,
          book.publication_Date,
          book.author,
          book.editorial,
          book.aviable,
          book.loan_price,
        ]
      );
      console.log(book);
      return {
        status: 200,
        status_Server: "ok",
        message: "book added",
        book,
      };
    }
  } catch (error) {
    return {
      status: 500,
      status_Server: "error_To_Conecction_DataBase",
      message_Server: "Error of connection",
      error,
    };
  }
};
