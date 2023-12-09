import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Constituent } from "./Constituent.entity";

@Entity('SelectionItem')
export class SelectionItem{

    @ApiProperty({type: 'number', description: 'ID'})
    @PrimaryGeneratedColumn({name: 'ID', type: 'int', comment: 'ID'})
    id: number;

    @ApiProperty({type: 'string', description: 'Name'})
    @Column({name: 'Name', type: 'varchar', comment: 'Name'})
    name: string


    @ManyToOne(() => Constituent, (constituent) => constituent.selectionItem)
    @JoinColumn({name: 'SelectionID'})
    constituent: Constituent
}

