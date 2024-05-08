import { Router } from 'express';
import { showListBooks } from '../controllers/controller.user.client';
import { createCustomer } from '../controllers/constroller.user.Admin';



const router = Router();



router.get('/showListBooks', showListBooks);


router.post('/createNewCustomer', createCustomer);






export default router; 