import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  areas: number;

  @Column()
  hasBalcony: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasSwimmingPool: boolean;

  @OneToOne(() => Property, propertyInstance => propertyInstance.propertyFeature)
  @JoinColumn()
  property: Property
}