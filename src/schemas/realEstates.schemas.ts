import { z } from 'Zod';
import { categorieSchema } from './categories.schemas';
import { addressSchema, createAdressSchema } from './index';

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive().default(0)),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  addressId: z.number().positive(),
  categoryId: z.number().positive(),
});

const realEstateReturnSchema = realEstateSchema
  .omit({ addressId: true, categoryId: true })
  .extend({ category: categorieSchema, address: addressSchema });

const realEstateArraySchema = z.array(
  realEstateReturnSchema.omit({ category: true })
);

const createRealEstateSchema = realEstateSchema
  .pick({ sold: true, value: true, size: true, categoryId: true })
  .extend({ address: createAdressSchema });

export {
  realEstateSchema,
  createRealEstateSchema,
  realEstateReturnSchema,
  realEstateArraySchema,
};
