import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {GracefulShutdownModule} from 'nestjs-graceful-shutdown';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CryptoService} from './crypto/crypto.service';
import {DatabaseService} from './database/database.service';
import {AuthMiddleware, LoggerMiddleware} from './middlewares';
import {UsersController, UsersService} from './users';

@Module({
  imports: [GracefulShutdownModule.forRoot(), ConfigModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [AppService, DatabaseService, CryptoService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('*');
  }
}
