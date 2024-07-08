import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  // Create the HTTP server
  const app = await NestFactory.create(AuthModule);
  
  // Apply middleware
  app.use(cookieParser());
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Start the HTTP server
  const configService = app.get(ConfigService);
  const port = configService.get('NODE_ENV') === 'production'
    ? configService.get('PORT')
    : 3001;

  await app.listen(port);

  // Connect and start the microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002,
    },
  });

  await app.startAllMicroservices();
}

bootstrap();
