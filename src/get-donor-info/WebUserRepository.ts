import { WebUser } from "src/entities/WebUser.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(WebUser)
export class WebUserRepository extends Repository<WebUser>{

}