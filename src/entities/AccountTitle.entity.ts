import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('accountTitle')
export class AccountTitleEntity {
  @ApiProperty({ type: 'int', description: 'ID' })
  @PrimaryGeneratedColumn({ type: 'int', comment: 'ID' })
  ID: number;

  @ApiProperty({ type: 'string', nullable: false, description: 'name' })
  @Column({ type: 'varchar', length: 30, nullable: false, comment: 'name' })
  Name: string;

  @ApiProperty({ type: 'string', nullable: true, description: 'description' })
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
    comment: 'description',
  })
  Description: string;

  @ApiProperty({
    type: 'string',
    nullable: true,
    description: 'last changed by',
  })
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
    comment: 'last changed by',
  })
  LastChangedBy: string;

  @ApiProperty({ type: 'Date', description: 'date last changed' })
  @CreateDateColumn()
  DateLastChanged: Date;
}
