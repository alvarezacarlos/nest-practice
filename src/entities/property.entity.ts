import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';

@Entity()
export class Property {
  // auto increment field (pk)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 }) //passing default value
  price: number;

  @OneToOne(
    () => PropertyFeature,
    (propertyFeatureInstance) => propertyFeatureInstance.property,
    {
      // cascade: ['update'],  // cascade only in update operation
      cascade: true, // cascade on all operations
    },
  )
  propertyFeature: PropertyFeature;
}
