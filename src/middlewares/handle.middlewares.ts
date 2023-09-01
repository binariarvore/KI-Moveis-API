import { Request, Response, NextFunction } from 'express';
import AppError from '../error';
import { ZodError } from 'Zod';

const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError)
    return res.status(error.statusCode).json({ message: error.message });

  if (error instanceof ZodError)
    return res.status(400).json({ message: error.flatten().fieldErrors });

  console.error(error);
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default handleErrors;
