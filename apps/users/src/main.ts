import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000); // Obtener el puerto o usar 3000 como valor predeterminado
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
