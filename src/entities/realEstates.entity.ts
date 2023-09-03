import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address, Category, Schedule } from './index';

@Entity('realEstates')
export class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Schedule[];

  @OneToOne(() => Address, (a) => a.realEstate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;
}
