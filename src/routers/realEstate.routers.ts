import { Router } from 'express';
import realEstateControllers from '../controllers/realEstate.controllers';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { createRealEstateSchema } from '../schemas';

const realEstateRouter: Router = Router();

realEstateRouter.post(
  '/',
  validateMiddlewares.token,
  validateMiddlewares.adminOnly,
  validateMiddlewares.body(createRealEstateSchema),
  realEstateControllers.create
);

realEstateRouter.get('/', realEstateControllers.read);

export default realEstateRouter;
