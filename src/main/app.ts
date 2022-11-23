import cors from 'cors';
import express from 'express';
import { mainRouter } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(mainRouter);

export { app };
