import { Router } from 'express';
import { showListBooks } from '../controllers/controller.user.client';
import { createAdministrator, createBooks, createCustomer, loanBook, loginAutenticationAdmin } from '../controllers/constroller.user.Admin';




const router = Router();



router.get('/showListBooks', showListBooks);

router.post('/newAdministrator', createAdministrator);

router.post('/createNewCustomer', createCustomer);

router.post('/createNewBooks', createBooks);

router.post('/loanBook', loanBook);

router.post('/login', loginAutenticationAdmin);






export default router; 