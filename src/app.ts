import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import userRouter from './routers/users.routers';
import handleErrors from './middlewares/handle.middlewares';
import loginRouter from './routers/login.routers';
import categoriesRouter from './routers/categories.routers';
import realEstateRouter from './routers/realEstate.routers';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/realEstate', realEstateRouter);

app.use(handleErrors);

export default app;
