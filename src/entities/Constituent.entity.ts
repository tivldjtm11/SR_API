import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WebUser } from "./WebUser.entity";
import { Address } from "./Address.entity";
import { SelectionItem } from "./SelectionItem.entity";


@Entity('Constituent')
export class Constituent{

    @ApiProperty({type: 'number', description: 'ID'})
    @PrimaryGeneratedColumn({name: 'ID', type: 'int', comment: 'ID'})
    id: number;

    @ApiProperty({type: 'string', description: 'Name'})
    @Column({name: 'Name', type: 'varchar', comment: 'Name'})
    name: string

    @ApiProperty({type: 'string', description: 'PhoneNumber'})
    @Column({name: 'PhoneNumber', type: 'varchar', comment: 'PhoneNumber'})
    phoneNumber: string

    @ApiProperty({type: 'string', description: 'Email'})
    @Column({name: 'Email', type: 'varchar', comment: 'Email' })
    email: string

    @ApiProperty({type: 'boolean', description: 'RequestNoSMS'})
    @Column({name: 'RequestNoSms', type: 'bit', comment: 'RequestNoSMS'})
    requestnosms : boolean

    @ApiProperty({type: 'boolean', description: 'RequestNoEmail'})
    @Column({name: 'RequestNoEmail', type: 'bit', comment: 'RequestNoEmail'})
    requestnoemail : boolean

    // WebUser 컬럼 조인
    @OneToMany(() => WebUser, (webuser) => webuser.constituent)
    webuser: WebUser[];

    //Address 컬럼 조인
    @OneToMany(() => Address, (address) => address.constituent)
    address: Address[];

    //selectionItem 컬럼 조인
    @OneToMany(() => SelectionItem, (selectionItem) => selectionItem.constituent)
    selectionItem: SelectionItem

    
}




