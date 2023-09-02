import { compare, compareSync } from 'bcryptjs';
import AppError from '../error';
import { userRepo } from '../repositories';
import { sign } from 'jsonwebtoken';
import { Login, User } from '../interfaces';

const login = async (payload: Login) => {
  const { email, password } = payload;
  const user: User | null = await userRepo.findOneBy({ email: email });

  if (!user) throw new AppError('Invalid credentials', 401);

  console.log(password);
  console.log(user.password);
  const pwdMatch: boolean = await compare(password, user.password);

  if (!pwdMatch) throw new AppError('Invalid credentials', 401);

  const token: string = sign(
    { admin: user.admin },
    String(process.env.SECRET_KEY),
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user.id),
    }
  );

  return { token };
};

export default login;
