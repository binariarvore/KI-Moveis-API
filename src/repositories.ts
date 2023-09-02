import { Repository } from 'typeorm';
import { AppDataSource } from './data-source';
import { Category, Schedule, User, RealEstate, Address } from './entities';

const userRepo: Repository<User> = AppDataSource.getRepository(User);

const scheduleRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

const categoryRepo: Repository<Category> =
  AppDataSource.getRepository(Category);

const realEstateRepo: Repository<RealEstate> =
  AppDataSource.getRepository(RealEstate);

const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

export { userRepo, scheduleRepo, categoryRepo, realEstateRepo, addressRepo };
