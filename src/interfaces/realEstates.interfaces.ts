import { z } from 'Zod';
import { createRealEstateSchema, realEstateReturnSchema } from '../schemas';

type CreateRealEstate = z.infer<typeof createRealEstateSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;

export { CreateRealEstate, RealEstateReturn };
