import AppError from '../error';
import { CreateSchedule } from '../interfaces';
import { realEstateRepo, userRepo, scheduleRepo } from '../repositories';

const create = async (payload: CreateSchedule, userId: number) => {
  const actualDay = new Date(payload.date).getDay();
  if (actualDay === 0 || actualDay === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }

  const actualHour = new Date(payload.date + ' ' + payload.hour).getHours();
  if (actualHour < 8 || actualHour > 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
  }

  const user = await userRepo.findOneBy({ id: userId });

  if (!user) throw new AppError('User not found', 404);

  const realEstate = await realEstateRepo.findOneBy({
    id: payload.realEstateId,
  });

  if (!realEstate) throw new AppError('RealEstate not found', 404);

  const sameScheduleRealEstate = await scheduleRepo
    .createQueryBuilder('schedule')
    .where('schedule.hour = :hour', { hour: payload.hour })
    .andWhere('schedule.date = :date', { date: payload.date })
    .andWhere('schedule.realEstate = :realEstateId', {
      realEstateId: payload.realEstateId,
    })
    .getOne();

  if (sameScheduleRealEstate)
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    );

  const sameScheduleUser = await scheduleRepo
    .createQueryBuilder('schedule')
    .where('schedule.hour = :hour', { hour: payload.hour })
    .andWhere('schedule.date = :date', { date: payload.date })
    .andWhere('schedule.user = :userId', {
      userId: userId,
    })
    .getOne();

  if (sameScheduleUser)
    throw new AppError(
      'User schedule to this real estate at this date and time already exists',
      409
    );

  const schedule = scheduleRepo.create({
    ...payload,
    user: user,
    realEstate: realEstate,
  });

  await scheduleRepo.save(schedule);

  return { message: 'Schedule created' };
};

const read = async (realEstateId: number) => {
  const realEstate = await realEstateRepo.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  });

  if (!realEstate) throw new AppError('RealEstate not found', 404);

  return realEstate;
};

export default { create, read };
