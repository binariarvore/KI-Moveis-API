import { Router } from 'express';
import create from '../controllers/login.controllers';

const loginRouter: Router = Router();

loginRouter.post('', create);

export default loginRouter;
