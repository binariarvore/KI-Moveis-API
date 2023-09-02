import { Request, Response } from 'express';
import usersServices from '../services/users.services';
import { User, UserCreateReturn } from '../interfaces';

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserCreateReturn = await usersServices.create(req.body);

  return res.status(201).json(user);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
  const users: UserCreateReturn[] = await usersServices.readAll();
  return res.status(200).json(users);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const { foundUser } = res.locals;
  const updatedUser = await usersServices.partialUpdate(body, foundUser);

  return res.status(200).json(updatedUser);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;
  await usersServices.destroy(foundUser);

  return res.status(204).json();
};

export default { create, readAll, partialUpdate, destroy };
