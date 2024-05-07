import { Router } from 'express';
import {addBook, createUserAdministrator, readBooks, testAddData, testTransferData} from '../controllers/controller.library';


const router = Router();


router.get('/home', testTransferData);



router.post('/addUser', testAddData);

router.post('/newBook', addBook);


router.post('/newAdministrator', createUserAdministrator);

router.get('/readListBooks', readBooks);





export default router; 