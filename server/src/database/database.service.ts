import {Injectable, Logger, OnModuleDestroy} from '@nestjs/common';
import Knex, {type Knex as KnexConnection} from 'knex';
import {knexSnakeCaseMappers} from 'objection';

interface IDatabaseService extends OnModuleDestroy {
  getKnex(): KnexConnection;
}

@Injectable()
export class DatabaseService implements IDatabaseService {
  private readonly logger: Logger;
  private _knexConnection: KnexConnection;
  constructor() {
    this.logger = new Logger(DatabaseService.name);
  }

  getKnex() {
    if (!this._knexConnection) {
      this._knexConnection = Knex({
        client: 'pg',
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          user: process.env.DB_USER,
          database: process.env.DB_NAME,
          password: process.env.DB_PASSWORD,
        },

        ...knexSnakeCaseMappers(),
      });
    }

    return this._knexConnection;
  }

  async onModuleDestroy() {
    if (!this._knexConnection) {
      return;
    }

    await this._knexConnection.destroy();
    return;
  }
}
