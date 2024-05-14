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

export type CustomerRegister = {
  id_Customer: number;
  name: string;
  date_Birth: string;
  address: string;
  email: string;
  registration_Date: string;
};
export type loan_Books = {
  id_Loan: number;
  id_Books: number;
  id_Customer: number;
  id_Administrator: number;
  loan_Date: string;
  delivery_Date: string;
  loan_Payment: number;
  loan_delay_cost: number;
};

export type loan_Book = {
  id_Loan: number;
  id_Books: number;
  id_Customer: number;
  id_Administrator: number;
  delivery_Date: string;
  loan_Date: string;
  loan_Payment: number;
  loan_delay_cost: number;
};

export type example = {
  name: string;
  age: number;
  salary: number;
};
