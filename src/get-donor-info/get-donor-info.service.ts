import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Constituent } from 'src/entities/Constituent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetDonorInfoService {
    constructor(
        @InjectRepository(Constituent)
        private readonly ConstituentRepository: Repository<Constituent>
    ){}

    async getDonorInfo(id){
        const result = await this.ConstituentRepository
        .createQueryBuilder('co')
        .select('co.id', 'id')
        .addSelect('co.name', 'Name')
        .addSelect('co.phonenumber','Phonenumber')
        .addSelect('co.email', 'Email')
        .addSelect('co.requestnosms', 'RequestNoSMS')
        .addSelect('co.requestnoemail', 'RequestNoEmail')
        .addSelect('wu.userid', 'UserID')
        .addSelect('a.zipcode', 'ZipCode')
        .addSelect('si.name', 'ConstituentName')
        .leftJoin('co.webuser','wu')
        .leftJoin('co.address', 'a')
        .leftJoin('co.selectionItem', 'si')
        .where('co.id = :id', {id})
        .getRawOne();
    
        if (!result) {
            throw new Error(`Constituent with ID ${id} not found.`);
        }

        console.log(result);
        return result;
    }
}