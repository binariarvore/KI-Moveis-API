import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'Zod';
import { userRepo } from '../repositories';
import AppError from '../error';

const body =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);

    return next();
  };

const email = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const userFound = await userRepo.findOne({ where: { email: email } });
  if (!userFound) return next();

  throw new AppError('Email already exists', 409);
};

export default { body, email };
