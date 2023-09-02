import { z } from 'Zod';

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const userCreateSchema = userSchema.pick({
  name: true,
  email: true,
  admin: true,
  password: true,
});

const userCreateSchemaReturn = userSchema.omit({ password: true });

const userArraySchemaReturn = z.array(userCreateSchemaReturn);

const updateUserSchema = userSchema.omit({ admin: true }).partial();

export {
  userSchema,
  userCreateSchema,
  userCreateSchemaReturn,
  userArraySchemaReturn,
  updateUserSchema,
};
