import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Property, (propertyInstance) => propertyInstance.user)
  properties: Property[];

  @ManyToMany(() => Property, (propertyInstance) => propertyInstance.likedBy)
  @JoinTable({ name: 'user_likes_properties' })
  likedProperties: Property[];
}
