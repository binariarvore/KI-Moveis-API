import { Repository } from 'typeorm';
import { AppDataSource } from './data-source';
import { Schedule, User } from './entities';

const userRepo: Repository<User> = AppDataSource.getRepository(User);
const scheduleRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

export { userRepo, scheduleRepo };
