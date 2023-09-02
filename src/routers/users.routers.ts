import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { updateUserSchema, userCreateSchema } from '../schemas';

const userRouter: Router = Router();

userRouter.post(
  '',
  validateMiddlewares.body(userCreateSchema),
  validateMiddlewares.email,
  usersControllers.create
);

userRouter.get(
  '',
  validateMiddlewares.token,
  validateMiddlewares.adminOnly,
  usersControllers.readAll
);

userRouter.patch(
  '/:id',
  validateMiddlewares.idExists,
  validateMiddlewares.token,
  validateMiddlewares.userPermissions,
  validateMiddlewares.body(updateUserSchema),
  usersControllers.partialUpdate
);

userRouter.delete(
  '/:id',
  validateMiddlewares.idExists,
  validateMiddlewares.token,
  validateMiddlewares.adminOnly,
  usersControllers.destroy
);

export default userRouter;
