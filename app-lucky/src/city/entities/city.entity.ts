import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryId: number;

  @Column()
  name: string;
}