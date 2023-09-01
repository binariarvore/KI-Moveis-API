import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { userCreateSchema } from '../schemas';

const userRouter: Router = Router();

userRouter.post(
  '/',
  validateMiddlewares.body(userCreateSchema),
  validateMiddlewares.email,
  usersControllers.create
);

export default userRouter;
