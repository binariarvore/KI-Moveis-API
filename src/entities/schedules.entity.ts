import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User, RealEstate } from './index';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;
}
