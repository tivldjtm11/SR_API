import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Constituent } from "./Constituent.entity";

@Entity('WebUser')
export class WebUser {

    @ApiProperty({type: 'number', description: 'ConstituentID'})
    @PrimaryGeneratedColumn({name: 'ConstituentID', type: 'int', comment: "ConstituentID"})
    ConstituentID: number;

    @ApiProperty({type: 'string', description: 'UserID'})
    @Column({name: 'UserID', type: 'varchar', comment: 'UserID'})
    userid : string

    @ManyToOne(() => Constituent, (constituent) => constituent.webuser)
    @JoinColumn({name: 'ConstituentID'})
    constituent: Constituent
}