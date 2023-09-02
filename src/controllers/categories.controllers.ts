import { Request, Response } from 'express';
import categoriesServices from '../services/categories.services';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;
  const category = await categoriesServices.create(body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const allCategories = await categoriesServices.read();

  return res.status(200).json(allCategories);
};
export default { create, read };
