import { z } from 'Zod';
import {
  userSchema,
  userCreateSchema,
  userCreateSchemaReturn,
  updateUserSchema,
} from '../schemas/index';

type User = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;
type UserCreateReturn = z.infer<typeof userCreateSchemaReturn>;
type UpdateUser = z.infer<typeof updateUserSchema>;

export { User, UserCreate, UserCreateReturn, UpdateUser };
