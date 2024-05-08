export type Books = {
  id_Books: number;
  name: string;
  publication_Date: string;
  author: string;
  editorial: string;
  aviable: boolean;
  loan_price: number;
};

export type Administrator = {
  id_Adminitrator: number;
  name: string;
  age: number;
  schedule: string;
  password: string;
};

export type Customer = {
  id_Customer: string,
  name: string,
  date_Birth: string,
  address: string,
  registration_Date: string,
  debt: number,
  lend:  boolean 

}

export type example = {
  name: string;
  age: number;
  salary: number;
};
