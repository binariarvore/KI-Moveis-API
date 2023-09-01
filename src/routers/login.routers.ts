import { Router } from 'express';
import validateMiddlewares from '../middlewares/validate.middlewares';
import { loginSchema } from '../schemas';
import login from '../services/login.services';
import create from '../controllers/login.controllers';

const loginRouter: Router = Router();

loginRouter.post('', create);

export default loginRouter;
