import { Constituent } from "src/entities/Constituent.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Constituent)
export class ConstituentRepository extends Repository<Constituent> {

}