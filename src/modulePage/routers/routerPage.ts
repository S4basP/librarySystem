import { Router } from "express";
import { indexPage, pageBookAdded, pageCustomer, pageHome, pageLoan } from "../controllers/controller.page";
import { autentication } from "../middleware/autentication";


const router = Router();

router.get('/', indexPage);

router.get('/home',autentication,pageHome);

router.get('/customerAdded',autentication,pageCustomer);

router.get('/bookAdded', autentication, pageBookAdded);

router.get('/loan_book', autentication, pageLoan)



export default router; 