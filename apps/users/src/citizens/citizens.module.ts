import { Module } from '@nestjs/common';
import { CitizensService } from './services/citizens.service';
import { CitizensController } from './controllers/citizens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenEntity } from '../entities/citizens.entity';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([CitizenEntity]), EmployeeModule],
  providers: [CitizensService],
  controllers: [CitizensController],
})
export class CitizensModule {}
