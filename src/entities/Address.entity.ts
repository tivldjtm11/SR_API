import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Constituent } from "./Constituent.entity";

@Entity('Address')
export class Address{

    @ApiProperty({type: 'number', description: 'ID'})
    @PrimaryGeneratedColumn({name: 'ID', type: 'int', comment: 'ID'})
    id: number;

    @ApiProperty({type: 'string', description: 'ZipCode'})
    @Column({name: 'ZipCode', type: 'varchar', comment: 'ZipCode'})
    zipcode: string;

    @ManyToOne(() => Constituent, (constituent) => constituent.address)
    @JoinColumn({name: 'ConstituentID'})
    constituent: Constituent



}