import { Router } from 'express';
import { showListBooks } from '../controllers/controller.user.client';
import { createBooks, createCustomer, loanBook } from '../controllers/constroller.user.Admin';



const router = Router();



router.get('/showListBooks', showListBooks);


router.post('/createNewCustomer', createCustomer);

router.post('/createNewBooks', createBooks);

router.post('/loanBook', loanBook);






export default router; 