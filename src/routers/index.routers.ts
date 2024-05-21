import { Router } from 'express';
import { showListBooks } from '../controllers/controller.user.client';
import { createAdministrator, createBooks, createCustomer, loanBook, loginAutenticationAdmin } from '../controllers/constroller.user.Admin';




const router = Router();


//show books 
router.get('/showListBooks', showListBooks);

//create new administrator 
router.post('/newAdministrator', createAdministrator);

//Create new customer 
router.post('/createNewCustomer', createCustomer);

//Create new books
router.post('/createNewBooks', createBooks);

//loan Books
router.post('/loanBook', loanBook);


//Login adminitrator 
router.post('/login', loginAutenticationAdmin);






export default router; 