import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeEntity } from '../entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './controllers/employee.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
