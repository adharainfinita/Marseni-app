import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDTO } from '../dto/employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeServices: EmployeeService){}

  @Post('register')
  public async postEmployee(@Body() body:EmployeeDTO){
    return await this.employeeServices.addEmployee(body);
  }

  @Get('all')
  public async getAllEmployees() {
    return await this.employeeServices.findEmployees();
  }

  @Get('one')
  public async getEmployeeById(@Param() id:string){
    return await this.employeeServices.findEmployeeById(id);
  }

  @Put('one')
  public async updateEmployee(@Param() id:string, @Body() body:EmployeeDTO){
    return await this.employeeServices.updateEmployee(id, body);
  }

  @Delete('one')
  public async deleteEmployee(@Param() id:string){
    return await this.employeeServices.deleteEmployee(id);

  }

}
