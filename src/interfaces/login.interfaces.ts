import { z } from 'Zod';
import { loginSchema } from '../schemas';

type Login = z.infer<typeof loginSchema>;

export { Login };
