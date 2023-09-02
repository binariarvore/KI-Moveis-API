import { addressRepo, realEstateRepo, categoryRepo } from '../repositories';
import { CreateRealEstate, RealEstateReturn } from '../interfaces';
import AppError from '../error';
import { realEstateArraySchema, realEstateReturnSchema } from '../schemas';

const create = async (payload: CreateRealEstate): Promise<RealEstateReturn> => {
  const { address, categoryId } = payload;

  const foundAddress = await addressRepo.findOneBy(address);
  const foundCategory = await categoryRepo.findOneBy({ id: categoryId });

  if (foundAddress) throw new AppError('Address already exists', 409);
  if (!foundCategory) throw new AppError('Category not found', 404);

  await addressRepo.save(address);

  const fullRealEstate = {
    ...payload,
    address: address,
    category: foundCategory,
  };

  await realEstateRepo.save(fullRealEstate);

  return realEstateReturnSchema.parse(fullRealEstate);
};

const readall = async (): Promise<RealEstateReturn[]> => {
  return await realEstateRepo.find({ relations: { address: true } });
};

export default { create, readall };
