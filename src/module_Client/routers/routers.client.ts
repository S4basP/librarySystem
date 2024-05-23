import { Router } from "express";
import { showListBooks } from "../controllers/controller.user.client";


const router = Router();

router.get('/showListBooks', showListBooks);


export default router;
