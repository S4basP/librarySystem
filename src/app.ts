import express, { json } from 'express';
import morgan from 'morgan';
import indexRouters from './module_Adminstartor/routers/index.routers';
import indexRoutersClient from './module_Client/routers/routers.client';

//
const app = express();

//middleware 

app.use(morgan('dev'));
app.use(express.json())
app.use(indexRouters);
app.use(indexRoutersClient);





export default app;