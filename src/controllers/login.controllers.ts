import { Request, Response } from 'express';
import login from '../services/login.services';

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: { token: string } = await login(req.body);

  return res.status(200).json(token);
};

export default create;
