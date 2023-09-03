import { Router } from 'express';
import schedulesControllers from '../controllers/schedules.controllers';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { createScheduleSchema } from '../schemas';

const scheduleRouter: Router = Router();

scheduleRouter.use(
  '',
  validateMiddlewares.token,
  validateMiddlewares.body(createScheduleSchema),
  schedulesControllers.create
);

scheduleRouter.use(
  '/realEstate/:id',
  validateMiddlewares.token,
  validateMiddlewares.adminOnly,
  schedulesControllers.read
);

export default scheduleRouter;
