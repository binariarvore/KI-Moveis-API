import {
  UpdateUser,
  User,
  UserCreate,
  UserCreateReturn,
} from '../interfaces/index';
import { userRepo } from '../repositories';
import { userArraySchemaReturn, userCreateSchemaReturn } from '../schemas';

const create = async (payload: UserCreate): Promise<UserCreateReturn> => {
  const user: User = userRepo.create(payload);

  await userRepo.save(user);

  return userCreateSchemaReturn.parse(user);
};

const readAll = async (): Promise<UserCreateReturn[]> => {
  const users: User[] = await userRepo.find();

  return userArraySchemaReturn.parse(users);
};

const partialUpdate = async (user: User, payload: UpdateUser) => {
  const updatedUser = userRepo.create({ ...payload, ...user });
  await userRepo.save(updatedUser);

  return userCreateSchemaReturn.parse(updatedUser);
};

const destroy = async (user: User) => {
  await userRepo.softRemove(user);
};

export default { create, readAll, partialUpdate, destroy };
