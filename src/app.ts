import express, { json } from 'express';
import morgan from 'morgan';
import indexRouters from './module_Adminstartor/routers/index.routers';
import indexRoutersClient from './module_Client/routers/routers.client';
import pageRouter from './modulePage/routers/routerPage';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

//
const app = express();

//middleware 

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(indexRouters);
app.use(indexRoutersClient);
app.use(pageRouter);





export default app;