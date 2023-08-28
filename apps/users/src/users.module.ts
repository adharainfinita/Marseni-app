import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "apps/users/.development.env"
  }),
  TypeOrmModule.forRoot({...DataSourceConfig}),
  EnterprisesModule,
  EmployeeModule
  ],
})
export class UsersModule {
}
