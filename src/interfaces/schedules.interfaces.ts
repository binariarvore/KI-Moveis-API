import { z } from 'Zod';
import { createScheduleSchema } from '../schemas';

type CreateSchedule = z.infer<typeof createScheduleSchema>;

export { CreateSchedule };
