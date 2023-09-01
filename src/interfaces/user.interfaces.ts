import { z } from 'Zod';
import { userSchema, userCreateSchema } from '../schemas/index';

type User = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;

export { User, UserCreate };
