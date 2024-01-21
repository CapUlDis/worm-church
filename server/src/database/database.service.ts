import {Injectable, Logger} from '@nestjs/common';
import Knex from 'knex';

interface IDatabaseService {
  getKnex();
}

@Injectable()
export class DatabaseService implements IDatabaseService {
  private readonly logger: Logger;
  private _knexConnection: any;
  constructor() {
    this.logger = new Logger('DatabaseService');
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
      });
    }

    return this._knexConnection;
  }
}
