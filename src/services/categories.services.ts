import AppError from '../error';
import { CreateCategory } from '../interfaces';
import { categoryRepo } from '../repositories';

const create = async (payload: CreateCategory) => {
  const foundCategory = await categoryRepo.findOne({
    where: { name: payload.name },
  });
  if (foundCategory) throw new AppError('Category already exists', 409);

  const newCategory = categoryRepo.create(payload);

  return await categoryRepo.save(newCategory);
};

const read = async () => {
  const allCategories = await categoryRepo.find();

  return allCategories;
};

const readById = async (id: number) => {
  const foundCategory = await categoryRepo.findOne({ where: { id: id } });
  if (!foundCategory) throw new AppError('Category not found', 404);

  const actualCategory = await categoryRepo.findOne({
    where: { id: id },
    relations: { realEstates: true },
  });

  return actualCategory;
};

export default { create, read, readById };
