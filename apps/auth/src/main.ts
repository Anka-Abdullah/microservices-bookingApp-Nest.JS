import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const configService = app.get(ConfigService);
  const port =
    configService.get('NODE_ENV') === 'production'
      ? configService.get('PORT')
      : 3001;

  // app.connectMicroservice({ transport: Transport.TCP });
  // await app.startAllMicroservices();

  await app.listen(port);
}
bootstrap();
