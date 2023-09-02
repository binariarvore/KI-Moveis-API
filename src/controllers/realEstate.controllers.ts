import { Request, Response } from 'express';
import realEstatesServices from '../services/realEstates.services';

const create = async (req: Request, res: Response) => {
  const realEstate = await realEstatesServices.create(req.body);

  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response) => {
  const allRealEstates = await realEstatesServices.readall();

  return res.status(200).json(allRealEstates);
};

export default { create, read };
