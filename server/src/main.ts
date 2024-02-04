import {ConfigModule} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {setupGracefulShutdown} from 'nestjs-graceful-shutdown';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupGracefulShutdown({app});
  await ConfigModule.envVariablesLoaded;

  app.enableCors();

  await app.listen(3004);
}

bootstrap();
