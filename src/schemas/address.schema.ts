import { z } from 'Zod';

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.number().positive(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const createAdressSchema = addressSchema.omit({ id: true });

export { addressSchema, createAdressSchema };
