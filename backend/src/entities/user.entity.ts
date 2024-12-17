import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TimeEntry } from './time-entry.entity';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string; // Azure AD Object ID

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => TimeEntry, timeEntry => timeEntry.user)
  timeEntries: TimeEntry[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
