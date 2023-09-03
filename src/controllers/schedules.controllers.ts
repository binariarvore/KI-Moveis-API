import { Request, Response } from 'express';
import schedulesServices from '../services/schedules.services';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded;
  const schedule = await schedulesServices.create(req.body, sub);

  return res.status(201).json(schedule);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const schedules = await schedulesServices.read(Number(id));

  return res.status(200).json(schedules);
};

export default { create, read };
