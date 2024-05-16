import express, { json } from 'express';
import morgan from 'morgan';
import indexRouters from './routers/index.routers';

//
const app = express();

//middleware 

app.use(morgan('dev'));
app.use(express.json())
app.use(indexRouters);





export default app;