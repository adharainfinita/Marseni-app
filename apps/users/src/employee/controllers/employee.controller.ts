import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { EmployeeEntity } from '../../entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeServices: EmployeeService){}

  @Get('hello')
  public HelloWorld(): string{
    return this.employeeServices.getHello();
  }

  @Get('ctm')
  public Dale() {
    return this.employeeServices.findEmployees();
  }

}
