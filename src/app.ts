import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import userRouter from './routers/users.routers';
import handleErrors from './middlewares/handle.middlewares';
import loginRouter from './routers/login.routers';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.use(handleErrors);

export default app;
