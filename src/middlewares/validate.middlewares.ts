import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'Zod';
import { userRepo } from '../repositories';
import AppError from '../error';
import { verify } from 'jsonwebtoken';

const body =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);

    return next();
  };

const email = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  const userFound = await userRepo.findOne({ where: { email: email } });

  if (!userFound) return next();

  throw new AppError('Email already exists', 409);
};

const token = (req: Request, res: Response, next: NextFunction): void => {
  const auth: string | undefined = req.headers.authorization;

  if (!auth) throw new AppError('Missing bearer token', 401);

  const authToken: string = auth.split(' ')[1];

  verify(authToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    res.locals.decoded = decoded;
  });

  return next();
};

const userPermissions = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { admin, sub } = res.locals.decoded;

  if (!admin && id !== sub) throw new AppError('Insufficient permission', 403);

  return next();
};

const adminOnly = (req: Request, res: Response, next: NextFunction): void => {
  const { admin } = res.locals.decoded;

  if (!admin) throw new AppError('Insufficient permission', 403);

  return next();
};

const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const foundUser = await userRepo.findOneBy({ id: Number(id) });

  if (!foundUser) throw new AppError('User not found', 404);

  res.locals.foundUser = foundUser;

  return next();
};

export default { body, email, token, adminOnly, userPermissions, idExists };
