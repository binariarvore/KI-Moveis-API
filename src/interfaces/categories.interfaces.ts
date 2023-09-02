import { z } from 'Zod';
import { categorieSchema, createCategorieSchema } from '../schemas';

type Category = z.infer<typeof categorieSchema>;

type CreateCategory = z.infer<typeof createCategorieSchema>;

export { Category, CreateCategory };
