import express, { Express } from 'express';
import routes from './routes';
//konek ke config db
import './config/db';

const app: Express = express();


app.use(express.json());
app.use(routes);

export default app;
