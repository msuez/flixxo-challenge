import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { BEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BEntity> extends ConfigServer {
  public execRepository: Promise<Repository<T>>;
  
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.execRepository = this.initRepository(getEntity);
  }

  async initRepository<T extends ObjectLiteral>(e: EntityTarget<T>): Promise<Repository<T>> {
    const getConn = await this.initConnect;
    return getConn.getRepository(e);
  }
}
