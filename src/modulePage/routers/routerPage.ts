import { Router } from "express";
import { indexPage, pageCustomer, pageHome } from "../controllers/controller.page";

const router = Router();

router.get('/', indexPage);

router.get('/home', pageHome);

router.get('/customerAdded', pageCustomer);

export default router; 