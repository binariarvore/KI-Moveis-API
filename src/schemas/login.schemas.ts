import { userCreateSchema } from './index';
const loginSchema = userCreateSchema.pick({ email: true, password: true });

export { loginSchema };
