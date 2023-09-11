import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeEntity } from '../entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './controllers/employee.controller';
import { EnterprisesModule } from '../enterprises/enterprises.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity]), EnterprisesModule],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
