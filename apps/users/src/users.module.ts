import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "apps/users/.development.env"
  }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
}
