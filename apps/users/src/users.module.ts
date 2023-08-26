import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "apps/users/.development.env"
  }),
  TypeOrmModule.forRoot({...DataSourceConfig})
  ],
})
export class UsersModule {
}
