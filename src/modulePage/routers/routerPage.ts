import { Router } from "express";
import { indexPage, pageHome } from "../controllers/controller.page";

const router = Router();

router.get('/', indexPage);

router.get('/home', pageHome);

export default router; 