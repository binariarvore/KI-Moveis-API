import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const create = async (req: Request, res: Response): Promise<any> => {
  const user = await usersServices.create(req.body);

  return res.status(201).json(user);
};

export default { create };
