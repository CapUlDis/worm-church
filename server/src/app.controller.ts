import {Controller, Get, Req} from '@nestjs/common';

import {AppService} from './app.service';
import {DatabaseService} from './database/database.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  async getHello(@Req() request: Request) {
    const knex = this.databaseService.getKnex();

    const date = new Date();
    console.log('req#', date.toISOString(), request.headers['where']);

    return this.appService.getHello();
  }
}
