import { hashSync } from 'bcryptjs';
import { User, UserCreate } from '../interfaces/index';
import { userRepo } from '../repositories';
import { userCreateSchemaReturn } from '../schemas';

const create = async (payload: UserCreate) => {
  const user: User = userRepo.create(payload);
  user.password = hashSync(user.password, 10);

  await userRepo.save(user);

  return userCreateSchemaReturn.parse(user);
};

export default { create };
