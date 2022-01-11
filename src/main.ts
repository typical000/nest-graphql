import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // @todo In production enviromnent we should log only "error" and "warn"
    logger: ['error', 'warn', 'log'],
  });
  await app.listen(3000);
}
bootstrap();
