import { Router } from 'express';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { createCategorieSchema } from '../schemas';
import categoriesControllers from '../controllers/categories.controllers';

const categoriesRouter: Router = Router();

categoriesRouter.post(
  '/',
  validateMiddlewares.token,
  validateMiddlewares.adminOnly,
  validateMiddlewares.body(createCategorieSchema),
  categoriesControllers.create
);

categoriesRouter.get('/', categoriesControllers.read);

export default categoriesRouter;
