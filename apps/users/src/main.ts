import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants/cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  app.use(morgan('dev'));

  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
     enableImplicitConversion: true 
    }
  }))

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT', 3000); 
  // Obtener el puerto o usar 3000 como valor predeterminado

  app.setGlobalPrefix('user');
  
  app.enableCors(CORS);

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
