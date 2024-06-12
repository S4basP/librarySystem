import { Router } from "express";
import { indexPage, pageBookAdded, pageCustomer, pageHome } from "../controllers/controller.page";

const router = Router();

router.get('/', indexPage);

router.get('/home', pageHome);

router.get('/customerAdded', pageCustomer);

router.get('/bookAdded', pageBookAdded);

export default router; 