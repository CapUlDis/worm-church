import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {GracefulShutdownModule} from 'nestjs-graceful-shutdown';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseService} from './database/database.service';

@Module({
  imports: [GracefulShutdownModule.forRoot(), ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
