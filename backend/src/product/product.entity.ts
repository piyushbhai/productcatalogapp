import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column('float')
  @IsPositive()
  price: number;

  @Column({ nullable: true })
  @IsOptional()
  description?: string;
}
