import { z } from 'Zod';

const categorieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const createCategorieSchema = categorieSchema.omit({ id: true });

export { categorieSchema, createCategorieSchema };
