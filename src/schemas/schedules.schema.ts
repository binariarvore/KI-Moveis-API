import { z } from 'Zod';

const createScheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const returnScheduleSchema = createScheduleSchema.extend({
  id: z.number(),
  userId: z.number(),
});

export { createScheduleSchema };
